const getFilteredDataByDelivery = (data, state) => {
  if (state.hasFastDelivery) {
    return data.filter((item) => item.hasFastDelivery !== false);
  } else {
    return [...data];
  }
};

export { getFilteredDataByDelivery };
