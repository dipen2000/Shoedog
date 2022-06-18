import { createContext, useReducer, useContext } from "react";
import { orderReducer } from "../reducers/orderReducer";

const orderContext = createContext();

const useOrder = () => useContext(orderContext);

const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    order: [],
    totalAmount: null,
  });
  return (
    <orderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </orderContext.Provider>
  );
};

export { OrderProvider, useOrder };
