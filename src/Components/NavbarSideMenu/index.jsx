import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { GlobalContext } from '../../Context';

import { XMarkIcon } from '@heroicons/react/24/solid';

const tabBaseStyle = 'px-1 py-2';

const tabActiveStyle = 'underline underline-offset-4';
const tabInactiveStyle =
  'after:content-[""] after:absolute after:w-0 after:h-[1px] after:left-1/2 after:bottom-0 after:bg-white after:transition-all after:ease-in-out after:duration-200 hover:after:w-full hover:after:left-0';

const categoryTabs = [
  { id: 1, title: 'All', url: '/' },
  { id: 2, title: 'Clothes', url: '/clothes' },
  { id: 3, title: 'Shoes', url: '/shoes' },
  { id: 4, title: 'Electronics', url: '/electronics' },
  { id: 5, title: 'Furniture', url: '/furniture' },
  { id: 6, title: 'Miscellaneous', url: '/miscellaneous' },
];

const otherTabs = [
  { id: 1, title: 'My Orders', url: '/my-orders' },
  { id: 2, title: 'My Account', url: '/my-account' },
  { id: 3, title: 'Sign In', url: '/sign-in' },
];

const NavbarSideMenu = () => {
  const { navbarSideMenuWasClickedRef, isNavbarSideMenuOpen, closeNavbarSideMenu } =
    useContext(GlobalContext);

  const updateNavbarSideMenuWasClickedRef = wasClicked => {
    navbarSideMenuWasClickedRef.current = wasClicked;
  };

  const onClickAside = () => updateNavbarSideMenuWasClickedRef(true);

  return (
    <aside
      className={`${
        isNavbarSideMenuOpen ? 'right-[0rem]' : '-right-80'
      } w-screen max-w-80 h-aside mt-navbar p-4 flex flex-col items-center gap-5 fixed top-0 border-solid border-8 border-black outline outline-4 outline-white -outline-offset-[6px] rounded-lg text-white bg-zinc-900 overflow-y-scroll overscroll-contain no-scrollbar transition-all ease-in-out duration-500`}
      onClick={onClickAside}
    >
      <div className='w-full flex justify-between items-center'>
        <h2 className='font-medium text-xl'>Categories</h2>

        <XMarkIcon
          className='w-9 h-9 p-1 border-2 border-transparent rounded-full hover:border-white cursor-pointer transition-all duration-200'
          onClick={closeNavbarSideMenu}
        />
      </div>

      <ul className='w-full flex flex-col justify-start items-start gap-5'>
        {categoryTabs.map(({ id, title, url }) => (
          <li
            key={id}
            className='relative'
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

      <hr className='w-full border-zinc-600' />

      <ul className='w-full flex flex-col justify-start items-start gap-5'>
        {otherTabs.map(({ id, title, url }) => (
          <li
            key={id}
            className='relative'
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
    </aside>
  );
};

export { NavbarSideMenu };
