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
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

const getProductsUrl = 'https://api.escuelajs.co/api/v1/products';
let didFetch = false;

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  const {
    setProducts,
    closeProductDetail,
    closeCheckoutSideMenu,
    productDetailWasClickedRef,
    checkoutSideMenuWasClickedRef,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (!didFetch) {
      didFetch = true;

      fetch(getProductsUrl)
        .then(response => response.json())
        .then(data => setProducts(data));
    }
  }, []);

  useEffect(() => {
    const onClick = () => {
      const productDetailWasClicked = productDetailWasClickedRef.current;
      if (productDetailWasClicked) {
        productDetailWasClickedRef.current = false;
        return;
      }

      closeProductDetail();
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const onClick = () => {
      const checkoutSideMenuWasClicked = checkoutSideMenuWasClickedRef.current;
      if (checkoutSideMenuWasClicked) {
        checkoutSideMenuWasClickedRef.current = false;
        return;
      }

      closeCheckoutSideMenu();
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <CheckoutSideMenu />
    </BrowserRouter>
  );
};

export default App;
