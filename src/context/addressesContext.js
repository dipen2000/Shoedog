import { createContext, useReducer, useContext } from "react";
import { addressReducer } from "../reducers/addressReducer";
import { useAuth } from "./authContext";

const addressesContext = createContext();
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  addresses: [...user.addresses],
  selectedAddressHolder: "Dipen Chavda",
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
