const getPriceCutFromCoupon = (totalPrice, percentageOff = 0) => {
  return (percentageOff * totalPrice) / 100;
};

export { getPriceCutFromCoupon };
