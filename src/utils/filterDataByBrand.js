import { ACTIONS } from "../Constants/actions";

const filterDataByBrand = (data, state) => {
  return state.brand !== "all"
    ? [...data].filter((item) => item.brand === state.brand)
    : [...data];
};

export { filterDataByBrand };
