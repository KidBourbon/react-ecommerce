import { createContext, useEffect, useRef, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // All products in store
  const [items, setItems] = useState([]);

  // Products in cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping cart counter
  const count = cartProducts.length;

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

  const cardWasClickedRef = useRef(false);
  const cardButtonWasClickedRef = useRef(false);
  const productDetailWasClickedRef = useRef(false);
  const checkoutSideMenuWasClickedRef = useRef(false);

  return (
    <GlobalContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        count,
        items,
        setItems,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        itemToShow,
        setItemToShow,
        cardWasClickedRef,
        cardButtonWasClickedRef,
        productDetailWasClickedRef,
        checkoutSideMenuWasClickedRef,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
