import { lazy } from 'react';

export const HomePage = lazy(() => import('./Home'));
export const CatalogPage = lazy(() => import('./Catalog'));
export const ConnectPage = lazy(() => import('./Connect'));
export const BlogPage = lazy(() => import('./Blog'));
export const DetailPage = lazy(() => import('./Detail'));
