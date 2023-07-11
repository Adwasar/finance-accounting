import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import SecondPage from './pages/SecondPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/second-page',
        element: <SecondPage />,
      },
    ],
  },
]);

export default router;
