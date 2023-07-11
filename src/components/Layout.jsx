import { Outlet } from 'react-router-dom';

import Header from './Header';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
