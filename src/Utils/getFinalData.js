import { getSortedDataPrice } from "./getSortedDataPrice";
import { getFilteredDataByGender } from "./getFilteredDataByGender";
import { getFilteredDataBySizes } from "./getFilteredDataBySizes";
const getFinalData = (state) => {
  const sortedDataByPrice = getSortedDataPrice(state);
  const filteredDataByGender = getFilteredDataByGender(
    sortedDataByPrice,
    state
  );
  // console.log(filteredDataByGender);
  const filteredDataBySizes = getFilteredDataBySizes(
    filteredDataByGender,
    state
  );
  // const finalData = filteredDataBySizes;
  return filteredDataBySizes;
};

export { getFinalData };
