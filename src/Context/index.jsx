import { createContext, useRef, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // All products in store
  const [products, setProducts] = useState([]);

  // Products in cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping cart counter
  const count = cartProducts.reduce((totalAmount, product) => {
    return totalAmount + product.amount;
  }, 0);

  // Total price of all products in the shopping cart
  const totalPrice = cartProducts.reduce((totalPrice, product) => {
    return totalPrice + product.price * product.amount;
  }, 0);

  // Shopping cart orders
  const [orders, setOrders] = useState([]);

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

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        count,
        totalPrice,
        orders,
        setOrders,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        itemToShow,
        setItemToShow,
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
