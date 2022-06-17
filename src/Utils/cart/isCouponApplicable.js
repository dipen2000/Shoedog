const isCouponApplicable = (priceThreshold, totalPrice) => {
  return totalPrice >= priceThreshold;
};

export { isCouponApplicable };
