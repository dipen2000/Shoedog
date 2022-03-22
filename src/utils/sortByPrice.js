import { ACTIONS } from "../Constants/actions";

const sortDataByPrice = (state) => {
  const arr = state.products;
  switch (state.sortBy) {
    case ACTIONS.LOW_TO_HIGH:
      return arr.sort((a, b) => a.price - b.price);
    case ACTIONS.HIGH_TO_LOW:
      return arr.sort((a, b) => b.price - a.price);
    default:
      return [...arr];
  }
};

export { sortDataByPrice };
