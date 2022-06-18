import { getPriceCutFromCoupon } from "./getPriceCutFromCoupon";
const getPayableAmount = (selectedCoupon, cartPriceDetail) => {
  if (selectedCoupon) {
    return (
      cartPriceDetail.totalPriceBeforeDiscount -
      cartPriceDetail.totalDiscount -
      getPriceCutFromCoupon(
        cartPriceDetail.totalPriceBeforeDiscount -
          cartPriceDetail.totalDiscount,
        selectedCoupon?.percentageOff
      ) +
      cartPriceDetail.deliveryCharge
    );
  } else {
    return (
      cartPriceDetail.totalPriceBeforeDiscount -
      cartPriceDetail.totalDiscount +
      cartPriceDetail.deliveryCharge
    );
  }
};

export { getPayableAmount };
