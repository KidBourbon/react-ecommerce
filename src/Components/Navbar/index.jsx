import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { GlobalContext } from '../../Context';
import { getLastSegmentOfGivenPath } from '../../Utils';

import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';

const tabBaseStyle = 'whitespace-nowrap px-1 py-2';

const tabActiveStyle = 'underline underline-offset-4';
const tabInactiveStyle =
  'after:content-[""] after:absolute after:w-0 after:h-[1px] after:left-1/2 after:bottom-0 after:bg-white after:transition-all after:ease-in-out after:duration-200 hover:after:w-full hover:after:left-0';

const navbarLeftTabs = [
  { id: 1, title: 'All', url: '/' },
  { id: 2, title: 'Clothes', url: '/clothes' },
  { id: 3, title: 'Shoes', url: '/shoes' },
  { id: 4, title: 'Electronics', url: '/electronics' },
  { id: 5, title: 'Furniture', url: '/furniture' },
  { id: 6, title: 'Miscellaneous', url: '/miscellaneous' },
];

const navbarRightTabs = [
  { id: 1, title: 'My Orders', url: '/my-orders' },
  { id: 2, title: 'My Account', url: '/my-account' },
  { id: 3, title: 'Sign In', url: '/sign-in' },
];

const Navbar = () => {
  const {
    setSearchByCategory,
    totalProducts,
    isNavbarSideMenuOpen,
    openNavbarSideMenu,
    closeNavbarSideMenu,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    closeProductDetail,
  } = useContext(GlobalContext);

  const onClickShoppingCartIcon = event => {
    event.stopPropagation();

    if (isCheckoutSideMenuOpen) closeCheckoutSideMenu();
    else openCheckoutSideMenu();

    closeProductDetail();
    closeNavbarSideMenu();
  };

  const onClickBars3Icon = event => {
    event.stopPropagation();

    if (isNavbarSideMenuOpen) closeNavbarSideMenu();
    else openNavbarSideMenu();

    closeProductDetail();
    closeCheckoutSideMenu();
  };

  return (
    <nav className='w-full h-navbar flex justify-between items-center fixed top-0 gap-4 py-5 pl-6 pr-4 lg:pr-8 border-b-2 border-zinc-400 text-base font-normal text-white bg-zinc-900 z-10'>
      <ul className='flex items-center gap-4'>
        <li className='font-semibold text-2xl mr-4'>
          <NavLink
            to='/'
            onClick={() => setSearchByCategory('')}
          >
            Shopi
          </NavLink>
        </li>

        {navbarLeftTabs.map(({ id, title, url }) => (
          <li
            key={id}
            className='hidden lg:list-item relative'
          >
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive
                  ? tabBaseStyle + ' ' + tabActiveStyle
                  : tabBaseStyle + ' ' + tabInactiveStyle
              }
              onClick={() => {
                const category = getLastSegmentOfGivenPath(url);
                setSearchByCategory(category);
              }}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-4'>
        <li>
          <a
            className='w-10 h-10 flex justify-center items-center p-2 text-white border-2 border-solid border-white rounded-full'
            href='https://github.com/KidBourbon'
            target='_blank'
          >
            KB
          </a>
        </li>

        {navbarRightTabs.map(({ id, title, url }) => (
          <li
            key={id}
            className='hidden lg:list-item relative'
          >
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive
                  ? tabBaseStyle + ' ' + tabActiveStyle
                  : tabBaseStyle + ' ' + tabInactiveStyle
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
            <span>{totalProducts < 100 ? totalProducts : '99+'}</span>
          </div>
        </li>

        <li
          className='ml-1 list-item lg:hidden cursor-pointer prevent-select'
          onClick={onClickBars3Icon}
        >
          <Bars3Icon className='w-8 h-8' />
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
