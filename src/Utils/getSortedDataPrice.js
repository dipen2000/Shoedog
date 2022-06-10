import { ACTIONS } from "../constants/actions";
const getSortedDataPrice = (state) => {
  switch (state.sortBy) {
    case ACTIONS.SORT_BY_HIGH_TO_LOW:
      return state.input.sort((a, b) => b.price - a.price);
    case ACTIONS.SORT_BY_LOW_TO_HIGH:
      return state.input.sort((a, b) => a.price - b.price);
    default:
      return [...state.input];
  }
};
export { getSortedDataPrice };
