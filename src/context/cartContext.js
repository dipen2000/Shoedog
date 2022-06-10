import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./authContext";
const cartContext = createContext();

const useCart = () => useContext(cartContext);
const { isAuth, token } = useAuth();
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  useEffect(() => {
    try {
      (async () => {
        const { data, status } = await getCartItems(token);
      })();
    } catch (e) {
      console.log(e);
    }
  }, [isAuth]);
  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, useCart };
