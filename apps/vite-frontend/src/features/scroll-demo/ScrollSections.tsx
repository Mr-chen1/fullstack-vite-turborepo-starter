import {useCallback, useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import type {MorphState} from './usePointSets';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  {
    id: 'home',
    index: '01',
    title: '\u9996\u9875',
    description:
      '\u4EE5 threejs \u7C92\u5B50\u573A\u4F5C\u4E3A\u54C1\u724C\u5F00\u573A\uFF0C\u5EFA\u7ACB\u7B2C\u4E00\u89C6\u89C9\u51B2\u51FB\u3002' +
      '\u6C89\u6D78\u5F0F\u9996\u5C4F\u8D1F\u8D23\u5438\u5F15\u6CE8\u610F\u529B\uFF0C\u540C\u65F6\u4E3A\u540E\u7EED\u7684\u521B\u4F5C\u3001\u8D44\u4EA7\u4E0E\u54A8\u8BE2\u5185\u5BB9\u5EFA\u7ACB\u7EDF\u4E00\u53D9\u4E8B\u3002',
    align: 'left' as const,
  },
  {
    id: 'ai-assistant',
    index: '02',
    title: 'AI\u667A\u80FD\u521B\u4F5C\u52A9\u624B',
    description:
      '\u56F4\u7ED5\u63D0\u793A\u8BCD\u751F\u6210\u3001\u98CE\u683C\u8FC1\u79FB\u3001\u811A\u672C\u8349\u62DF\u548C\u591A\u6A21\u6001\u7F16\u6392\u5C55\u5F00\u3002' +
      '\u8BA9\u521B\u4F5C\u8005\u4ECE\u7075\u611F\u6355\u6349\u5230\u5185\u5BB9\u4EA7\u51FA\uFF0C\u7F29\u77ED\u4ECE\u60F3\u6CD5\u5230\u6210\u54C1\u7684\u8DEF\u5F84\u3002',
    align: 'right' as const,
  },
  {
    id: 'digital-assets',
    index: '03',
    title: '\u6570\u5B57\u8D44\u4EA7',
    description:
      '\u7EDF\u4E00\u7BA1\u7406\u6A21\u578B\u3001\u7D20\u6750\u3001\u6A21\u677F\u4E0E\u54C1\u724C\u7EC4\u4EF6\u3002' +
      '\u901A\u8FC7\u7248\u672C\u5316\u548C\u6807\u7B7E\u5316\u7EC4\u7EC7\u8D44\u4EA7\uFF0C\u8BA9\u56E2\u961F\u5728\u521B\u4F5C\u4E0E\u590D\u7528\u4E4B\u95F4\u4FDD\u6301\u9AD8\u6548\u534F\u540C\u3002',
    align: 'left' as const,
  },
  {
    id: 'gallery',
    index: '04',
    title: '\u4F5C\u54C1\u5E93',
    description:
      '\u628A\u9879\u76EE\u6210\u679C\u3001\u6848\u4F8B\u6F14\u793A\u4E0E\u7CBE\u9009\u63D0\u6848\u6574\u5408\u5230\u7EDF\u4E00\u5C55\u793A\u7A7A\u95F4\u3002' +
      '\u65E2\u670D\u52A1\u5916\u90E8\u5448\u73B0\uFF0C\u4E5F\u8BA9\u5185\u90E8\u56E2\u961F\u5FEB\u901F\u56DE\u770B\u53EF\u590D\u7528\u7684\u8868\u8FBE\u65B9\u5F0F\u4E0E\u6210\u529F\u6837\u4F8B\u3002',
    align: 'right' as const,
  },
  {
    id: 'insights',
    index: '05',
    title: '\u5E73\u53F0\u54A8\u8BE2',
    description:
      '\u805A\u5408\u5E73\u53F0\u52A8\u6001\u3001\u8FD0\u8425\u5EFA\u8BAE\u4E0E\u521B\u4F5C\u8D8B\u52BF\u6D1E\u5BDF\u3002' +
      '\u8BA9\u54C1\u724C\u3001\u5185\u5BB9\u56E2\u961F\u548C\u521B\u4F5C\u8005\u5728\u4E00\u4E2A\u5165\u53E3\u5B8C\u6210\u7406\u89E3\u3001\u51B3\u7B56\u4E0E\u4E0B\u4E00\u6B65\u884C\u52A8\u3002',
    align: 'left' as const,
  },
] as const;

const SEG_LABELS = [
  'S0 cloud->sphere',
  'S1 sphere explode',
  'S2 gather->torus',
  'S3 torus explode',
  'S4 gather->text',
] as const;

type SectionCardProps = {
  readonly section: (typeof SECTIONS)[number];
};

function SectionCard({section}: SectionCardProps) {
  return (
    <section
      data-nav-section="true"
      id={section.id}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: section.align === 'left' ? 'flex-start' : 'flex-end',
        padding: '0 8vw',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: 520,
          marginTop: 72,
          padding: '40px 44px',
          background: 'rgba(5, 10, 24, 0.60)',
          border: '1px solid rgba(79, 195, 247, 0.18)',
          borderRadius: 18,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.45)',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 11,
            letterSpacing: '0.22em',
            color: '#4fc3f7',
            marginBottom: 14,
            textTransform: 'uppercase',
          }}
        >
          Section {section.index}
        </div>

        <h2
          style={{
            margin: '0 0 18px',
            fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            background: 'linear-gradient(135deg, #ffffff 0%, #81d4fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {section.title}
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          {section.description}
        </p>
      </div>
    </section>
  );
}

type DebugBadgeProps = {
  readonly scrollT: number;
  readonly segment: number;
  readonly segProg: number;
  readonly disperse: number;
};

function DebugBadge({scrollT, segment, segProg, disperse}: DebugBadgeProps) {
  const filled = Math.round(scrollT * 20);
  const bar = '█'.repeat(filled) + '░'.repeat(20 - filled);
  const segLabel = SEG_LABELS[segment] ?? '';
  const dFilled = Math.round(disperse * 10);
  const dBar = '■'.repeat(dFilled) + '·'.repeat(10 - dFilled);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 200,
        background: 'rgba(5, 10, 24, 0.85)',
        border: '1px solid rgba(79, 195, 247, 0.35)',
        borderRadius: 10,
        padding: '10px 18px',
        fontFamily: 'monospace',
        fontSize: 12,
        color: '#4fc3f7',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        lineHeight: 1.7,
        minWidth: 248,
      }}
    >
      <div>
        scrollT <span style={{color: '#81d4fa', fontWeight: 700}}>{scrollT.toFixed(3)}</span>
      </div>
      <div style={{color: 'rgba(79,195,247,0.50)', fontSize: 11}}>{bar}</div>

      <div style={{marginTop: 5, color: '#ce93d8', fontSize: 11}}>
        {segLabel} <span style={{color: '#fff', fontWeight: 700}}>{segProg.toFixed(3)}</span>
      </div>

      <div style={{color: '#f48fb1', fontSize: 11}}>
        disperse <span style={{fontWeight: 700}}>{disperse.toFixed(3)}</span>{' '}
        <span style={{color: 'rgba(244,143,177,0.55)'}}>{dBar}</span>
      </div>
    </div>
  );
}

type ScrollSectionsProps = {
  readonly scrollT: {current: number};
  readonly morphState: {current: MorphState};
};

export function ScrollSections({scrollT, morphState}: ScrollSectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [debugScrollT, setDebugScrollT] = useState(0);
  const [debugSegment, setDebugSegment] = useState(0);
  const [debugSegProg, setDebugSegProg] = useState(0);
  const [debugDisperse, setDebugDisperse] = useState(0);

  const tickerCallback = useCallback(() => {
    setDebugScrollT(scrollT.current);
    setDebugSegment(morphState.current.segment);
    setDebugSegProg(morphState.current.progress);
    setDebugDisperse(morphState.current.disperse);
  }, [scrollT, morphState]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const segmentCount = 5;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate(self) {
        scrollT.current = self.progress;

        const raw = self.progress * segmentCount;
        const capped = Math.min(raw, segmentCount - 0.0001);
        const segment = Math.floor(capped) as 0 | 1 | 2 | 3 | 4;
        const localProgress = capped - segment;

        const morph = morphState.current;
        morph.segment = segment;

        switch (segment) {
          case 0: {
            morph.progress = localProgress;
            morph.disperse = 0;
            break;
          }

          case 1: {
            morph.progress = 1;
            morph.disperse = localProgress;
            break;
          }

          case 2: {
            morph.progress = localProgress;
            morph.disperse = 1 - localProgress;
            break;
          }

          case 3: {
            morph.progress = 1;
            morph.disperse = localProgress;
            break;
          }

          case 4: {
            morph.progress = localProgress;
            morph.disperse = 1 - localProgress;
            break;
          }
        }
      },
    });

    gsap.ticker.add(tickerCallback);

    return () => {
      trigger.kill();
      gsap.ticker.remove(tickerCallback);
    };
  }, [scrollT, morphState, tickerCallback]);

  return (
    <>
      <DebugBadge disperse={debugDisperse} scrollT={debugScrollT} segProg={debugSegProg} segment={debugSegment} />

      <div ref={containerRef} style={{position: 'relative', zIndex: 10}}>
        {SECTIONS.map((section) => (
          <SectionCard key={section.index} section={section} />
        ))}
      </div>
    </>
  );
}
