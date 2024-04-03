import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../../Components/Layout';
import { OrderCard } from '../../Components/OrderCard';
import { GlobalContext } from '../../Context';
import { getLastSegmentOfCurrentPath } from '../../Utils';

import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {
  const { orders } = useContext(GlobalContext);

  const orderId = getLastSegmentOfCurrentPath();
  let lastOrder = {};

  if (orderId === 'last') lastOrder = orders[orders.length - 1];
  else lastOrder = orders.find(order => order.id === orderId);

  const { id, products } = lastOrder;

  return (
    <Layout>
      <main className='w-full max-w-screen-sm'>
        <div className='w-full flex justify-between mb-6'>
          <Link to='/my-orders'>
            <ChevronLeftIcon className='w-8 h-8 p-[0.125rem] text-white border-2 border-transparent rounded-full hover:border-white cursor-pointer transition-all duration-200' />
          </Link>

          <h1 className='text-xl font-medium text-white'>Order ID {id || 'XXXXXXXXXXXXX'}</h1>
        </div>

        <section className='w-full flex-1 flex flex-col items-center gap-5'>
          {products?.map(({ id, title, description, category, price, pictureUrl, amount }) => {
            return (
              <OrderCard
                key={id}
                id={id}
                title={title}
                description={description}
                category={category}
                price={price}
                pictureUrl={pictureUrl}
                amount={amount}
              />
            );
          })}
        </section>
      </main>
    </Layout>
  );
}

export { MyOrder };
