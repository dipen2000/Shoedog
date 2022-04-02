import { useCart } from "../../context/cart-context";
import { useState } from "react";
import {
  getPrice,
  getDiscountInPrice,
  getTotalPrice,
  getTotalSaving,
} from "../../utils/cartPriceCalc";
const CartPrice = () => {
  const [payment, setPayment] = useState(false);
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
      <button onClick={() => setPayment((prevState) => !prevState)}>
        Buy now
      </button>
      {payment && (
        <div>
          Believe that the payment is done although i will add the test payment
          later.
        </div>
      )}
    </>
  );
};

export { CartPrice };
