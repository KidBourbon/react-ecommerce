import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { GlobalContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const activeStyle = 'underline underline-offset-4';

const Navbar = () => {
  const { count } = useContext(GlobalContext);

  return (
    <nav className='w-full h-17.5 flex justify-between items-center fixed top-0 gap-4 py-5 pl-8 pr-10 border-b-2 border-zinc-400 text-base font-normal text-white bg-zinc-900 z-10'>
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

        <li className='relative'>
          <ShoppingCartIcon className='w-6 h-6 ' />

          <div className='absolute -top-[0.625rem] left-3 px-[0.375rem] text-sm text-white rounded-full bg-card-color'>
            <span>{count < 100 ? count : '99+'}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
