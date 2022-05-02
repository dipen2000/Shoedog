const getFilteredDataByRange = (data, state) => {
  if (state.rangeValue === "0") {
    return [...data];
  } else {
    return data.filter((item) => Number(item.price) <= state.rangeValue);
  }
};

export { getFilteredDataByRange };
