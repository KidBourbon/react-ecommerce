import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCard';
import { GlobalContext } from '../../Context';

function MyOrders() {
  const { orders } = useContext(GlobalContext);

  return (
    <Layout>
      <main className='w-full max-w-screen-sm'>
        <h1 className='mb-6 text-xl font-medium text-center text-white'>My Orders</h1>

        <section className='w-full flex flex-col items-center gap-4 sm:gap-6'>
          {orders.length > 0 ? (
            orders.map(({ id, dateCreated, products, totalProducts, totalPrice }) => (
              <Link
                className='w-full min-h-20'
                to={`/my-orders/${id}`}
                key={id}
              >
                <OrdersCard
                  dateCreated={dateCreated}
                  products={products}
                  totalProducts={totalProducts}
                  totalPrice={totalPrice}
                />
              </Link>
            ))
          ) : (
            <div className='w-full p-2 border border-solid border-white rounded-lg'>
              <p className='text-lg text-center text-white'>No orders yet!</p>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}

export { MyOrders };
