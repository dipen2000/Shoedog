import { createContext, useReducer, useContext } from "react";
import { addressReducer } from "../reducers/addressReducer";
import { useAuth } from "./authContext";

const addressesContext = createContext();

const useAddress = () => useContext(addressesContext);

const AddressProvider = ({ children }) => {
  const { user } = useAuth();
  const [addressState, addressDispatch] = useReducer(addressReducer, {
    addresses: user?.addresses || [],
    selectedAddressHolder: "",
  });
  return (
    <addressesContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </addressesContext.Provider>
  );
};

export { AddressProvider, useAddress };
