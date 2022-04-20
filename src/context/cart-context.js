import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./auth-context";
import {
  addToCart,
  getCartItems,
  removeFromCart,
  updateQty,
} from "../services/cart";

import { addToWishlist } from "../services/wishlist";
import { useWishlist } from "./wishlist-context";
import { cartReducer } from "../Reducers/cartReducer";
import { ACTIONS } from "../Constants/actions";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { token, isAuth, navigate } = useAuth();

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getCartItems(token);

          if (status === 200) {
            cartDispatch({ type: ACTIONS.SET_CART_DATA, payload: data.cart });
          }
        })();
      } catch (err) {
        console.log(err);
      }
    }
  }, [isAuth]);

  const addToCartHandler = async (product) => {
    if (isAuth) {
      const { data, status } = await addToCart(product, token);

      if (status === 201) {
        cartDispatch({ type: ACTIONS.SET_CART_DATA, payload: data.cart });
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromCartHandler = async (product) => {
    const { data, status } = await removeFromCart(product._id, token);

    if (status === 200) {
      cartDispatch({ type: ACTIONS.SET_CART_DATA, payload: data.cart });
    }
  };

  const moveToWishlistHandler = async (product) => {
    removeFromCartHandler(product);

    const itemExists = wishlistState.find((item) => item._id === product._id);

    if (!itemExists) {
      const { data, status } = await addToWishlist(product, token);

      if (status === 201) {
        wishlistDispatch({
          type: ACTIONS.SET_WISHLIST_DATA,
          payload: data.wishlist,
        });
      }
    }
  };

  const updateQtyHandler = async (product, type) => {
    if (type === "decrement" && product.qty === 1) {
      removeFromCartHandler(product);
    } else {
      const { data, status } = await updateQty(product._id, token, type);

      if (status === 200) {
        cartDispatch({ type: ACTIONS.SET_CART_DATA, payload: data.cart });
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCartHandler,
        removeFromCartHandler,
        updateQtyHandler,
        moveToWishlistHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
