import { getPriceCutFromCoupon } from "./getPriceCutFromCoupon";
const getGrandTotal = (cartPriceDetail, selectedCoupon) => {
  return (
    cartPriceDetail.totalPriceBeforeDiscount -
    cartPriceDetail.totalDiscount +
    cartPriceDetail.deliveryCharge -
    getPriceCutFromCoupon(
      cartPriceDetail.totalPriceBeforeDiscount - cartPriceDetail.totalDiscount,
      selectedCoupon.percentageOff
    )
  );
};

export { getGrandTotal };
