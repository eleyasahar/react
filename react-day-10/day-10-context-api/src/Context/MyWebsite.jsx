import { createContext, useState } from "react";

export const MyShop = createContext();

// Make a provider of our store that handles data and serves it to the components
export const MyShopContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // यहाँ नाम ठीक किया

  return (
    <MyShop.Provider value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems }}>
      {children} 
    </MyShop.Provider>
  );
};