import { formatPrice } from '../../Utils';

import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = ({ dateCreated, products, totalProducts, totalPrice }) => {
  return (
    <div className='w-full h-full min-h-20 p-3 flex justify-between items-center gap-3 border-2 border-solid border-white rounded-lg cursor-pointer'>
      <div className='w-full flex justify-between items-center gap-1 text-sm sm:text-base text-white'>
        <p className='w-full flex flex-col justify-start items-start sm:flex-row sm:justify-between sm:items-center gap-1'>
          <span>{dateCreated?.toLocaleString() || '--/--/----, 00:00:00'}</span>

          <span className='mx-0 sm:mx-auto'>
            {totalProducts || 0} {`product${totalProducts === 1 ? '' : 's'}`}
          </span>
        </p>

        <span className='text-lg font-medium'>{formatPrice(totalPrice)}</span>
      </div>

      <ChevronRightIcon className='w-6 min-w-6 h-6 text-white' />
    </div>
  );
};

export { OrdersCard };
