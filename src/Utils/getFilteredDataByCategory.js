const getFilteredDataByCategory = (data, searchInput) => {
  if (searchInput === "All") {
    return [...data];
  } else {
    return data.filter((item) => item.brand === searchInput);
  }
};

export { getFilteredDataByCategory };
