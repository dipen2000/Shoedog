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
      <h2>Price details</h2>
      <div>Price(1) : &#8377;{cartPriceDetails.price}</div>
      <div>Discount : -&#8377;{cartPriceDetails.discountInPrice}</div>
      <div>Delivery charge : &#8377;50</div>
      <div>Total amount : &#8377;{totalPrice}</div>
      <div>You will save &#8377;{totalSaving} on this order</div>
      <button onClick={() => setPlaceOrder((prevState) => !prevState)}>
        Place order
      </button>
      {placeOrder && <div>Believe that the order is placed.</div>}
    </>
  );
};

export { CartPrice };
