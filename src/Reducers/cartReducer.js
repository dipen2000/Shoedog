import { ACTIONS } from "../Constants/actions";
const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_CART_DATA:
      return [...payload];
    default:
      return state;
  }
};

export { cartReducer };
