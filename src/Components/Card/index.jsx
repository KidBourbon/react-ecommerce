import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';

const Card = ({ title, description, category, price, pictureUrl }) => {
  const { count, setCount } = useContext(ShoppingCartContext);

  return (
    <div className='w-64 h-72 bg-white cursor-pointer rounded-lg'>
      <figure className='relative w-full h-4/5 mb-2'>
        <img
          className='w-full h-full object-cover rounded-lg bg-gray-600'
          src={pictureUrl}
          alt={description}
        />

        <span className='absolute bottom-0 left-0 m-2 px-2 py-0.5 rounded-lg text-black text-xs bg-white/60'>
          {category}
        </span>

        <button
          className='flex justify-center items-center absolute top-0 right-0 w-6 h-6 m-2 p-1 rounded-full bg-white'
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </figure>

      <p className='flex justify-between items-center gap-4'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-medium'>{price}</span>
      </p>
    </div>
  );
};

export { Card };
