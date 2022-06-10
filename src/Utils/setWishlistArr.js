const setWishlistArr = (state, product) => {
  if (state.find((item) => item._id === product._id)) {
    return state.filter((item) => item._id !== product._id);
  } else {
    return state.concat(product);
  }
};

export { setWishlistArr };
