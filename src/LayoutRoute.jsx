import ScrollToTop from './components/ScrollToTop';
import { Outlet } from 'react-router-dom';

const LayoutRoute = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default LayoutRoute;
