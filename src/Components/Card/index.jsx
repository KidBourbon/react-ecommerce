import { forwardRef, useContext } from 'react';

import { GlobalContext } from '../../Context';

import defaultImg from './no-image.jpg';
import './styles.css';

const onImgLoadError = event => {
  event.target.src = defaultImg;
  event.onerror = null;
};

const Card = forwardRef(
  ({ title, description, category, price, pictureUrl }, ref) => {
    const { cartProducts, setCartProducts, openProductDetail, setItemToShow } =
      useContext(GlobalContext);

    const showItemDetails = () => {
      setItemToShow({
        title,
        description,
        category,
        price,
        pictureUrl,
      });
      openProductDetail();
    };

    const addProductToCart = () => {
      setCartProducts([
        ...cartProducts,
        {
          title,
          description,
          category,
          price,
          pictureUrl,
        },
      ]);
    };

    return (
      <div className='layer-1 w-72 h-96 bg-transparent'>
        <div className='layer-2 w-full h-full rounded-5xl bg-[#00d664] cursor-pointer transition-all duration-300'>
          <div
            className='layer-3 flex flex-col w-full h-full border-2 border-solid border-card-color bg-zinc-950 transition-all duration-200'
            ref={ref}
          >
            <figure
              className='flex-grow relative w-full h-[37%]'
              onClick={showItemDetails}
            >
              <img
                className='card-img w-full h-full p-0.5 object-cover text-white transition-all duration-200'
                src={pictureUrl}
                alt={description}
                onError={onImgLoadError}
              />

              <span className='absolute bottom-0 left-0 ml-4 mb-4 px-2 py-0.5 rounded-lg text-zinc-950 text-sm bg-white/60'>
                {category}
              </span>
            </figure>

            <p
              className='flex flex-col justify-between items-center gap-1 pt-1 pb-2 px-2 text-center'
              onClick={showItemDetails}
            >
              <span className='text-lg font-bold text-card-color'>{title}</span>
              <span className='font-bold text-white'>{price}</span>
            </p>

            <button
              className='w-full bg-zinc-950 text-card-color font-bold text-base p-3 rounded-b-[2.35rem] border-t-2 border-t-card-color border-solid hover:bg-card-color hover:text-zinc-950 hover:border-t-2 hover:border-t-transparent hover:border-solid duration-200'
              onClick={addProductToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export { Card };
