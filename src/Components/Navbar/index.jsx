import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { GlobalContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const baseStyle = 'whitespace-nowrap px-1 py-2';

const activeStyle = 'underline underline-offset-4';
const inactiveStyle =
  'after:content-[""] after:absolute after:w-0 after:h-[1px] after:left-1/2 after:bottom-0 after:bg-white after:transition-all after:ease-in-out after:duration-200 hover:after:w-full hover:after:left-0';

const navbarLeftTabs = [
  { id: 1, title: 'All', url: '/' },
  { id: 2, title: 'Clothes', url: '/clothes' },
  { id: 3, title: 'Electronics', url: '/electronics' },
  { id: 4, title: 'Furnitures', url: '/furnitures' },
  { id: 5, title: 'Toys', url: '/toys' },
  { id: 6, title: 'Others', url: '/others' },
];

const navbarRightTabs = [
  { id: 1, title: 'My Orders', url: '/my-orders' },
  { id: 2, title: 'My Account', url: '/my-account' },
  { id: 3, title: 'Sign In', url: '/sign-in' },
];

const Navbar = () => {
  const { count, openCheckoutSideMenu } = useContext(GlobalContext);

  const onClickShoppingCartIcon = event => {
    event.stopPropagation();
    openCheckoutSideMenu();
  };

  return (
    <nav className='w-full h-navbar flex justify-between items-center fixed top-0 gap-4 py-5 pl-8 pr-10 border-b-2 border-zinc-400 text-base font-normal text-white bg-zinc-900 z-10'>
      <ul className='flex items-center gap-4'>
        <li className='font-semibold text-2xl mr-4'>
          <NavLink to='/'>Shopi</NavLink>
        </li>

        {navbarLeftTabs.map(({ id, title, url }) => (
          <li
            key={id}
            className='relative'
          >
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive ? baseStyle + ' ' + activeStyle : baseStyle + ' ' + inactiveStyle
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-4'>
        <li className='text-gray-500'>kidbourbongamer@gmail.com</li>

        {navbarRightTabs.map(({ id, title, url }) => (
          <li
            key={id}
            className='relative'
          >
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive ? baseStyle + ' ' + activeStyle : baseStyle + ' ' + inactiveStyle
              }
            >
              {title}
            </NavLink>
          </li>
        ))}

        <li
          className='relative cursor-pointer'
          onClick={onClickShoppingCartIcon}
        >
          <ShoppingCartIcon className='w-6 h-6' />

          <div className='flex justify-center items-center absolute -top-[0.625rem] left-3 px-[0.375rem] text-sm text-white rounded-full bg-card-color'>
            <span>{count < 100 ? count : '99+'}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
