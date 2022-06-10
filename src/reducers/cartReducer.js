import { ACTIONS } from "../constants/actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CART:
      return [...action.payload.data];
    default:
      return state;
  }
};

export { cartReducer };
