import "./OrderSummary.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { useOrder } from "../../context/orderContext";
import { Navigate } from "react-router-dom";
const OrderSummary = () => {
  const { orderState } = useOrder();
  return (
    <ShoedogContainer>
      <div className="flex-col justify-center-flex align-center-flex">
        <div className="mt-2 order-summary-container">
          {orderState.order.length > 0 && orderState.totalAmount !== null ? (
            <div className="flex-col align-center-flex gap-2">
              <h2>Order placed successfully!</h2>
              <div className="order-summary-amount-container flex-row justify-center-flex">
                <h2>Total amount : Rs. {orderState.totalAmount}</h2>
              </div>
              <div className="flex-col justify-center-flex gap-1">
                {orderState.order.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="order-detail-card-container container-box-shadow-purple"
                    >
                      <div className="order-card-img-container">
                        <img className="img-resp" src={item.img} />
                      </div>
                      <div className="flex-col gap-1 order-card-desc-section">
                        <span>{item.name}</span>
                        <span>{item.gender}</span>
                        <span>
                          <strong>Price : </strong> Rs.{" "}
                          {Number(item.price) - Number(item.discount)}
                        </span>
                        <span>
                          <strong>Qty : </strong> {item.qty}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <Navigate to="/" replace={true} />
          )}
        </div>
      </div>
    </ShoedogContainer>
  );
};

export { OrderSummary };
