import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./auth-context";
import {
  getWishlistItem,
  addToWishlist,
  removeFromWishlist,
} from "../services/wishlist";

import { wishlistReducer } from "../Reducers/wishlistReducer";
import { ACTIONS } from "../Constants/actions";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = (props) => {
  const { token, isAuth, navigate } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);

  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getWishlistItem(token);

          if (status === 200) {
            wishlistDispatch({
              type: ACTIONS.SET_WISHLIST_DATA,
              payload: data.wishlist,
            });
          }
        })();
      } catch (err) {
        console.error(err);
      }
    }
  }, [isAuth]);

  const toggleWishlist = async (product) => {
    if (isAuth) {
      const itemExists = wishlistState.find((item) => item._id === product._id);
      if (itemExists) {
        const { data, status } = await removeFromWishlist(product._id, token);
        if (status === 200) {
          wishlistDispatch({
            type: ACTIONS.SET_WISHLIST_DATA,
            payload: data.wishlist,
          });
        }
      } else {
        const { data, status } = await addToWishlist(product, token);
        if (status === 201) {
          wishlistDispatch({
            type: ACTIONS.SET_WISHLIST_DATA,
            payload: data.wishlist,
          });
        }
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistState, wishlistDispatch, toggleWishlist }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
