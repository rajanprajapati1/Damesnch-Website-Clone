import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();


const CartProvider = ({ children }) => {
  
    const [ShowCART,SetShowCART] = useState(false);
  
  const HandleHideShow =()=>{
    SetShowCART(!ShowCART)
}
const toggleCart = () => {
  SetShowCART(true)
};




  return (
    <CartContext.Provider value={{ShowCART, SetShowCART, HandleHideShow ,toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
