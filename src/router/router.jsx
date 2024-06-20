import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainRoutes } from './routes/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="main" />,
  },
  MainRoutes,
  {
    path: '/404',
    element: <>Page not found</>,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
]);

export default router;
