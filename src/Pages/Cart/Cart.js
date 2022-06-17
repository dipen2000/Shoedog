import "./Cart.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { useCart } from "../../context/cartContext";
import { CartCard } from "../../Components/Cards/CartCard/CartCard";
import { CartPrice } from "../../Components/CartPrice/CartPrice";
import { ButtonPrimary } from "../../Components/Buttons";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartState } = useCart();
  const navigate = useNavigate();
  return (
    <ShoedogContainer>
      <div className="cart-page-container flex-col gap-1">
        <h2>My cart ({cartState.length})</h2>
        {cartState.length === 0 ? (
          <div className="empty-list">
            <h2>Your cart is empty</h2>
            <div>
              <ButtonPrimary onClick={() => navigate("/product")}>
                Start shopping
              </ButtonPrimary>
            </div>
          </div>
        ) : (
          <div className="cart-page-main-grid">
            <div className="flex-col gap-2">
              {cartState.map((product) => {
                return <CartCard key={product._id} product={product} />;
              })}
            </div>
            <CartPrice />
          </div>
        )}
      </div>
    </ShoedogContainer>
  );
};

export { Cart };
