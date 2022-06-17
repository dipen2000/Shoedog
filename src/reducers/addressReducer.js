import { ACTIONS } from "../constants/actions";
import { v4 as uuid } from "uuid";

const addressReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_ADDRESS:
      return { ...state, selectedAddressHolder: action.payload.data };
    case ACTIONS.REMOVE_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses].filter(
          (address) => address.name !== action.payload.data
        ),
        selectedAddressHolder: "",
      };
    case ACTIONS.ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses].concat({
          _id: uuid(),
          ...action.payload.data,
        }),
      };
    default:
      return state;
  }
};

export { addressReducer };
