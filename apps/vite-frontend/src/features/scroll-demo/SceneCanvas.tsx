/**
 * SceneCanvas — GPU-driven scroll morph.
 *
 * ┌─ Geometry (created once, NEVER rebuilt) ───────────────────────────────┐
 * │  aPos0  vec3   "morph-from" positions  ← swapped on segment boundary   │
 * │  aPos1  vec3   "morph-to"  positions   ← swapped on segment boundary   │
 * │  aRand  float  per-particle [0,1)      ← shimmer phase seed            │
 * │  position vec3 dummy — only for THREE.js vertex-count bookkeeping      │
 * └────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─ ShaderMaterial uniforms ───────────────────────────────────────────────┐
 * │  uProgress  float  raw segment progress 0→1 (GSAP → ref → uniform)    │
 * │  uTime      float  elapsed seconds for shimmer                         │
 * │  uPointSize float  base size; attenuated by 1/distance in vertex shader│
 * │  uColor0    vec3   from-shape accent colour                            │
 * │  uColor1    vec3   to-shape accent colour                              │
 * └────────────────────────────────────────────────────────────────────────┘
 *
 * Morph data flow (no React state involved):
 *   GSAP onUpdate  → morphState.current.{segment, progress}   (write, 60 fps)
 *   R3F useFrame   → reads morphState.current every frame
 *                  → on segment change: swaps BufferAttribute arrays + needsUpdate
 *                  → every frame: mat.uniforms.uProgress.value = progress
 *
 * GPU vertex shader:
 *   float e = easeInOutCubic(uProgress);
 *   vec3  p = mix(aPos0, aPos1, e);   // ← entire interpolation on GPU
 *
 * Keyboard debug (0–3):
 *   Directly writes morphState so you can inspect any shape boundary.
 *   Triggers the same attribute-swap path as scroll.
 */
import {memo, useEffect, useMemo, useRef, useState} from 'react';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {
  N,
  usePointSets,
  type MorphState,
  type PointSets,
  type ShapeKey,
  SHAPE_HEX,
  SHAPE_LABELS,
  SHAPE_COUNT,
} from './usePointSets';

// ── GLSL: vertex shader ───────────────────────────────────────────────────────

const VERTEX_SHADER = /* glsl */ `
attribute vec3  aPos0;   /* morph from */
attribute vec3  aPos1;   /* morph to   */
attribute float aRand;   /* per-particle random [0,1) — phase seed */

uniform float uProgress;         /* raw segment morph progress 0..1        */
uniform float uDisperse;         /* 0 = tight shape, 1 = fully scattered    */
uniform float uTime;             /* elapsed seconds                          */
uniform float uPointSize;        /* base point size in px at reference dist  */
uniform vec3  uColor0;           /* from-shape accent colour                 */
uniform vec3  uColor1;           /* to-shape accent colour                   */

/* Pointer repel — world-space pointer position + interaction params.
   uPointer is initialised to a far-off point (0,0,-9999) so it has
   zero effect until the first mouse/touch event is received. */
uniform vec3  uPointer;          /* world-space pointer (z=0 plane hit)      */
uniform float uPointerRadius;    /* repel falloff radius in world units       */
uniform float uPointerStrength;  /* max displacement distance in world units  */

varying vec3  vColor;
varying float vAlpha;
varying float vRepelF;           /* repel factor [0,1] — fragment brightens repelled particles */

/* Smooth cubic ease-in-out */
float easeInOutCubic(float t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5;
}

/* Deterministic hash — maps a float seed to [0, 1).
   Uses a large-prime sinusoidal trick; no texture lookup needed. */
float hash(float n) {
  return fract(sin(n * 127.1) * 43758.5453123);
}

void main() {
  /* ── Base morph position (GPU lerp, zero JS work per frame) ──────── */
  float e    = easeInOutCubic(clamp(uProgress, 0.0, 1.0));
  vec3  base = mix(aPos0, aPos1, e);

  /* ── Disperse offset ─────────────────────────────────────────────── */
  /* Each particle gets a unique outward direction seeded by aRand,
     stable across frames — particles don't swap directions mid-animation. */
  vec3 disperseDir = normalize(vec3(
    hash(aRand)            * 2.0 - 1.0,
    hash(aRand + 1.73205)  * 2.0 - 1.0,
    hash(aRand + 2.71828)  * 2.0 - 1.0
  ));

  /* Organic turbulence: two sinusoids with different frequencies/phases.
     Scaled by dEase so there is zero vibration when particles are tight. */
  float turb = sin(aRand * 6.28318 + uTime * 0.85) * 0.60
             + cos(aRand * 4.18879 + uTime * 0.60) * 0.40;

  float dEase = easeInOutCubic(clamp(uDisperse, 0.0, 1.0));
  /* Magnitude varied per particle so the scattered cloud isn't a uniform sphere.
     Range: 7–14 world units, giving a dramatic explosion without clipping the fog. */
  float mag   = mix(7.0, 14.0, hash(aRand + 5.0));

  vec3 pos = base + disperseDir * (mag + turb * dEase) * dEase;

  /* Always-on micro-shimmer for organic feel in tight shapes (±0.018 units) */
  float shimmer = sin(aRand * 6.28318 + uTime * 1.4) * 0.018;
  pos += vec3(shimmer, shimmer * 0.6, shimmer * 0.35);

  /* ── Pointer repel ───────────────────────────────────────────────── */
  /* Uses 3-D distance so particles on different z-layers are naturally
     less affected — only particles that are visually close get nudged.
     max(…, 0.001) prevents division by zero when pos == uPointer.      */
  float pDist  = max(distance(pos, uPointer), 0.001);
  float repelF = smoothstep(uPointerRadius, 0.0, pDist);
  /* Normalised repel direction: away from the pointer */
  pos    += (pos - uPointer) / pDist * repelF * uPointerStrength;
  vRepelF = repelF;

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);

  /* Points grow slightly at peak scatter → less crisp, more cloud-like */
  float sizePulse = 1.0 + dEase * 0.75;
  gl_PointSize = clamp(
    uPointSize * 10.0 / max(-mvPos.z, 0.5) * sizePulse,
    1.0, 32.0
  );

  gl_Position = projectionMatrix * mvPos;

  vColor = mix(uColor0, uColor1, e);

  /* Particles fade as they scatter — reinforces the "explosion / cloud" read.
     Using pos (post-disperse) so scattered particles at ≥18 units are near-invisible. */
  float distAlpha = clamp(1.5 - length(pos) / 18.0, 0.05, 1.0);
  vAlpha = distAlpha * (1.0 - dEase * 0.42);
}
`;

// ── GLSL: fragment shader ─────────────────────────────────────────────────────

const FRAGMENT_SHADER = /* glsl */ `
varying vec3  vColor;
varying float vAlpha;
varying float vRepelF;  /* repel factor from vertex shader [0,1] */

void main() {
  /* Soft circular disc from gl_PointCoord */
  vec2  uv   = gl_PointCoord - 0.5;
  float dist = length(uv);

  /* Smooth outer rim */
  float rim  = 1.0 - smoothstep(0.28, 0.5, dist);
  if (rim < 0.004) discard;

  /* Bright core glow + subtle highlight on repelled particles.
     vRepelF adds ≤14% extra brightness — just enough to see the interaction
     without breaking the colour palette. */
  float core  = 1.0 - smoothstep(0.0, 0.2, dist);
  vec3  color = mix(vColor, vec3(1.0), core * 0.32 + vRepelF * 0.14);

  gl_FragColor = vec4(color, rim * vAlpha * 0.72);
}
`;

// ── Camera constants ──────────────────────────────────────────────────────────

/**
 * The camera never moves with scroll.  A fixed position keeps all shapes
 * consistently framed throughout the experience.
 *
 * Geometry: shapes are normalised to ±6 world-units (NORM_TARGET = 6).
 * With fov = 62° and BASE_Z = 12 the visible half-height at z=0 is
 *   12 × tan(31°) ≈ 7.2 units  →  shapes occupy ~83 % of frame height.
 *
 * Dispersed particles reach ±14 units from centre — they intentionally
 * fly off-screen during the explosion and return on gather.
 */
const BASE_Z = 12; // fixed camera z (world units)
const BREATH_AMP = 0.05; // breathing z amplitude (world units)
const BREATH_FREQ = 0.4; // breathing angular frequency (rad/s)

// ── Segment configuration ─────────────────────────────────────────────────────

type SegmentConfig = {readonly from: ShapeKey; readonly to: ShapeKey};

/**
 * 5-tuple so accessing with `0|1|2|3|4` returns `SegmentConfig` (never undefined).
 *
 * Scroll segment → attribute pair mapping:
 *  S0  cloud→sphere   aPos0=cloud,   aPos1=sphere  (morph, disperse=0)
 *  S1  sphere scatter  aPos0=sphere,  aPos1=sphere  (hold tight, disperse 0→1)
 *  S2  gather→torus    aPos0=sphere,  aPos1=torus   (morph, disperse 1→0)
 *  S3  torus scatter   aPos0=torus,   aPos1=torus   (hold tight, disperse 0→1)
 *  S4  gather→text     aPos0=torus,   aPos1=text    (morph, disperse 1→0)
 *
 * For scatter segments (S1/S3) aPos0 === aPos1 → mix() always returns that shape.
 * The disperse offset is the only thing that changes visually.
 */
const SEGMENT_CONFIGS: readonly [SegmentConfig, SegmentConfig, SegmentConfig, SegmentConfig, SegmentConfig] = [
  {from: 0, to: 1}, // S0: cloud  → sphere
  {from: 1, to: 1}, // S1: sphere scatter (aPos0=aPos1=sphere)
  {from: 1, to: 2}, // S2: gather → torus
  {from: 2, to: 2}, // S3: torus  scatter (aPos0=aPos1=torus)
  {from: 2, to: 3}, // S4: gather → text
];

/** Maps debug key → the morphState that shows exactly that shape with no scatter. */
const KEY_TO_MORPH: Record<ShapeKey, {segment: 0 | 1 | 2 | 3 | 4; progress: number; disperse: number}> = {
  0: {segment: 0, progress: 0, disperse: 0}, // cloud  (start of S0)
  1: {segment: 0, progress: 1, disperse: 0}, // sphere (end of S0, tight)
  2: {segment: 2, progress: 1, disperse: 0}, // torus  (end of S2, tight)
  3: {segment: 4, progress: 1, disperse: 0}, // text   (end of S4, tight)
};

// ── GpuMorphPoints (R3F component — runs inside Canvas context) ───────────────

type GpuMorphPointsProps = {
  readonly sets: PointSets;
  readonly morphState: {current: MorphState};
  /**
   * Enable the pointer-repel interaction (default: true).
   * Set to false for low-end or touch-only devices where mouse hover
   * is irrelevant and you want to skip raycasting overhead every frame.
   * Detection example:
   *   isPointerRepel={window.matchMedia('(pointer: fine)').matches}
   */
  readonly isPointerRepel?: boolean;
};

function GpuMorphPoints({sets, morphState, isPointerRepel = true}: GpuMorphPointsProps) {
  const pointsRef = useRef<THREE.Points>(null);
  /**
   * Tracks the last processed segment so useFrame can detect changes.
   * Initialised to -1 so the very first frame always loads the S0 attributes.
   */
  const prevSegRef = useRef<number>(-1);

  // ── Pointer repel state (all refs — zero React re-renders) ────────────────
  // Only raycaster is needed from useThree — camera is supplied by useFrame's callback.
  const {raycaster} = useThree();

  /**
   * Raw NDC pointer coordinates, stored as THREE.Vector2 so they can be passed
   * directly to raycaster.setFromCamera() without an extra allocation per frame.
   */
  const pointerNDC = useRef(new THREE.Vector2(0, 0));

  /**
   * Smoothed world-space pointer, initialised far off-screen.
   * Lerped toward the raycaster hit point each frame for smooth movement.
   */
  const pointerSmooth = useRef(new THREE.Vector3(0, 0, -9999));

  /**
   * Pre-allocated hit-point buffer — avoids `new THREE.Vector3()` inside useFrame
   * (which would trigger GC pressure at 60 fps).
   */
  const hitBuf = useRef(new THREE.Vector3());

  /**
   * The z = 0 plane (xy-plane) — where particle shapes live.
   * Raycasting from the camera through mouse NDC onto this plane gives the
   * world-space position the user is "pointing at".
   */
  const repelPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);

  // Mouse + touch listeners (window-level, not canvas, because the canvas
  // has pointerEvents: 'none' — it is a fixed background element).
  useEffect(() => {
    if (!isPointerRepel) return; // skip setup entirely on low-end / coarse-pointer devices

    function onMouseMove(e: MouseEvent) {
      pointerNDC.current.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    }

    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (!t) return;
      pointerNDC.current.set((t.clientX / window.innerWidth) * 2 - 1, -(t.clientY / window.innerHeight) * 2 + 1);
    }

    // Move pointer far away when the cursor leaves the window
    // so repel silently disappears without a visible jump.
    function onMouseLeave() {
      pointerNDC.current.x = 0;
      pointerNDC.current.y = 0;
      pointerSmooth.current.set(0, 0, -9999);
    }

    globalThis.addEventListener('mousemove', onMouseMove);
    globalThis.addEventListener('mouseleave', onMouseLeave);
    globalThis.addEventListener('touchmove', onTouchMove, {passive: true});

    return () => {
      globalThis.removeEventListener('mousemove', onMouseMove);
      globalThis.removeEventListener('mouseleave', onMouseLeave);
      globalThis.removeEventListener('touchmove', onTouchMove);
    };
  }, [isPointerRepel]);

  // ── BufferGeometry — attributes swapped in-place, never recreated ─────────
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();

    // Copies of sets[0] / sets[1] for initial segment S0 (cloud → sphere).
    // Using copies prevents sets[] from ever being mutated.
    g.setAttribute('aPos0', new THREE.BufferAttribute(new Float32Array(sets[0]), 3));
    g.setAttribute('aPos1', new THREE.BufferAttribute(new Float32Array(sets[1]), 3));

    // Per-particle random floats — seeded once, used as shimmer phase offset.
    const rand = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      rand[i] = Math.random();
    }

    g.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));

    // Dummy 'position' attribute required by THREE.js to determine vertex count.
    // All values are 0 — the shader uses aPos0/aPos1 for actual geometry.
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));

    // Override bounding sphere to prevent incorrect frustum culling
    // (frustumCulled is also false on <points>, but this silences warnings).
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 32);

    return g;
    // sets has a stable identity (from usePointSets useMemo(fn,[])) — safe to omit.
  }, [sets]);

  // ── ShaderMaterial — uniforms mutated every frame, never recreated ─────────
  //
  // We keep a typed `uniforms` literal separate from the ShaderMaterial so
  // useFrame can write `uniforms.uTime.value = x` without going through the
  // `uniforms[string]` index signature, which noUncheckedIndexedAccess widens
  // to `IUniform | undefined`.
  const {mat, uniforms} = useMemo(() => {
    const u = {
      uProgress: {value: 0},
      uDisperse: {value: 0},
      uTime: {value: 0},
      uPointSize: {value: 4.2},
      uColor0: {value: new THREE.Color(SHAPE_HEX[0])},
      uColor1: {value: new THREE.Color(SHAPE_HEX[1])},
      // Pointer repel — z = -9999 keeps the pointer "infinitely far away"
      // so there is zero effect until the first real pointer event arrives.
      uPointer: {value: new THREE.Vector3(0, 0, -9999)},
      uPointerRadius: {value: 3.5}, // world-unit falloff radius
      uPointerStrength: {value: 1.8}, // max repel displacement (world units)
    };
    const m = new THREE.ShaderMaterial({
      uniforms: u,
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      // Additive blending: overlapping particles sum their colours,
      // creating a natural glow on dense regions.
      blending: THREE.AdditiveBlending,
    });
    return {mat: m, uniforms: u};
  }, []);

  // Dispose GPU resources on unmount
  useEffect(
    () => () => {
      geo.dispose();
      mat.dispose();
    },
    [geo, mat],
  );

  useFrame(({camera, clock}) => {
    // ── Camera: fixed position + subtle breathing, NOT scroll-driven ──────
    // Scroll no longer moves the camera — all shapes stay fully in frame.
    const elapsed = clock.getElapsedTime();
    camera.position.set(0, 0, BASE_Z + Math.sin(elapsed * BREATH_FREQ) * BREATH_AMP);

    if (!pointsRef.current) return;

    uniforms.uTime.value = elapsed; // reuse the value already read above

    const {segment, progress, disperse} = morphState.current;

    // ── Segment change → swap aPos0 / aPos1 + update colour uniforms ─────
    // Runs at most 5 times per full scroll — cost is two GPU buffer uploads (~960 KB each).
    if (segment !== prevSegRef.current) {
      prevSegRef.current = segment;

      const cfg = SEGMENT_CONFIGS[segment]; // always SegmentConfig (5-tuple, indexed by 0|1|2|3|4)
      const pos0 = geo.getAttribute('aPos0') as THREE.BufferAttribute;
      const pos1 = geo.getAttribute('aPos1') as THREE.BufferAttribute;

      (pos0.array as Float32Array).set(sets[cfg.from]);
      (pos1.array as Float32Array).set(sets[cfg.to]);
      pos0.needsUpdate = true;
      pos1.needsUpdate = true;

      uniforms.uColor0.value.set(SHAPE_HEX[cfg.from]);
      uniforms.uColor1.value.set(SHAPE_HEX[cfg.to]);
    }

    // ── Uniforms written every frame (plain float writes, negligible cost) ─
    uniforms.uProgress.value = progress;
    uniforms.uDisperse.value = disperse;

    // ── Pointer repel: raycast NDC → z=0 plane, lerp smooth world pos ────
    if (isPointerRepel) {
      raycaster.setFromCamera(pointerNDC.current, camera);
      if (raycaster.ray.intersectPlane(repelPlane, hitBuf.current)) {
        // Lerp factor 0.10 → ~6 frames to close 50% of the gap at 60 fps.
        // Feels responsive while hiding any sudden NDC jumps.
        pointerSmooth.current.lerp(hitBuf.current, 0.1);
        uniforms.uPointer.value.copy(pointerSmooth.current);
      }
    }

    // ── Slow idle rotation keeps the cloud looking alive at rest ──────────
    pointsRef.current.rotation.y = elapsed * 0.035;
    pointsRef.current.rotation.x = elapsed * 0.012;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      {/* Attach pre-built THREE objects — R3F never recreates them */}
      <primitive object={geo} attach="geometry" />
      <primitive object={mat} attach="material" />
    </points>
  );
}

// ── ShapeBadge (keyboard debug HUD) ──────────────────────────────────────────

function ShapeBadge({current}: {readonly current: ShapeKey}) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 90,
        left: 24,
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      {(Array.from({length: SHAPE_COUNT}, (_, i) => i) as ShapeKey[]).map((key) => {
        const active = current === key;
        return (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              opacity: active ? 1 : 0.35,
              transition: 'opacity 0.3s',
            }}
          >
            <kbd
              style={{
                minWidth: 22,
                textAlign: 'center',
                background: active ? SHAPE_HEX[key] : 'transparent',
                border: `1px solid ${SHAPE_HEX[key]}`,
                borderRadius: 4,
                padding: '2px 7px',
                color: active ? '#050a18' : SHAPE_HEX[key],
                fontFamily: 'monospace',
                fontSize: 12,
                fontWeight: 700,
                lineHeight: 1.5,
                transition: 'background 0.3s, color 0.3s',
              }}
            >
              {key}
            </kbd>
            <span
              style={{
                color: active ? '#ffffff' : 'rgba(255,255,255,0.42)',
                fontFamily: 'monospace',
                fontSize: 12,
                letterSpacing: '0.06em',
                transition: 'color 0.3s',
              }}
            >
              {SHAPE_LABELS[key]}
            </span>
          </div>
        );
      })}
      <div
        style={{
          marginTop: 4,
          fontFamily: 'monospace',
          fontSize: 10,
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.09em',
        }}
      >
        DEBUG · PRESS 0 – 3
      </div>
    </div>
  );
}

// ── SceneCanvas (exported) ────────────────────────────────────────────────────

export type SceneCanvasProps = {
  readonly morphState: {current: MorphState};
  /**
   * Enable pointer repel (default: true).
   * Disable on coarse-pointer / low-end devices:
   *   <SceneCanvas isPointerRepel={window.matchMedia('(pointer: fine)').matches} …/>
   */
  readonly isPointerRepel?: boolean;
};

/**
 * React.memo prevents re-renders when sibling state (e.g. debugT badge in
 * ScrollSections) updates — morphState is a stable ref.
 */
export const SceneCanvas = memo(({morphState, isPointerRepel = true}: SceneCanvasProps) => {
  const sets = usePointSets();

  const [currentShape, setCurrentShape] = useState<ShapeKey>(0);

  // Keyboard debug: directly write morphState — same path as GSAP scroll.
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      // Ignore key presses while the user is typing in a form field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (!['0', '1', '2', '3'].includes(e.key)) return;

      const k = Number(e.key) as ShapeKey;
      const m = KEY_TO_MORPH[k];
      morphState.current.segment = m.segment;
      morphState.current.progress = m.progress;
      morphState.current.disperse = m.disperse; // always 0 — shows tight shape
      setCurrentShape(k); // triggers badge re-render only
    }

    globalThis.addEventListener('keydown', handleKey);
    return () => {
      globalThis.removeEventListener('keydown', handleKey);
    };
  }, [morphState]);

  return (
    <>
      {/* Fixed full-screen WebGL background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: '#050a18',
          pointerEvents: 'none',
        }}
      >
        <Canvas
          camera={{position: [0, 0, BASE_Z], fov: 62, near: 0.1, far: 120}}
          gl={{antialias: false, powerPreference: 'high-performance'}}
          dpr={[1, 1.5]}
        >
          <fog attach="fog" args={['#050a18', 18, 65]} />
          <GpuMorphPoints sets={sets} morphState={morphState} isPointerRepel={isPointerRepel} />
        </Canvas>
      </div>

      {/* Keyboard debug badge — outside Canvas, pointer-events enabled */}
      <ShapeBadge current={currentShape} />
    </>
  );
});
