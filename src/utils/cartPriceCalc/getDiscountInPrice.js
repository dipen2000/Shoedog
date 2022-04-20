const getDiscountInPrice = (cartData) => {
  return cartData.reduce((discount, currentItem) => {
    return (discount += Number(currentItem.discount) * Number(currentItem.qty));
  }, 0);
};

export { getDiscountInPrice };
