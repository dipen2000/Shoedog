import "./cartPrice.css";
import { useCart } from "../../context/cart-context";
import { useState } from "react";
import {
  getPrice,
  getDiscountInPrice,
  getTotalPrice,
  getTotalSaving,
} from "../../utils/cartPriceCalc";
const CartPrice = () => {
  const [placeOrder, setPlaceOrder] = useState(false);
  const { cartState } = useCart();

  const cartPriceDetails = {
    deliveryCharges: 50,
    price: getPrice(cartState),
    discountInPrice: getDiscountInPrice(cartState),
  };
  const totalPrice = getTotalPrice(cartPriceDetails);
  const totalSaving = getTotalSaving(cartPriceDetails.price, totalPrice);
  return (
    <>
      <div className="cart-price-container">
        <div className="flex-row align-center-flex justify-center-flex">
          <h2>Price details</h2>
        </div>
        <div className="flex-col gap-1 mb-1">
          <div className="flex-row align-center-flex justify-space-between-flex">
            <div>Price(1) :</div>
            <div>&#8377;{cartPriceDetails.price}</div>
          </div>
          <div className="flex-row align-center-flex justify-space-between-flex">
            <div>Discount :</div>
            <div>-&#8377;{cartPriceDetails.discountInPrice}</div>
          </div>
          <div className="flex-row align-center-flex justify-space-between-flex">
            <div>Delivery charge :</div>
            <div> &#8377;50</div>
          </div>
          <div className="flex-row align-center-flex justify-space-between-flex">
            <div>Total amount :</div>
            <div> &#8377;{totalPrice}</div>
          </div>
          <div>You will save &#8377;{totalSaving} on this order</div>
        </div>
        <div className="flex-row align-center-flex justify-center-flex">
          <button
            className="curs-point btn btn-primary-solid shoetube-btn-main"
            onClick={() => setPlaceOrder((prevState) => !prevState)}
          >
            Place order
          </button>
        </div>

        {placeOrder && <div>Believe that the order is placed.</div>}
      </div>
    </>
  );
};

export { CartPrice };
