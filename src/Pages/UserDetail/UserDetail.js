import "./UserDetail.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { useAuth } from "../../context/authContext";
import { ButtonPrimary } from "../../Components/Buttons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useOrder } from "../../context/orderContext";
const UserDetail = () => {
  const [tab, setTab] = useState("Profile");
  const { user } = useAuth();
  const { orderState } = useOrder();
  const navigate = useNavigate();
  return (
    <ShoedogContainer>
      <div className="flex-col justify-center-flex align-center-flex">
        <div className="mt-2 user-detail-container flex-col align-center-flex gap-2">
          <h2>My Account</h2>
          <div className="flex-col user-detail-card">
            <div className="user-detail-section-tabs-grid">
              <div
                style={{
                  borderBottom:
                    tab === "Profile" ? "2px solid var(--navbar-bg-color)" : "",
                }}
                onClick={() => setTab("Profile")}
                className="flex-row justify-center-flex align-center-flex user-detail-tab curs-point"
              >
                <strong>Profile</strong>
              </div>
              <div
                style={{
                  borderBottom:
                    tab === "Orders" ? "2px solid var(--navbar-bg-color)" : "",
                }}
                onClick={() => setTab("Orders")}
                className="flex-row justify-center-flex align-center-flex user-detail-tab curs-point"
              >
                <strong>Orders</strong>
              </div>
            </div>
            <div className="user-detail-content">
              {tab === "Profile" && (
                <div className="user-detail-profile-container flex-col justify-space-between-flex">
                  <div className="flex-row align-center-flex gap-1">
                    <i
                      className="fa-solid fa-circle-user user-detail-icon"
                      style={{ color: "var(--navbar-bg-color)" }}
                    ></i>
                    <div className="flex-col">
                      <strong style={{ color: "var(--navbar-bg-color)" }}>
                        {user.firstName} {user.lastName}
                      </strong>
                      <span>{user.email}</span>
                    </div>
                  </div>
                  <button
                    className="curs-point btn btn-primary-solid shoetube-btn-main"
                    onClick={() => navigate("/logout")}
                  >
                    Logout
                  </button>
                </div>
              )}
              {tab === "Orders" && (
                <div className="flex-col gap-1">
                  {orderState.order.length > 0 &&
                  orderState.totalAmount != null ? (
                    <div className="flex-col gap-1">
                      <div className="user-detail-amount-container flex-row justify-center-flex">
                        <strong>Total Amount : {orderState.totalAmount}</strong>
                      </div>
                      <div className="flex-col gap-1 align-center-flex">
                        {orderState.order.map((item) => {
                          return (
                            <div
                              key={item._id}
                              className="user-order-detail-card-container container-box-shadow-purple"
                            >
                              <div className="user-order-card-img-container">
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
                    <h3>No orders yet</h3>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ShoedogContainer>
  );
};

export { UserDetail };
