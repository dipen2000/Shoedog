import { ACTIONS } from "../constants/actions";

const orderReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_ORDER:
      return {
        ...state,
        order: [...action.payload.order],
        totalAmount: action.payload.totalAmount,
      };
    default:
      return state;
  }
};

export { orderReducer };
