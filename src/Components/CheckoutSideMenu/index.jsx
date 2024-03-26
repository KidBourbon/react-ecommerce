import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import { formatPrice } from '../../Utils';

import { XMarkIcon } from '@heroicons/react/24/solid';

const CheckoutSideMenu = () => {
  const {
    cartProducts,
    setCartProducts,
    count,
    totalPrice,
    orders,
    setOrders,
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    checkoutSideMenuWasClickedRef,
  } = useContext(GlobalContext);

  const updateCheckoutSideMenuWasClickedRef = wasClicked => {
    checkoutSideMenuWasClickedRef.current = wasClicked;
  };

  const onClickAside = () => updateCheckoutSideMenuWasClickedRef(true);

  const handleCheckout = () => {
    const newOrder = {
      id: Date.now(),
      dateCreated: new Date(),
      products: cartProducts,
      count,
      totalPrice,
    };

    setOrders([...orders, newOrder]);
    setCartProducts([]);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'right-[0rem]' : '-right-96'
      } flex flex-col items-center gap-5 fixed top-0 w-96 h-aside px-3 py-4 mt-navbar border-solid border-8 border-black outline outline-4 outline-white -outline-offset-[6px] rounded-lg bg-zinc-900 overflow-y-scroll overscroll-contain no-scrollbar transition-all ease-in-out duration-500`}
      onClick={onClickAside}
    >
      <div className='flex justify-between items-center w-full mb-5'>
        <h2 className='font-medium text-xl text-white'>My Order</h2>

        <XMarkIcon
          className='w-9 h-9 p-1 text-white border-2 border-transparent rounded-full hover:border-white cursor-pointer transition-all duration-200'
          onClick={closeCheckoutSideMenu}
        />
      </div>

      <div className='w-full flex-1 flex flex-col items-center gap-5'>
        {cartProducts?.map(({ id, title, description, category, price, pictureUrl, amount }) => (
          <OrderCard
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            price={price}
            pictureUrl={pictureUrl}
            amount={amount}
            canAmountBeChanged={true}
            canBeRemoved={true}
          />
        ))}
      </div>

      <p className='flex justify-between items-center w-full mt-2 mb-2 text-2xl font-semibold text-white'>
        <span>Total</span>
        <span>{formatPrice(totalPrice)}</span>
      </p>

      <Link
        to='/my-orders/last'
        className='w-full mb-2'
      >
        <button
          className='w-full p-3 bg-zinc-950 text-card-color font-bold rounded-3xl border-2 border-card-color border-solid hover:bg-card-color hover:text-zinc-950 transition-all duration-200'
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
};

export { CheckoutSideMenu };
