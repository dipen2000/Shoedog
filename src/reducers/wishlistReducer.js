import { ACTIONS } from "../constants/actions";

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_WISHLIST:
      return [...action.payload.data];
    default:
      return state;
  }
};

export { wishlistReducer };
