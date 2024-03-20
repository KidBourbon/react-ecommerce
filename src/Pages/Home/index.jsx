import { useContext, useEffect, useRef, useState } from 'react';

import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { GlobalContext } from '../../Context';

const getProductsUrl = 'https://api.escuelajs.co/api/v1/products';

const formatPrice = price =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

const Home = () => {
  const [items, setItems] = useState([]);

  const asideRef = useRef(null);
  const cardsRef = useRef(new Map());

  const { closeProductDetail } = useContext(GlobalContext);

  useEffect(() => {
    fetch(getProductsUrl)
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  useEffect(() => {
    const onClick = event => {
      if (asideRef.current.contains(event.target)) {
        return;
      } else {
        const map = cardsRef.current;

        for (const pair of map) {
          const card = pair[1];

          if (card.contains(event.target)) {
            return;
          }
        }
      }

      closeProductDetail();
    };

    window.addEventListener('click', onClick);

    console.log('useEffect executed');
  }, []);

  return (
    <Layout>
      <div className='grid grid-cols-cards justify-center gap-10 w-full max-w-screen-xl my-10'>
        {items?.map(item => (
          <Card
            key={item?.id}
            title={item?.title}
            description={item?.description}
            price={formatPrice(item?.price)}
            category={item?.category?.name}
            pictureUrl={item?.images[0]}
            ref={card => {
              const map = cardsRef.current;

              if (card) {
                map.set(item?.id, card);
              } else {
                map.delete(item?.id);
              }
            }}
          />
        ))}
      </div>

      <ProductDetail ref={asideRef} />
    </Layout>
  );
};

export { Home };
