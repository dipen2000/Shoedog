import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { initialProduct, productReducer } from "../Reducers/productReducer";
import { ACTIONS } from "../Constants/actions";
const productContext = createContext();

const ProductProvider = (props) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProduct
  );
  useEffect(
    () =>
      (async () => {
        const { data } = await axios.get("/api/products");
        productDispatch({
          type: ACTIONS.DISPLAY_PRODUCTS,
          payload: { data: data.products },
        });
      })(),
    []
  );
  return (
    <productContext.Provider value={{ productState, productDispatch }}>
      {props.children}
    </productContext.Provider>
  );
};

export { ProductProvider, productContext };
