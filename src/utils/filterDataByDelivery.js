import { ACTIONS } from "../Constants/actions";

const filterDataByDelivery = (data, state) => {
  return state.hasFastDelivery
    ? [...data].filter((item) => item.hasFastDelivery === true)
    : [...data];
};

export { filterDataByDelivery };
