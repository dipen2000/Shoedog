const getNumberOfItemsInTheCart = (state) => {
  return state.reduce((acc, curr) => {
    return (acc += curr.qty);
  }, 0);
};

export { getNumberOfItemsInTheCart };
