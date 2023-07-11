import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';
import CreateTransactionPage from './pages/CreateTransactionPage';
import HistoryPage from './pages/HistoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <CreateTransactionPage />,
      },
      {
        path: '/history',
        element: <HistoryPage />,
      },
    ],
  },
]);

export default router;
