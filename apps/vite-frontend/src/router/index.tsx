import {createBrowserRouter, Navigate} from 'react-router-dom';
import {ScrollDemo} from '../pages/ScrollDemo.tsx';
import {ErrorBoundary} from '../pages/ErrorBoundary.tsx';
import {NotFound} from '../pages/NotFound.tsx';
import {LoginPage} from '../pages/auth/LoginPage.tsx';
import {RegisterPage} from '../pages/auth/RegisterPage.tsx';
import {MainLayout} from '@/layouts/MainLayout.tsx';
import {BareLayout} from '@/layouts/BareLayout.tsx';
import {ProvidersLayout} from '@/layouts/ProvidersLayout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/en" />,
  },
  {
    path: '/:locale',
    element: <ProvidersLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <MainLayout />,
        children: [{index: true, element: <ScrollDemo />}],
      },
      {
        element: <BareLayout />,
        children: [
          {path: 'login', element: <LoginPage />},
          {path: 'register', element: <RegisterPage />},
          {path: 'scroll-demo', element: <ScrollDemo />},
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
