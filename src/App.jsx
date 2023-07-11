import { RouterProvider } from 'react-router-dom';

import router from './routing';
import './index.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
