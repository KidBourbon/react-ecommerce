import { useContext } from 'react';

import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { GlobalContext } from '../../Context';

const Home = () => {
  const { products } = useContext(GlobalContext);

  return (
    <Layout>
      <div className='grid grid-cols-cards justify-center gap-10 w-full max-w-screen-xl my-10'>
        {products?.map(({ id, title, description, price, category, images }) => (
          <Card
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            category={category?.name}
            pictureUrl={images[0]}
          />
        ))}
      </div>

      <ProductDetail />
    </Layout>
  );
};

export { Home };
