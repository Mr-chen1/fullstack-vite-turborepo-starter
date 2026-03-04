import {useTranslation} from 'react-i18next';
import {Helmet} from 'react-helmet-async';
import {Link, useParams} from 'react-router-dom';

export function Home() {
  const {t} = useTranslation();
  const {locale} = useParams<{locale: string}>();

  return (
    <>
      <Helmet>
        <title>Vite Frontend</title>
        <meta name="description" content="Frontend powered by Vite" />
        <html lang={locale || 'en'} />
      </Helmet>
      <h2>{t('pages.home.title')}</h2>

      {/* ── Demo entry point ── */}
      <Link
        to={`/${locale ?? 'en'}/scroll-demo`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          marginTop: 24,
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #050a18 0%, #0d1f3c 100%)',
          border: '1px solid rgba(79,195,247,0.4)',
          borderRadius: 10,
          color: '#4fc3f7',
          fontFamily: 'monospace',
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textDecoration: 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(79,195,247,0.9)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(79,195,247,0.25)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(79,195,247,0.4)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
        }}
      >
        ✦ 3D Scroll Demo — R3F + GSAP
      </Link>
    </>
  );
}
