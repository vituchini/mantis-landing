import { Outlet } from 'react-router-dom';
import Header from './Header';

const LandingLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default LandingLayout;
