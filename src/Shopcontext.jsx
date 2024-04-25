import allProducts from "./products";
import { createContext } from "react";
import { useState } from "react";
export const ShopContext = createContext(null);

const getDefultCart = () => {
  let cart = {};

  for (let i = 1; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const saveInCart = localStorage.getItem("cart");
    return saveInCart ? JSON.parse(saveInCart) : getDefultCart();
  });

  localStorage.setItem("cart", JSON.stringify(cartItems));

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextCreate = {
    cartItems,
    addToCart,
    removeToCart,
    getDefultCart,
    getTotalAmount,
    allProducts,
  };

  return (
    <>
      <ShopContext.Provider value={contextCreate}>
        {props.children}
      </ShopContext.Provider>
    </>
  );
};

export default ShopContext;
