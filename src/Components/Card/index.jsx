import { useContext } from 'react';

import { GlobalContext } from '../../Context';

import defaultImg from './no-image.jpg';
import './styles.css';

const onImgLoadError = event => {
  event.target.src = defaultImg;
  event.onerror = null;
};

const Card = ({ title, description, category, price, pictureUrl }) => {
  const { count, setCount, openProductDetail } = useContext(GlobalContext);

  return (
    <div className='card-1 w-72 h-96 bg-transparent'>
      <div
        className='card-2 w-full h-full rounded-5xl bg-[#00d664] cursor-pointer transition-all duration-300'
        onClick={openProductDetail}
      >
        <div className='card-3 flex flex-col w-full h-full border-2 border-solid border-card-color bg-zinc-950 transition-all duration-200'>
          <figure className='flex-grow relative w-full h-[37%]'>
            <img
              className='card__img w-full h-full p-0.5 object-cover text-white transition-all duration-200'
              src={pictureUrl}
              alt={description}
              onError={onImgLoadError}
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
            className='w-full bg-zinc-950 text-card-color font-bold text-base p-3 rounded-b-[2.35rem] border-t-2 border-t-card-color border-solid hover:bg-card-color hover:text-zinc-950 hover:border-t-2 hover:border-t-transparent hover:border-solid duration-200'
            onClick={() => setCount(count + 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { Card };

// <div
//   className='card-1 w-72 h-96 rounded-5xl bg-[#00d664] hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)] cursor-pointer transition-all duration-300'
//   onClick={openProductDetail}
// >
//   <div className='card-2 flex flex-col w-full h-full border-2 border-solid border-card-color hover:border-transparent bg-zinc-950 transition-all duration-200 hover:scale-[0.98]'>
//     <figure className='flex-grow relative w-full h-[37%]'>
//       <img
//         className='card__img w-full h-full p-0.5 object-cover text-white transition-all duration-200'
//         src={pictureUrl}
//         alt={description}
//         onError={onImgLoadError}
//       />

//       <span className='absolute bottom-0 left-0 ml-4 mb-4 px-2 py-0.5 rounded-lg text-zinc-950 text-sm bg-white/60'>
//         {category}
//       </span>
//     </figure>

//     <p className='flex flex-col justify-between items-center gap-1 pt-1 pb-2 px-2'>
//       <span className='text-center text-lg font-bold text-card-color'>
//         {title}
//       </span>

//       <span className='text-center font-bold text-white'>{price}</span>
//     </p>

//     <button
//       className='w-full bg-zinc-950 text-card-color font-bold text-base p-3 rounded-b-[2.35rem] border-t-2 border-t-card-color border-solid hover:bg-card-color hover:text-zinc-950 hover:border-t-2 hover:border-t-transparent hover:border-solid duration-200'
//       onClick={() => setCount(count + 1)}
//     >
//       Add to Cart
//     </button>
//   </div>
// </div>
