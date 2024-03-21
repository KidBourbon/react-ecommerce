import { createContext, useEffect, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // All products in store
  const [items, setItems] = useState([]);

  // Products in cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping cart counter
  const count = cartProducts.length;

  // Open/Close ProductDetail menu
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Item to show in ProductDetail menu
  const [itemToShow, setItemToShow] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        count,
        items,
        setItems,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        itemToShow,
        setItemToShow,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
