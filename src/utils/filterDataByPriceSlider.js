import { ACTIONS } from "../Constants/actions";

const filterDataByPriceSlider = (data, state) => {
  if (state.range !== "0") {
    return [...data].filter((item) => +item.price <= +state.range);
  } else {
    return [...data];
  }
};

export { filterDataByPriceSlider };
