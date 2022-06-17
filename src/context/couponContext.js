import { createContext, useState, useContext } from "react";
import { v4 as uuid } from "uuid";

const couponContext = createContext();

const initialCouponState = {
  coupons: [
    {
      _id: uuid(),
      name: "FLAT10",
      desc: "10% off on order of Rs. 2000 or above",
      percentageOff: 10,
      priceThreshold: 2000,
    },
    {
      _id: uuid(),
      name: "CLEAR30",
      desc: "30% off on order of Rs. 6000 or above",
      percentageOff: 30,
      priceThreshold: 6000,
    },
  ],
  selectedCoupon: "",
};

const useCoupons = () => useContext(couponContext);

const CouponProvider = ({ children }) => {
  const [couponState, setCouponState] = useState(initialCouponState);
  return (
    <couponContext.Provider value={{ couponState, setCouponState }}>
      {children}
    </couponContext.Provider>
  );
};

export { CouponProvider, useCoupons };
