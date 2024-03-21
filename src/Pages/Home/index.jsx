import { useContext, useEffect } from 'react';

import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { GlobalContext } from '../../Context';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

const formatPrice = price =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

const Home = () => {
  const {
    items,
    closeProductDetail,
    closeCheckoutSideMenu,
    cardWasClickedRef,
    cardButtonWasClickedRef,
    productDetailWasClickedRef,
    checkoutSideMenuWasClickedRef,
  } = useContext(GlobalContext);

  useEffect(() => {
    const onClick = () => {
      const productDetailWasClicked = productDetailWasClickedRef.current;
      if (productDetailWasClicked) {
        productDetailWasClickedRef.current = false;
        return;
      }

      const cardWasClicked = cardWasClickedRef.current;
      if (cardWasClicked) {
        cardWasClickedRef.current = false;
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

      const cardButtonWasClicked = cardButtonWasClickedRef.current;
      if (cardButtonWasClicked) {
        cardButtonWasClickedRef.current = false;
        return;
      }

      closeCheckoutSideMenu();
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <Layout>
      <div className='grid grid-cols-cards justify-center gap-10 w-full max-w-screen-xl my-10'>
        {items?.map(item => (
          <Card
            key={item?.id}
            id={item?.id}
            title={item?.title}
            description={item?.description}
            price={formatPrice(item?.price)}
            category={item?.category?.name}
            pictureUrl={item?.images[0]}
          />
        ))}
      </div>

      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
};

export { Home };
