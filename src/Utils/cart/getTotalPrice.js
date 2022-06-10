const getTotalPrice = (state) => {
  return state.reduce((acc, curr) => {
    return (acc += curr.qty * Number(curr.price));
  }, 0);
};

export { getTotalPrice };
