import { useState } from "react";
import { CartContext } from "./CartContext.jsx";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart((previousCart) => {
      const alreadyExists = previousCart.find(
        (item) => item.id === service.id
      );

      if (alreadyExists) {
        return previousCart;
      }

      return [...previousCart, service];
    });
  };

  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;