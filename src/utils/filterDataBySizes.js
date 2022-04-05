import { ACTIONS } from "../Constants/actions";

const checkForSizes = (itemSizesArr, StateSizesArr) => {
  let flag = false;
  for (let size of StateSizesArr) {
    if (itemSizesArr.includes(size)) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
};

const filterDataBySizes = (data, state) => {
  if (state.sizes.length === 0) {
    return [...data];
  } else {
    return [...data].filter((item) => checkForSizes(item.sizes, state.sizes));
  }
};

export { filterDataBySizes };
