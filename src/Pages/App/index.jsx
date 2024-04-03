import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Navbar } from '../../Components/Navbar';
import { NavbarSideMenu } from '../../Components/NavbarSideMenu';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/shoes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furniture', element: <Home /> },
    { path: '/miscellaneous', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/:orderId', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <NavbarSideMenu />
      <CheckoutSideMenu />
    </BrowserRouter>
  );
};

export default App;
