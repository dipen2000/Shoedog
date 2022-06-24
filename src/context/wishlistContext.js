import { createContext, useContext, useReducer, useEffect } from "react";
import { ACTIONS } from "../constants/actions";
import { wishlistReducer } from "../reducers/wishlistReducer";
import { getWishlistItems } from "../Services/wishlist/getWishlistItems";
import { removeItemFromWishlist } from "../Services/wishlist/removeItemFromWishlist";
import { addItemToWishlist } from "../Services/wishlist/addItemToWishlist";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const wishlistContext = createContext();

const useWishlist = () => useContext(wishlistContext);
const WishlistProvider = ({ children }) => {
  const { isAuth, token } = useAuth();
  const navigate = useNavigate();
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
    if (isAuth) {
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
            toast("Product removed from the wishlist.", {
              icon: "✅",
              style: {
                borderRadius: "0",
                boxShadow: "4px 4px var(--navbar-bg-color)",
                background: "black",
                color: "#fff",
              },
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
            toast("Product added to the wishlist.", {
              icon: "✅",
              style: {
                borderRadius: "0",
                boxShadow: "4px 4px var(--navbar-bg-color)",
                background: "black",
                color: "#fff",
              },
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      navigate("/login");
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
