const getThePriceOffPercentage = (price, discount) => {
  return Math.trunc((Number(discount) * 100) / Number(price));
};

export { getThePriceOffPercentage };
