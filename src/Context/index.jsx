import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
