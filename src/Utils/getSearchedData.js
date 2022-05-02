const getSearchedData = (data, searchInput) => {
  if (!searchInput) {
    return [...data];
  } else {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
};

export { getSearchedData };
