import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ShoppingCartContext } from '../../Context';

const activeStyle = 'underline underline-offset-4';

const Navbar = () => {
  const { count } = useContext(ShoppingCartContext);

  return (
    <nav className='w-full flex justify-between items-center fixed top-0 gap-4 py-5 px-8 border-b-2 text-base font-normal bg-white z-10'>
      <ul className='flex items-center gap-4'>
        <li className='font-semibold text-lg mr-4'>
          <NavLink to='/'>Shopi</NavLink>
        </li>

        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            All
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Clothes
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Electronics
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Furnitures
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Toys
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-4'>
        <li className='text-gray-500'>kidbourbongamer@gmail.com</li>

        <li>
          <NavLink to='/my-orders'>My orders</NavLink>
        </li>

        <li>
          <NavLink to='/my-account'>My Account</NavLink>
        </li>

        <li>
          <NavLink to='/sign-in'>Sign In</NavLink>
        </li>

        <li>🛒{count}</li>
      </ul>
    </nav>
  );
};

export { Navbar };
