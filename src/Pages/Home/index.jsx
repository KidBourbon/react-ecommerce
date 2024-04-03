import { useContext } from 'react';

import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { GlobalContext } from '../../Context';

const Home = () => {
  const { fetching, productsFilteredByCategory, filteredProducts, setSearchByTitle } =
    useContext(GlobalContext);

  const onChangeInputValue = event => setSearchByTitle(event.target.value);

  const loadProductsMessage =
    productsFilteredByCategory.length > 0 ? (
      <p className='text-xl text-white'>No products match your search!</p>
    ) : (
      <p className='text-xl text-white'>No products in this category!</p>
    );

  const message = fetching ? (
    <p className='text-xl text-white'>Loading products...</p>
  ) : (
    loadProductsMessage
  );

  return (
    <Layout>
      <main className='w-full max-w-screen-xl flex flex-col items-center'>
        <h1 className='w-full max-w-screen-lg mb-5 text-xl sm:text-2xl lg:text-3xl font-medium text-white'>
          I hope you find what you are looking for
        </h1>

        <input
          className='w-full max-w-screen-lg mb-10 px-4 py-3 rounded-full text-lg text-center text-white outline outline-2 outline-zinc-600 focus:outline-white bg-zinc-950 transition-all duration-200 ease-in'
          type='text'
          placeholder='Search for product'
          onChange={onChangeInputValue}
        />

        {filteredProducts?.length > 0 ? (
          <section className='w-full grid grid-cols-cards justify-center gap-10'>
            {filteredProducts?.map(({ id, title, description, price, category, images }) => (
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
          </section>
        ) : (
          message
        )}
      </main>

      <ProductDetail />
    </Layout>
  );
};

export { Home };
