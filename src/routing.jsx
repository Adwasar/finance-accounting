import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <FirstPage />,
      },
      {
        path: '/second-page',
        element: <SecondPage />,
      },
    ],
  },
]);

export default router;
