import { ButtonPrimary } from "../Buttons";
import "./CartPrice.css";
import { useCart } from "../../context/cartContext";
import { useState } from "react";
import {
  getNumberOfItemsInTheCart,
  getTotalPrice,
  getTotalDiscount,
} from "../../Utils/cart";
const CartPrice = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const { cartState } = useCart();
  const cartPriceDetail = {
    totalPriceBeforeDiscount: getTotalPrice(cartState),
    totalDiscount: getTotalDiscount(cartState),
    deliveryCharge: 50,
  };
  return (
    <div className="flex-col gap-1">
      <div className="flex-row align-center-flex justify-center-flex">
        <h2>Price details</h2>
      </div>

      <div className="flex-col gap-1">
        <div className="flex-row align-center-flex justify-space-between-flex">
          <span>Price ({getNumberOfItemsInTheCart(cartState)}) :</span>
          <span>Rs {cartPriceDetail.totalPriceBeforeDiscount}</span>
        </div>
        <div className="flex-row align-center-flex justify-space-between-flex">
          <span>Discount :</span>
          <span>- Rs {cartPriceDetail.totalDiscount}</span>
        </div>
        <div className="flex-row align-center-flex justify-space-between-flex">
          <span>Delivery charges :</span>
          <span>Rs {cartPriceDetail.deliveryCharge}</span>
        </div>
        <div className="flex-row align-center-flex justify-space-between-flex">
          <span>Total amount :</span>
          <span>
            Rs{" "}
            {cartPriceDetail.totalPriceBeforeDiscount -
              cartPriceDetail.totalDiscount +
              cartPriceDetail.deliveryCharge}
          </span>
        </div>
        <p>
          You will save Rs.{" "}
          {cartPriceDetail.totalDiscount - cartPriceDetail.deliveryCharge} on
          this order.
        </p>
      </div>
      <div className="flex-row align-center-flex justify-center-flex">
        <ButtonPrimary
          onClick={() => setIsOrderPlaced((prevState) => !prevState)}
        >
          Place order
        </ButtonPrimary>
      </div>
      {isOrderPlaced && <p>Imagine that the order is placed.</p>}
    </div>
  );
};

export { CartPrice };
