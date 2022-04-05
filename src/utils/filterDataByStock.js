import { ACTIONS } from "../Constants/actions";

const filterDataByStock = (data, state) => {
  return state.inStock
    ? [...data].filter((item) => item.inStock === true)
    : [...data];
};

export { filterDataByStock };
