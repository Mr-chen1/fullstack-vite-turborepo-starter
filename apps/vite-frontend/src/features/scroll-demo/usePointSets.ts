/**
 * React hook that generates all 4 point sets exactly once via useMemo.
 *
 * Each generator takes < 50 ms (MeshSurfaceSampler is fast on modern CPUs),
 * so the total synchronous cost is ~150-250 ms — acceptable for a demo.
 * The cost is paid during the first render of SceneCanvas, after which
 * no re-allocation ever occurs.
 */
import {useMemo} from 'react';
import * as THREE from 'three';
import {createCloud, createSphere, createTorus, createText} from './createPointSets';

// Re-export N so consumers (SceneCanvas) have a single import path.

// ── Scroll-driven morph state ─────────────────────────────────────────────────

/**
 * Shared mutable state written by GSAP ScrollTrigger (ScrollSections)
 * and read by R3F useFrame (SceneCanvas) every animation frame.
 *
 * Using a plain object ref means zero React re-renders for high-frequency
 * morph updates — GSAP fires onUpdate at 60 fps.
 */
export type MorphState = {
  /** Local progress within the current morph segment, 0 → 1. */
  progress: number;
  /**
   * Scatter amount written by GSAP, read by the vertex shader via uDisperse.
   *  0 = tight shape
   *  1 = fully exploded cloud
   *
   * Disperse and morph interleave across 5 segments:
   *  S0: cloud→sphere  (progress 0→1, disperse = 0)
   *  S1: sphere scatter (progress = 1, disperse 0→1)
   *  S2: gather→torus  (progress 0→1, disperse 1→0)
   *  S3: torus scatter  (progress = 1, disperse 0→1)
   *  S4: gather→text   (progress 0→1, disperse 1→0)
   */
  disperse: number;
  /**
   * Active segment index (0–4).
   * Determines which aPos0/aPos1 attribute pair is loaded.
   */
  segment: 0 | 1 | 2 | 3 | 4;
};

/** Factory so callers don't hard-code the initial literal. */
export function createMorphState(): MorphState {
  return {progress: 0, disperse: 0, segment: 0};
}

// ── Shared types & constants ─────────────────────────────────────────────────

export type ShapeKey = 0 | 1 | 2 | 3;

export const SHAPE_COUNT = 4 as const;

export const SHAPE_LABELS: Record<ShapeKey, string> = {
  0: 'Cloud',
  1: 'Sphere',
  2: 'Torus',
  3: 'Text "C"',
};

/**
 * Per-shape accent colours.
 * THREE.Color objects are pre-allocated at module level so useFrame never
 * allocates during animation.
 */
export const SHAPE_COLORS: Readonly<[THREE.Color, THREE.Color, THREE.Color, THREE.Color]> = [
  new THREE.Color('#4fc3f7'), // 0 · cloud   — sky blue
  new THREE.Color('#80cbc4'), // 1 · sphere  — teal
  new THREE.Color('#ce93d8'), // 2 · torus   — lavender
  new THREE.Color('#f48fb1'), // 3 · text    — rose
];

/** HEX strings for CSS usage (ShapeBadge labels). */
export const SHAPE_HEX: Record<ShapeKey, string> = {
  0: '#4fc3f7',
  1: '#80cbc4',
  2: '#ce93d8',
  3: '#f48fb1',
};

// ── Types ────────────────────────────────────────────────────────────────────

/**
 * All 4 point sets as a fixed-length readonly tuple.
 * Each element is Float32Array(N * 3).  Never mutated after creation.
 */
export type PointSets = Readonly<[Float32Array, Float32Array, Float32Array, Float32Array]>;

// ── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Returns all 4 point sets, memoised for the lifetime of the component.
 * Logs generation time to console for transparency.
 */
export function usePointSets(): PointSets {
  return useMemo<PointSets>(() => {
    // const t0 = performance.now();

    const sets: PointSets = [createCloud(), createSphere(), createTorus(), createText()];

    // const ms = (performance.now() - t0).toFixed(0);
    // console.info(`[scroll-demo] PointSets generated — ${N.toLocaleString()} pts × 4 shapes in ${ms} ms`);

    return sets;
    // useMemo with empty deps: generate once, never again.
  }, []);
}

export {N} from './createPointSets';
