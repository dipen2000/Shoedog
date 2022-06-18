import "./CouponsModal.css";
import { useCoupons } from "../../../context/couponContext";
import { isCouponApplicable } from "../../../Utils/cart";
const CouponsModal = ({ setShowCouponsModal, cartPriceDetail }) => {
  const { couponState, setCouponState } = useCoupons();

  return (
    <div className="flex-col modal-section-overlay bord-3-black justify-center-flex align-center-flex">
      <div className="flex-col coupons-modal-container gap-1">
        <div className="flex-row justify-space-between-flex align-center-flex">
          <h3>Apply Coupons</h3>
          <div
            className="modal-close-icon-container curs-point"
            onClick={() => setShowCouponsModal(false)}
          >
            <i className="fa-solid fa-times"></i>
          </div>
        </div>
        <div className="flex-col gap-z-5">
          {couponState.coupons.map((coupon) => {
            return (
              <div key={coupon._id} className="coupon-option-container">
                <div className="flex-row align-center-flex gap-1">
                  <input
                    type="radio"
                    name="coupons"
                    onChange={() =>
                      setCouponState((prevState) => ({
                        ...prevState,
                        selectedCoupon: coupon.name,
                      }))
                    }
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