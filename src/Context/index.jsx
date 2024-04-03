import { createContext, useEffect, useRef, useState } from 'react';

import { getLastSegmentOfCurrentPath } from '../Utils';

const getProductsUrl = 'https://api.escuelajs.co/api/v1/products';
let didFetch = false;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // Still fetching products?
  const [fetching, setFetching] = useState(false);

  // All products in store
  const [products, setProducts] = useState([]);

  // Current product category to display
  const [searchByCategory, setSearchByCategory] = useState(getLastSegmentOfCurrentPath());

  const getProductsByCategory = category =>
    category === ''
      ? products
      : products.filter(product => {
          const productCategory = product.category.name.toLowerCase();
          const categoryToCompare = category.toLowerCase();

          return productCategory.includes(categoryToCompare);
        });

  const productsFilteredByCategory = getProductsByCategory(searchByCategory);

  // Products searched by title
  const [searchByTitle, setSearchByTitle] = useState('');

  const getProductsByTitle = title =>
    productsFilteredByCategory.filter(product => {
      const productTitle = product.title.toLowerCase();
      const titleToCompare = title.toLowerCase();

      return productTitle.includes(titleToCompare);
    });

  const filteredProducts =
    searchByTitle.trim() === '' ? productsFilteredByCategory : getProductsByTitle(searchByTitle);

  // Products in cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping cart counter
  const totalProducts = cartProducts.reduce((totalAmount, product) => {
    return totalAmount + product.amount;
  }, 0);

  // Total price of all products in the shopping cart
  const totalPrice = cartProducts.reduce((totalPrice, product) => {
    return totalPrice + product.price * product.amount;
  }, 0);

  // Shopping cart orders
  const [orders, setOrders] = useState([]);

  // Open/Close Navbar Side Menu
  const [isNavbarSideMenuOpen, setIsNavbarSideMenuOpen] = useState(false);
  const openNavbarSideMenu = () => setIsNavbarSideMenuOpen(true);
  const closeNavbarSideMenu = () => setIsNavbarSideMenuOpen(false);

  // Open/Close Product Detail menu
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Open/Close Cheackout Side Menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Item to show in the Product Detail menu
  const [itemToShow, setItemToShow] = useState({});

  // References that store if some components have been clicked on
  const navbarSideMenuWasClickedRef = useRef(false);
  const productDetailWasClickedRef = useRef(false);
  const checkoutSideMenuWasClickedRef = useRef(false);

  const increaseProductAmountInCart = id => {
    let isProductInCart = false;

    const newCartProducts = cartProducts.map(product => {
      if (product.id === id) {
        isProductInCart = true;

        return {
          ...product,
          amount: product.amount + 1,
        };
      }

      return product;
    });

    return { newCartProducts, isProductInCart };
  };

  const addProductToCart = ({ id, title, description, category, price, pictureUrl }) => {
    const { newCartProducts, isProductInCart } = increaseProductAmountInCart(id);

    if (isProductInCart) {
      setCartProducts(newCartProducts);
    } else {
      setCartProducts([
        ...cartProducts,
        {
          id,
          title,
          description,
          category,
          price,
          pictureUrl,
          amount: 1,
        },
      ]);
    }
  };

  const removeProductFromCartOnce = id => {
    const newCartProducts = [];

    for (const product of cartProducts) {
      if (product.id === id) {
        if (product.amount > 1) {
          newCartProducts.push({
            ...product,
            amount: product.amount - 1,
          });
        }
      } else newCartProducts.push(product);
    }

    setCartProducts(newCartProducts);
  };

  const removeProductFromCartEntirely = id => {
    const newCartProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(newCartProducts);
  };

  useEffect(() => {
    if (!didFetch) {
      didFetch = true;

      setFetching(true);

      fetch(getProductsUrl)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          setFetching(false);
        });
    }
  }, []);

  useEffect(() => {
    const onClick = () => {
      const navbarSideMenuWasClicked = navbarSideMenuWasClickedRef.current;
      if (navbarSideMenuWasClicked) {
        navbarSideMenuWasClickedRef.current = false;
        return;
      }

      closeNavbarSideMenu();
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const onClick = () => {
      const productDetailWasClicked = productDetailWasClickedRef.current;
      if (productDetailWasClicked) {
        productDetailWasClickedRef.current = false;
        return;
      }

      closeProductDetail();
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const onClick = () => {
      const checkoutSideMenuWasClicked = checkoutSideMenuWasClickedRef.current;
      if (checkoutSideMenuWasClicked) {
        checkoutSideMenuWasClickedRef.current = false;
        return;
      }

      closeCheckoutSideMenu();
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        fetching,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        setSearchByCategory,
        productsFilteredByCategory,
        filteredProducts,
        cartProducts,
        setCartProducts,
        totalProducts,
        totalPrice,
        orders,
        setOrders,
        isNavbarSideMenuOpen,
        openNavbarSideMenu,
        closeNavbarSideMenu,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        itemToShow,
        setItemToShow,
        navbarSideMenuWasClickedRef,
        productDetailWasClickedRef,
        checkoutSideMenuWasClickedRef,
        addProductToCart,
        removeProductFromCartOnce,
        removeProductFromCartEntirely,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
