import { useContext, useEffect, useRef } from 'react';

import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { GlobalContext } from '../../Context';

const formatPrice = price =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

let eventAdded = false;

const Home = () => {
  const asideRef = useRef(null);
  const cardsRef = useRef(new Map());

  const { items, closeProductDetail } = useContext(GlobalContext);

  useEffect(() => {
    if (!eventAdded) {
      eventAdded = true;

      const onClick = event => {
        if (asideRef?.current?.contains(event.target)) {
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
    }
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
