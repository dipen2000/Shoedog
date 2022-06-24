import { ButtonPrimary } from "../Buttons";
import { CouponsModal } from "../Modal";
import "./CartPrice.css";
import { useCart } from "../../context/cartContext";
import { useState } from "react";
import { useCoupons } from "../../context/couponContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  getNumberOfItemsInTheCart,
  getTotalPrice,
  getTotalDiscount,
  getPriceCutFromCoupon,
  getGrandTotal,
} from "../../Utils/cart";
const CartPrice = () => {
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { couponState, setCouponState } = useCoupons();
  const cartPriceDetail = {
    totalPriceBeforeDiscount: getTotalPrice(cartState),
    totalDiscount: getTotalDiscount(cartState),
    deliveryCharge: 50,
  };

  const [showCouponsModal, setShowCouponsModal] = useState(false);

  const selectedCoupon = couponState.coupons.find(
    (coupon) => coupon.name === couponState.selectedCoupon
  );

  return (
    <div className="flex-col gap-1">
      <div className="flex-row justify-space-between-flex align-center-flex">
        <div className="flex-row align-center-flex gap-z-5">
          <span>Got a Coupon?</span>
          <i className="fa-solid fa-tags"></i>
        </div>
        <button
          className="btn btn-primary-solid shoetube-btn-main"
          onClick={() => setShowCouponsModal(true)}
        >
          Apply
        </button>
      </div>
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

        {couponState.selectedCoupon && (
          <div className="flex-col gap-1">
            <div className="flex-row align-center-flex justify-space-between-flex">
              <span style={{ color: "var(--navbar-bg-color)" }}>
                <i
                  className="fa-solid fa-times curs-point"
                  onClick={() => {
                    setCouponState((prevState) => ({
                      ...prevState,
                      selectedCoupon: "",
                    }));
                    toast("Removed the coupon.", {
                      icon: "✅",
                      style: {
                        borderRadius: "0",
                        boxShadow: "4px 4px var(--navbar-bg-color)",
                        background: "black",
                        color: "#fff",
                      },
                    });
                  }}
                ></i>{" "}
                <strong>{selectedCoupon.name}</strong>:
              </span>
              <span>
                - Rs{" "}
                {getPriceCutFromCoupon(
                  cartPriceDetail.totalPriceBeforeDiscount -
                    cartPriceDetail.totalDiscount,
                  selectedCoupon?.percentageOff
                )}
              </span>
            </div>
            <div className="flex-row align-center-flex justify-space-between-flex">
              <span>Grand total :</span>
              <span>Rs {getGrandTotal(cartPriceDetail, selectedCoupon)}</span>
            </div>
          </div>
        )}
        <p>
          You will save Rs.{" "}
          {couponState.selectedCoupon
            ? cartPriceDetail.totalDiscount +
              getPriceCutFromCoupon(
                cartPriceDetail.totalPriceBeforeDiscount -
                  cartPriceDetail.totalDiscount,
                selectedCoupon?.percentageOff
              ) -
              cartPriceDetail.deliveryCharge
            : cartPriceDetail.totalDiscount -
              cartPriceDetail.deliveryCharge}{" "}
          on this order.
        </p>
      </div>
      <div className="flex-row align-center-flex justify-center-flex">
        <button
          className="btn btn-primary-solid shoetube-btn-main"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
      {showCouponsModal && (
        <CouponsModal
          setShowCouponsModal={setShowCouponsModal}
          cartPriceDetail={cartPriceDetail}
        />
      )}
    </div>
  );
};

export { CartPrice };
