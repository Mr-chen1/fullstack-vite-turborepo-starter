/**
 * ScrollDemo — orchestration page.
 *
 * Shared refs:
 *   scrollT     { current: number }   0→1 over total scroll
 *     └── ScrollSections  WRITES  via GSAP onUpdate (for debug badge only)
 *
 *   morphState  { current: MorphState }
 *     ├── ScrollSections  WRITES  segment + progress + disperse
 *     └── SceneCanvas     READS   via R3F useFrame (attribute swap + uniforms)
 *
 * The camera is now FIXED at BASE_Z — it no longer follows scrollT.
 * All animation stays in the GL thread; no React re-renders at 60 fps.
 */
import {useRef} from 'react';
import {Helmet} from 'react-helmet-async';
import {SceneCanvas} from '@/features/scroll-demo/SceneCanvas';
import {ScrollSections} from '@/features/scroll-demo/ScrollSections';
import {createMorphState} from '@/features/scroll-demo/usePointSets';

export function ScrollDemo() {
  // scrollT is still passed to ScrollSections for the debug badge display.
  // SceneCanvas no longer receives it — the camera is fixed.
  const scrollT = useRef(0);
  const morphState = useRef(createMorphState());

  return (
    <>
      <Helmet>
        <title>GPU Morph Demo — R3F + GSAP + ShaderMaterial</title>
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background: #050a18;
            overflow-x: hidden;
          }
          /* BareLayout wraps in <main> — strip any padding */
          main { padding: 0 !important; margin: 0 !important; }
        `}</style>
      </Helmet>

      <div style={{position: 'relative', background: 'transparent'}}>
        {/* Fixed WebGL background — z-index 0, camera never moves with scroll */}
        <SceneCanvas morphState={morphState} />

        {/* Scrollable HTML content — z-index 10, provides scroll height */}
        <ScrollSections scrollT={scrollT} morphState={morphState} />
      </div>
    </>
  );
}
