import {Outlet, useLocation, useParams} from 'react-router-dom';
import {Header} from '@/components/header/header.component';
import {Footer} from '@/components/footer/footer.component';
import {cn} from '@/lib/utils';

export function MainLayout() {
  const location = useLocation();
  const {locale} = useParams<{locale: string}>();
  const isLandingPage = location.pathname === `/${locale ?? 'en'}`;

  return (
    <>
      <Header />
      <main
        className={cn(
          'min-h-screen',
          isLandingPage ? 'w-full' : 'mx-auto flex w-full max-w-7xl flex-col px-2 pb-12 pt-28 md:px-4',
        )}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
