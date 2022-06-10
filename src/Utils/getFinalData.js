import { getSortedDataPrice } from "./getSortedDataPrice";
import { getFilteredDataByGender } from "./getFilteredDataByGender";
import { getFilteredDataBySizes } from "./getFilteredDataBySizes";
import { getFilteredDataByStock } from "./getFilteredDataByStock";
import { getFilteredDataByDelivery } from "./getFilteredDataByDelivery";
import { getFilteredDataByRange } from "./getFilteredDataByRange";
import { getSearchedData } from "./getSearchedData";
import { getFilteredDataByCategory } from "./getFilteredDataByCategory";
const getFinalData = (state, searchInput, selectedCategory) => {
  const sortedDataByPrice = getSortedDataPrice(state);
  const filteredDataByGender = getFilteredDataByGender(
    sortedDataByPrice,
    state
  );

  const filteredDataBySizes = getFilteredDataBySizes(
    filteredDataByGender,
    state
  );

  const filteredDataByStock = getFilteredDataByStock(
    filteredDataBySizes,
    state
  );

  const filteredDataByDelivery = getFilteredDataByDelivery(
    filteredDataByStock,
    state
  );

  const filteredDataByRange = getFilteredDataByRange(
    filteredDataByDelivery,
    state
  );

  const searchedData = getSearchedData(filteredDataByRange, searchInput);
  const filteredDataByCategory = getFilteredDataByCategory(
    searchedData,
    selectedCategory
  );
  const finalData = filteredDataByCategory;
  return finalData;
};

export { getFinalData };
