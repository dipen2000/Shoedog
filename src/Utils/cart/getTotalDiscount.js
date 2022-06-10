const getTotalDiscount = (state) => {
  return state.reduce((acc, curr) => {
    return (acc += curr.qty * Number(curr.discount));
  }, 0);
};

export { getTotalDiscount };
