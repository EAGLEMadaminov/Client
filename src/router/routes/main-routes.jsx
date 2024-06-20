import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import { BlogPage, CatalogPage, HomePage } from './../../pages/index';

const MainRoutes = {
  path: 'main',
  element: (
    <MainLayout>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  ),
  children: [
    {
      path: '',
      element: <HomePage />,
    },
    {
      path: 'blog',
      element: <BlogPage />,
    },
    {
      path: 'catalog',
      element: <CatalogPage />,
    },
  ],
};
export default MainRoutes;
