import { createContext, useContext, useReducer, useEffect } from "react";
import { ACTIONS } from "../constants/actions";
import { initialProducts, productReducer } from "../reducers/productReducer";
import axios from "axios";
const productContext = createContext();

const useProduct = () => useContext(productContext);
const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProducts
  );

  useEffect(
    () =>
      (async () => {
        try {
          const { data } = await axios.get("/api/products");
          productDispatch({
            type: ACTIONS.DISPLAY_DATA,
            payload: { data: data.products },
          });
        } catch (e) {
          console.log(e);
        }
      })(),
    []
  );
  return (
    <productContext.Provider value={{ productState, productDispatch }}>
      {children}
    </productContext.Provider>
  );
};

export { ProductProvider, useProduct };
