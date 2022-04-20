const shortenProductName = (name) => {
  if (name.length > 21) {
    return name.slice(0, 21) + "...";
  } else {
    return name;
  }
};

const calculatePriceOff = (price, discount) => {
  return Math.trunc((discount * 100) / price);
};

export { shortenProductName, calculatePriceOff };
