import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./authContext";
import { getCartItems } from "../Services/cart/getCartItems";
import { cartReducer } from "../reducers/cartReducer";
import { addToCartService } from "../Services/cart/addToCartService";
import { removeFromCartService } from "../Services/cart/removeFromCartService";
import { ACTIONS } from "../constants/actions";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "./wishlistContext";
import { addItemToWishlist } from "../Services/wishlist/addItemToWishlist";
import { decrementQuantityService } from "../Services/cart/decrementQuantityService";
import { incrementQuantityService } from "../Services/cart/incrementQuantityService";
import { toast } from "react-hot-toast";

const cartContext = createContext();

const useCart = () => useContext(cartContext);
const CartProvider = ({ children }) => {
  const { isAuth, token } = useAuth();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  useEffect(() => {
    try {
      (async () => {
        const { data, status } = await getCartItems(token);

        if (status === 200) {
          cartDispatch({
            type: ACTIONS.SET_CART,
            payload: { data: data.cart },
          });
        }
      })();
    } catch (e) {
      console.log(e);
    }
  }, [isAuth]);

  const addToCart = async (product) => {
    if (isAuth) {
      try {
        const { data, status } = await addToCartService(token, product);

        if (status === 201) {
          cartDispatch({
            type: ACTIONS.SET_CART,
            payload: { data: data.cart },
          });
          toast("Product added to cart.", {
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
      navigate("/login");
    }
  };

  const removeFromCart = async (productId) => {
    if (isAuth) {
      try {
        const { data, status } = await removeFromCartService(token, productId);

        if (status === 200) {
          cartDispatch({
            type: ACTIONS.SET_CART,
            payload: { data: data.cart },
          });
          toast("Product removed from the cart.", {
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
      navigate("/login");
    }
  };

  const moveToWishlist = async (product) => {
    if (isAuth) {
      const itemInWishlist = wishlistState.find(
        (item) => item._id === product._id
      );
      if (!itemInWishlist) {
        try {
          const { data, status } = await addItemToWishlist(token, product);

          if (status === 201) {
            wishlistDispatch({
              type: ACTIONS.SET_WISHLIST,
              payload: { data: data.wishlist },
            });
            toast("Product moved to wishlist.", {
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

      removeFromCart(product._id);
    } else {
      navigate("/login");
    }
  };

  const decrementProductQuantity = async (product) => {
    if (isAuth) {
      try {
        const { data, status } = await decrementQuantityService(
          token,
          product._id
        );

        if (status === 201 || status === 200) {
          cartDispatch({
            type: ACTIONS.SET_CART,
            payload: { data: data.cart },
          });
          toast("Decremented the product quantity.", {
            icon: "✅",
            style: {
              borderRadius: "0",
              boxShadow: "4px 4px var(--navbar-bg-color)",
              background: "black",
              color: "#fff",
            },
          });
        }
        const productToRemove = cartState.find((item) => item.qty <= 1);
        if (productToRemove) {
          removeFromCart(productToRemove._id);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate("/login");
    }
  };

  const incrementProductQuantity = async (product) => {
    if (isAuth) {
      try {
        const { data, status } = await incrementQuantityService(
          token,
          product._id
        );

        if (status === 201 || status === 200) {
          cartDispatch({
            type: ACTIONS.SET_CART,
            payload: { data: data.cart },
          });
          toast("Incremented the product quantity.", {
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
      navigate("/login");
    }
  };

  return (
    <cartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        removeFromCart,
        moveToWishlist,
        decrementProductQuantity,
        incrementProductQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, useCart };
