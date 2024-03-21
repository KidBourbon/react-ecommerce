import { useContext } from 'react';

import { GlobalContext } from '../../Context';

import { XMarkIcon } from '@heroicons/react/24/solid';

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    checkoutSideMenuWasClickedRef,
  } = useContext(GlobalContext);

  const updateCheckoutSideMenuWasClickedRef = wasClicked => {
    checkoutSideMenuWasClickedRef.current = wasClicked;
  };

  const onClickAside = () => updateCheckoutSideMenuWasClickedRef(true);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'right-[0.1rem]' : '-right-96'
      } flex flex-col items-center gap-4 fixed w-96 h-aside p-4 border-solid border-8 border-black outline outline-4 outline-white -outline-offset-[6px] rounded-lg bg-zinc-900 overflow-y-scroll overscroll-contain no-scrollbar transition-all ease-in-out duration-500`}
      onClick={onClickAside}
    >
      <div className='flex justify-between items-center w-full'>
        <h2 className='font-medium text-xl text-white'>My Order</h2>

        <XMarkIcon
          className='w-9 h-9 p-1 text-white border-2 border-transparent rounded-full hover:border-white cursor-pointer transition-all duration-200'
          onClick={closeCheckoutSideMenu}
        />
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
