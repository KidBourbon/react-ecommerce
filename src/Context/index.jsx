import { createContext, useRef, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // Shopping cart counter
  const [count, setCount] = useState(0);

  // Product Detail aside - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail - Show Product
  const [itemToShow, setItemToShow] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
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
