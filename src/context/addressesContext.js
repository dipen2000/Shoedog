import { createContext, useReducer, useContext } from "react";
import { addressReducer } from "../reducers/addressReducer";
import { useAuth } from "./authContext";

const addressesContext = createContext();
const user = JSON.parse(localStorage.getItem("user")) || null;

const getAddressArr = (user) => {
  if (user) {
    return [...user?.addresses];
  } else {
    return [];
  }
};
const initialState = {
  addresses: getAddressArr(user),
  selectedAddressHolder: "",
};

const useAddress = () => useContext(addressesContext);

const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialState
  );
  return (
    <addressesContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </addressesContext.Provider>
  );
};

export { AddressProvider, useAddress };
