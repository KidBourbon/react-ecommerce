import { useEffect, useState } from 'react';

import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';

const getProductsUrl = 'https://api.escuelajs.co/api/v1/products';

const formatPrice = price =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(getProductsUrl)
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className='grid grid-cols-cards justify-center gap-8 w-full max-w-screen-xl'>
        {items?.map(item => (
          <Card
            key={item?.id}
            title={item?.title}
            description={item?.description}
            price={formatPrice(item?.price)}
            category={item?.category?.name}
            pictureUrl={item?.images[0]}
          />
        ))}
      </div>
    </Layout>
  );
};

export { Home };
