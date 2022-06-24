import "./CouponsModal.css";
import { useCoupons } from "../../../context/couponContext";
import { isCouponApplicable } from "../../../Utils/cart";
import { toast } from "react-hot-toast";
const CouponsModal = ({ setShowCouponsModal, cartPriceDetail }) => {
  const { couponState, setCouponState } = useCoupons();

  return (
    <div className="flex-col modal-section-overlay bord-3-black justify-center-flex align-center-flex">
      <div className="flex-col coupons-modal-container gap-1  container-box-shadow-purple-big">
        <div className="flex-row justify-space-between-flex align-center-flex">
          <h3>Apply Coupons</h3>
          <div
            className="modal-close-icon-container curs-point"
            onClick={() => setShowCouponsModal(false)}
          >
            <i className="fa-solid fa-times modal-icon-color"></i>
          </div>
        </div>
        <div className="flex-col gap-z-5">
          {couponState.coupons.map((coupon) => {
            return (
              <div
                key={coupon._id}
                className="coupon-option-container relative"
              >
                <div className="flex-row align-center-flex gap-1">
                  <input
                    type="radio"
                    name="coupons"
                    onChange={() => {
                      setCouponState((prevState) => ({
                        ...prevState,
                        selectedCoupon: coupon.name,
                      }));
                      toast(`${coupon.name} coupon applied to your order.`, {
                        icon: "✅",
                        style: {
                          borderRadius: "0",
                          boxShadow: "4px 4px var(--navbar-bg-color)",
                          background: "black",
                          color: "#fff",
                          zIndex: 99999,
                        },
                      });
                    }}
                    checked={couponState.selectedCoupon === coupon.name}
                    disabled={
                      !isCouponApplicable(
                        coupon.priceThreshold,
                        cartPriceDetail.totalPriceBeforeDiscount -
                          cartPriceDetail.totalDiscount
                      )
                    }
                  />
                  <div className="flex-col">
                    <strong>{coupon.name}</strong>
                    <span>{coupon.desc}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { CouponsModal };
