import { ACTIONS } from "../Constants/actions";
const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_WISHLIST_DATA:
      return [...payload];
    default:
      return state;
  }
};

export { wishlistReducer };
