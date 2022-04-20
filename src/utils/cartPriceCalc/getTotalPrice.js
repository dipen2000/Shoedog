const getTotalPrice = ({ deliveryCharges, price, discountInPrice }) => {
  return Number(price) - Number(discountInPrice) + deliveryCharges;
};

export { getTotalPrice };
