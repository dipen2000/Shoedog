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
      <div className="cart-page-container bord-3-green">
        <h2>My cart ({cartState.length})</h2>
        {cartState.length === 0 ? (
          <div>
            <p>Your cart is empty</p>
            <ButtonPrimary onClick={() => navigate("/product")}>
              Start shopping
            </ButtonPrimary>
          </div>
        ) : (
          <div className="cart-page-main-grid">
            <div className="flex-col gap-2 bord-3-purple">
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
