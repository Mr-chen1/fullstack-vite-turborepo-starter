import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {RevenueConsoleShell} from '@/features/revenue-management/components/revenue-console-shell.tsx';

export function RevenueManagementConsolePage() {
  const {locale} = useParams<{locale: string}>();

  return (
    <>
      <Helmet>
        <title>Hotel Revenue Agent Console</title>
        <meta name="description" content="Hotel revenue management agent console demo" />
        <html lang={locale ?? 'en'} />
      </Helmet>

      <RevenueConsoleShell />
    </>
  );
}
