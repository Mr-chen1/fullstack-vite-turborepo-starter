/**
 * Pure functions that generate Float32Array(N*3) point sets.
 *
 * All geometry-based shapes use THREE's built-in geometry classes +
 * MeshSurfaceSampler for uniform surface sampling — no math roll-your-own.
 *
 * Cloud is intentionally NOT normalised: its wide spread fills the sky.
 * Shapes A/B/C are normalised to ±TARGET units so they always fit the same
 * on-screen footprint regardless of the underlying geometry's native scale.
 */
import * as THREE from 'three';
import {FontLoader} from 'three/addons/loaders/FontLoader.js';
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js';
import {MeshSurfaceSampler} from 'three/addons/math/MeshSurfaceSampler.js';
// Font JSON is shipped inside the three package; resolveJsonModule handles the import.
import helvetikerJson from 'three/examples/fonts/helvetiker_regular.typeface.json';

// ── Constants ────────────────────────────────────────────────────────────────

export const N = 40_000;

// All normalised shapes fit inside ±NORM_TARGET on every axis.
const NORM_TARGET = 6;

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Centre points at origin and scale so the largest span = NORM_TARGET * 2. */
function normalizePoints(arr: Float32Array): Float32Array {
  let minX = Infinity;
  let minY = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let maxZ = -Infinity;

  for (let i = 0; i < arr.length; i += 3) {
    // TypedArray element access is always defined when the loop bounds are correct;
    // the ! assertions satisfy noUncheckedIndexedAccess without runtime overhead.
    const x = arr[i]!;
    const y = arr[i + 1]!;
    const z = arr[i + 2]!;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
    if (z < minZ) minZ = z;
    if (z > maxZ) maxZ = z;
  }

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const cz = (minZ + maxZ) / 2;
  const span = Math.max(maxX - minX, maxY - minY, maxZ - minZ);
  const s = span > 0 ? (NORM_TARGET * 2) / span : 1;

  const out = new Float32Array(arr.length);
  for (let i = 0; i < arr.length; i += 3) {
    out[i] = (arr[i]! - cx) * s;
    out[i + 1] = (arr[i + 1]! - cy) * s;
    out[i + 2] = (arr[i + 2]! - cz) * s;
  }

  return out;
}

/**
 * Sample n points uniformly from the surface of a BufferGeometry using
 * MeshSurfaceSampler.  The geometry is disposed after sampling.
 */
function sampleFromGeometry(geo: THREE.BufferGeometry, n: number): Float32Array {
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo);
  const sampler = new MeshSurfaceSampler(mesh).build();
  const pos = new THREE.Vector3();
  const arr = new Float32Array(n * 3);

  for (let i = 0; i < n; i++) {
    sampler.sample(pos);
    // Assignments to typed-array indices are always safe — TypeScript's
    // noUncheckedIndexedAccess only affects reads, not writes.
    // Cast to silence the spurious read-type widening on index expressions.
    (arr as Float32Array)[i * 3] = pos.x;
    (arr as Float32Array)[i * 3 + 1] = pos.y;
    (arr as Float32Array)[i * 3 + 2] = pos.z;
  }

  geo.dispose();
  return arr;
}

// ── 0 · Cloud ────────────────────────────────────────────────────────────────

/**
 * Random scatter across a large volume — intentionally NOT normalised so it
 * fills the entire viewport and gives the "star-field" feel.
 */
export function createCloud(n = N): Float32Array {
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 28;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 28;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 28;
  }

  return arr;
}

// ── A · Sphere ───────────────────────────────────────────────────────────────

/** Uniform surface sample of a sphere via MeshSurfaceSampler. */
export function createSphere(n = N): Float32Array {
  // High-segment sphere so the sampler's triangle area distribution is smooth.
  const geo = new THREE.SphereGeometry(1, 128, 64);
  const raw = sampleFromGeometry(geo, n);
  return normalizePoints(raw);
}

// ── B · Torus ────────────────────────────────────────────────────────────────

/** Uniform surface sample of a torus (tubular ratio chosen for clear hole). */
export function createTorus(n = N): Float32Array {
  // R=1, r=0.34 → tube-to-major ratio gives a visible donut hole.
  // High radialSegments / tubularSegments → smooth area distribution.
  const geo = new THREE.TorusGeometry(1, 0.34, 64, 256);
  const raw = sampleFromGeometry(geo, n);
  return normalizePoints(raw);
}

// ── C · Text "C" ─────────────────────────────────────────────────────────────

/**
 * Extruded "C" glyph sampled with MeshSurfaceSampler.
 *
 * Why sync FontLoader.parse()?
 * The helvetiker JSON is bundled at build-time via the JSON import above.
 * FontLoader.parse() accepts the raw object (no network request, no Promise).
 * This keeps the generator functions purely synchronous — they can all live
 * in useMemo without any async overhead.
 *
 * If you prefer a different string, change the TextGeometry first argument
 * (e.g. "R3F", "HI", "404").  Longer strings → more triangles → slightly
 * slower but still < 100 ms in practice.
 */
export function createText(n = N): Float32Array {
  const loader = new FontLoader();
  // FontLoader.parse() signature: parse(json: {}): Font
  // The inferred JSON type satisfies {} — no explicit cast required.
  const font = loader.parse(helvetikerJson);

  const geo = new TextGeometry('C', {
    font,
    size: 1,
    depth: 0.3,
    curveSegments: 14,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.03,
    bevelSegments: 5,
  });

  const raw = sampleFromGeometry(geo, n);
  return normalizePoints(raw);
}
