import { sortDataByPrice } from "../utils/sortByPrice";
import { filterDataByGender } from "../utils/filterDataByGender";
import { filterDataBySizes } from "../utils/filterDataBySizes";
import { filterDataByStock } from "../utils/filterDataByStock";
import { filterDataByDelivery } from "../utils/filterDataByDelivery";
import { filterDataByPriceSlider } from "../utils/filterDataByPriceSlider";
import { filterDataByBrand } from "../utils/filterDataByBrand";

const getFinalData = (productState) => {
  const sortedData = sortDataByPrice(productState);
  const filteredByGenderData = filterDataByGender(sortedData, productState);
  const filteredBySizesData = filterDataBySizes(
    filteredByGenderData,
    productState
  );
  const filteredByStockData = filterDataByStock(
    filteredBySizesData,
    productState
  );
  const filteredByFastDeliveryData = filterDataByDelivery(
    filteredByStockData,
    productState
  );

  const filteredByPriceSliderData = filterDataByPriceSlider(
    filteredByFastDeliveryData,
    productState
  );

  const filteredByBrandData = filterDataByBrand(
    filteredByPriceSliderData,
    productState
  );
  const finalData = filteredByBrandData;

  return finalData;
};

export { getFinalData };
