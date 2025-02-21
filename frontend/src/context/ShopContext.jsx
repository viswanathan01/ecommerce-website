import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';


export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 20;
  const [search, setSearch] = useState('');
  const [cartItems, setCartItems] = useState({});


  const addToCart = (itemId, size, quantity = 1) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    setCartItems((prevCartItems) => {
      return {
        ...prevCartItems,
        [itemId]: {
          ...prevCartItems[itemId],
          [size]: (prevCartItems[itemId]?.[size] || 0) + quantity,
        },
      };
    });
  };
  const removeFromCart = (itemId, size) => {
    if (!size || !cartItems[itemId]?.[size]) return;
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };
      delete updatedCart[itemId][size];
      if (Object.keys(updatedCart[itemId] || {}).length === 0) {
        delete updatedCart[itemId];
      }
  
      return updatedCart;
    });
  };
  

  const getCartCount = () => {
    let uniqueProductCount = 0;
    for (const productId in cartItems) {
      if (Object.keys(cartItems[productId]).length > 0) {
        uniqueProductCount++;
      }
    }
    return uniqueProductCount;
  };
  

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    cartItems,
    addToCart,
    removeFromCart,
    getCartCount,

  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
