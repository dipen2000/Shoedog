import { createContext, useContext, useReducer, useEffect } from "react";
import { ACTIONS } from "../constants/actions";
import { wishlistReducer } from "../reducers/wishlistReducer";
import { getWishlistItems } from "../Services/wishlist/getWishlistItems";
import { removeItemFromWishlist } from "../Services/wishlist/removeItemFromWishlist";
import { addItemToWishlist } from "../Services/wishlist/addItemToWishlist";
import { useAuth } from "./authContext";

const wishlistContext = createContext();

const useWishlist = () => useContext(wishlistContext);
const WishlistProvider = ({ children }) => {
  const { isAuth, token } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);
  useEffect(() => {
    if (isAuth) {
      try {
        (async () => {
          const { data, status } = await getWishlistItems(token);

          if (status === 200) {
            wishlistDispatch({
              type: ACTIONS.SET_WISHLIST,
              payload: { data: data.wishlist },
            });
          }
        })();
      } catch (e) {
        console.log(e);
      }
    }
  }, [isAuth]);

  const toggleWishlist = async (product) => {
    if (wishlistState.find((item) => item._id === product._id)) {
      try {
        const { data, status } = await removeItemFromWishlist(
          token,
          product._id
        );

        if (status === 200) {
          wishlistDispatch({
            type: ACTIONS.SET_WISHLIST,
            payload: { data: data.wishlist },
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const { data, status } = await addItemToWishlist(token, product);

        if (status === 201) {
          wishlistDispatch({
            type: ACTIONS.SET_WISHLIST,
            payload: { data: data.wishlist },
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <wishlistContext.Provider
      value={{ wishlistState, wishlistDispatch, toggleWishlist }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
