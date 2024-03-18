import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';

const Card = ({ title, description, category, price, pictureUrl }) => {
  const { count, setCount } = useContext(ShoppingCartContext);

  return (
    // <div className='w-64 h-72 bg-white cursor-pointer rounded-lg'>
    //   <figure className='relative w-full h-4/5 mb-2'>
    //     <img
    //       className='w-full h-full object-cover rounded-lg bg-gray-600'
    //       src={pictureUrl}
    //       alt={description}
    //     />

    //     <span className='absolute bottom-0 left-0 m-2 px-2 py-0.5 rounded-lg text-black text-xs bg-white/60'>
    //       {category}
    //     </span>

    //     <button
    //       title='Add to cart'
    //       className='absolute top-0 right-0 m-2 rounded-full group cursor-pointer outline-none hover:rotate-90 duration-300'
    //       onClick={() => setCount(count + 1)}
    //     >
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         width='32px'
    //         height='32px'
    //         viewBox='0 0 24 24'
    //         className='rounded-full stroke-white fill-none group-hover:fill-slate-800  group-active:fill-slate-600 group-active:w-7 group-active:h-7 duration-300'
    //       >
    //         <path
    //           d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
    //           strokeWidth='1.5'
    //         ></path>
    //         <path
    //           d='M8 12H16'
    //           strokeWidth='1.5'
    //         ></path>
    //         <path
    //           d='M12 16V8'
    //           strokeWidth='1.5'
    //         ></path>
    //       </svg>
    //     </button>
    //   </figure>

    //   <p className='flex justify-between items-center gap-4'>
    //     <span className='text-sm font-light'>{title}</span>
    //     <span className='text-lg font-medium'>{price}</span>
    //   </p>
    // </div>

    <div className='flex flex-col w-72 h-96 rounded-5xl border-2 border-solid border-card-color bg-zinc-950'>
      <figure className='flex-grow relative w-full h-[37%]'>
        <img
          className='bg-zinc-950 w-full h-full p-0.5 rounded-t-5xl object-cover'
          src={pictureUrl}
          alt={description}
        />

        <span className='absolute bottom-0 left-0 ml-4 mb-4 px-2 py-0.5 rounded-lg text-zinc-950 text-sm bg-white/60'>
          {category}
        </span>
      </figure>

      <p className='flex flex-col justify-between items-center gap-1 pt-1 pb-2 px-2'>
        <span className='text-center text-lg font-bold text-card-color'>
          {title}
        </span>

        <span className='text-center font-bold text-white'>{price}</span>
      </p>

      <button
        className='w-full bg-zinc-950 text-card-color font-bold text-base p-3 rounded-b-5xl border-t-2 border-t-card-color border-solid hover:bg-card-color hover:text-zinc-950 hover:border-t-2 hover:border-t-transparent hover:border-solid duration-200'
        onClick={() => setCount(count + 1)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export { Card };
