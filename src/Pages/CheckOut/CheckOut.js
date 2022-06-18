import "./CheckOut.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { ButtonPrimary } from "../../Components/Buttons";
import { useCart } from "../../context/cartContext";
import { useCoupons } from "../../context/couponContext";
import { useAddress } from "../../context/addressesContext";
import { useState } from "react";
import { AddressModal } from "../../Components/Modal/AddressModal/AddressModal";
import { useOrder } from "../../context/orderContext";
import { useNavigate } from "react-router-dom";
import {
  getTotalPrice,
  getTotalDiscount,
  getPriceCutFromCoupon,
  loadScript,
  getPayableAmount,
} from "../../Utils/cart";
import { ACTIONS } from "../../constants/actions";
const CheckOut = () => {
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const { couponState } = useCoupons();
  const { addressState, addressDispatch } = useAddress();
  const { orderDispatch } = useOrder();

  const cartPriceDetail = {
    totalPriceBeforeDiscount: getTotalPrice(cartState),
    totalDiscount: getTotalDiscount(cartState),
    deliveryCharge: 50,
  };

  const selectedCoupon = couponState.coupons.find(
    (coupon) => coupon.name === couponState.selectedCoupon
  );

  const selectedAddress = addressState.addresses.find(
    (address) => address.name === addressState.selectedAddressHolder
  );

  const [addressModal, setAddressModal] = useState(false);

  const amount = getPayableAmount(selectedCoupon, cartPriceDetail);

  const resetCart = () => {
    orderDispatch({
      type: ACTIONS.SET_ORDER,
      payload: { order: [...cartState], totalAmount: amount },
    });
    cartDispatch({
      type: ACTIONS.SET_CART,
      payload: { data: [] },
    });
  };

  const makePayment = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      // showToast({
      //   title: "Razorpay SDK failed to load. Are you online?",
      //   type: "success",
      // });
      console.log("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const options = {
      key: process.env.REACT_APP_RAZORPAY_API_KEY,
      key_id: process.env.REACT_APP_RAZORPAY_API_KEY,
      currency: "INR",
      amount: amount * 100,
      name: "Shoedog",
      description: "Thank you for shopping with Shoedog.",
      handler: async function (response) {
        if (response.razorpay_payment_id) {
          resetCart();
          // showToast({
          //   type: "success",
          //   title: `Items purchased successfully with payment ID: ${response.razorpay_payment_id}`,
          // });
          console.log("Items purchased successfully");
          navigate("/orderSummary");
        }
      },

      prefill: {
        name: "Shoedog",
        email: "company@shoedog.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <ShoedogContainer>
      <div className="flex-row justify-center-flex">
        <div className="flex-col gap-2 mt-2 checkout-container">
          <div className="flex-row justify-center-flex">
            <h2>Checkout</h2>
          </div>
          <div className="checkout-grid-section">
            <div className=" flex-col justify-space-between-flex gap-2">
              <div className="flex-col gap-1">
                <h3>Select Address</h3>
                {addressState.addresses.length > 0 ? (
                  <div className="flex-col gap-z-5">
                    {addressState.addresses.map((address) => {
                      return (
                        <div
                          key={address._id}
                          className="single-address-container flex-row gap-1"
                        >
                          <input
                            type="radio"
                            name="address"
                            checked={
                              addressState.selectedAddressHolder ===
                              address.name
                            }
                            onChange={() =>
                              addressDispatch({
                                type: ACTIONS.SET_ADDRESS,
                                payload: { data: address.name },
                              })
                            }
                          />
                          <div className="flex-grow-1 flex-col">
                            <div className="flex-row align-center-flex justify-space-between-flex">
                              <strong>{address.name}</strong>
                              <i
                                className="fa-solid fa-trash curs-point"
                                onClick={() =>
                                  addressDispatch({
                                    type: ACTIONS.REMOVE_ADDRESS,
                                    payload: { data: address.name },
                                  })
                                }
                              ></i>
                            </div>
                            <span>{address.street}</span>
                            <span>
                              {address.city} - {address.zip}
                            </span>
                            <span>
                              {address.state}, {address.Country}
                            </span>
                            <span>{address.mobile}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <strong>No addresses here, create one.</strong>
                )}
                <div>
                  <button
                    className="btn btn-primary-outline shoetube-btn-main-outline"
                    onClick={() => setAddressModal(true)}
                  >
                    <div className="flex-row gap-1 justify-center-flex align-center-flex">
                      <i className="fa-solid fa-plus"></i>
                      <span>Add address</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-col justify-space-between-flex gap-2">
              <div className="flex-col gap-2">
                <div className="flex-col gap-1">
                  <div className="flex-row align-center-flex justify-center-flex checkout-summary-section-heading-container">
                    <h3>Order summary</h3>
                  </div>
                  <div className="checkout-summary-section">
                    {cartState.map((cartItem) => {
                      return (
                        <div
                          key={cartItem._id}
                          className="flex-row justify-space-between-flex align-center-flex"
                        >
                          <p>
                            {cartItem.name}{" "}
                            <span>
                              (Rs.{" "}
                              {Number(cartItem.price) -
                                Number(cartItem.discount)}{" "}
                              x {cartItem.qty} )
                            </span>
                          </p>
                          <span>
                            Rs.{" "}
                            {(Number(cartItem.price) -
                              Number(cartItem.discount)) *
                              cartItem.qty}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex-col gap-1">
                  <div className="flex-row align-center-flex justify-center-flex checkout-summary-section-heading-container">
                    <h3>Price details</h3>
                  </div>
                  <div className="checkout-summary-section">
                    <div className="flex-row justify-space-between-flex align-center-flex">
                      <span>Total price</span>
                      <span>
                        Rs. {cartPriceDetail.totalPriceBeforeDiscount}
                      </span>
                    </div>
                    <div className="flex-row justify-space-between-flex align-center-flex">
                      <span>Total discount</span>
                      {selectedCoupon ? (
                        <span>
                          Rs.{" "}
                          {cartPriceDetail.totalDiscount +
                            getPriceCutFromCoupon(
                              cartPriceDetail.totalPriceBeforeDiscount -
                                cartPriceDetail.totalDiscount,
                              selectedCoupon?.percentageOff
                            )}
                        </span>
                      ) : (
                        <span>Rs. {cartPriceDetail.totalDiscount}</span>
                      )}
                    </div>
                    <div className="flex-row justify-space-between-flex align-center-flex">
                      <span>Delivery charge</span>
                      <span>Rs. {cartPriceDetail.deliveryCharge}</span>
                    </div>
                    <div className="flex-row justify-space-between-flex align-center-flex">
                      <span>Grand total</span>
                      {selectedCoupon ? (
                        <span>
                          Rs.{" "}
                          {cartPriceDetail.totalPriceBeforeDiscount -
                            cartPriceDetail.totalDiscount -
                            getPriceCutFromCoupon(
                              cartPriceDetail.totalPriceBeforeDiscount -
                                cartPriceDetail.totalDiscount,
                              selectedCoupon?.percentageOff
                            ) +
                            cartPriceDetail.deliveryCharge}
                        </span>
                      ) : (
                        <span>
                          Rs.{" "}
                          {cartPriceDetail.totalPriceBeforeDiscount -
                            cartPriceDetail.totalDiscount +
                            cartPriceDetail.deliveryCharge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-col gap-1">
                  <div className="flex-row align-center-flex justify-center-flex checkout-summary-section-heading-container">
                    <h3>Deliver to</h3>
                  </div>
                  <div className="checkout-summary-section">
                    {addressState.addresses.length > 0 &&
                    addressState.selectedAddressHolder !== "" ? (
                      <div className="flex-col">
                        <span>{selectedAddress.name}</span>
                        <span>{selectedAddress.street}</span>
                        <span>
                          {selectedAddress.city} - {selectedAddress.zip}
                        </span>
                        <span>
                          {selectedAddress.state}, {selectedAddress.Country}
                        </span>
                        <span>{selectedAddress.mobile}</span>
                      </div>
                    ) : (
                      <div className="flex-row align-center-flex justify-center-flex">
                        <strong>No address here , select one</strong>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <ButtonPrimary
                disabled={!addressState.selectedAddressHolder}
                onClick={() => makePayment(amount)}
              >
                Place order
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
      {addressModal && <AddressModal setAddressModal={setAddressModal} />}
    </ShoedogContainer>
  );
};

export { CheckOut };
