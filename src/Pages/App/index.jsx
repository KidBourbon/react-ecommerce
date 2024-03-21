import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Navbar } from '../../Components/Navbar';
import { GlobalContext } from '../../Context';
import { useContext, useEffect } from 'react';

const getProductsUrl = 'https://api.escuelajs.co/api/v1/products';
let didFetch = false;

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  const { setItems } = useContext(GlobalContext);

  useEffect(() => {
    if (!didFetch) {
      didFetch = true;

      fetch(getProductsUrl)
        .then(response => response.json())
        .then(data => setItems(data));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
