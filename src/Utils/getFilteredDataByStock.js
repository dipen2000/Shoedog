const getFilteredDataByStock = (data, state) => {
  if (state.inStock) {
    return data.filter((item) => item.inStock !== false);
  } else {
    return [...data];
  }
};

export { getFilteredDataByStock };
