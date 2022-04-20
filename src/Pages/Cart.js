import "./cart.css";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { useCart } from "../context/cart-context";
import { CartCard } from "../Components/CartCard/CartCard";
import { CartPrice } from "../Components/CartPrice/CartPrice";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartState } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="cart-wrapper">
        <h2 className="heading-2 pd-1">My Cart ({cartState.length})</h2>
        {cartState.length > 0 ? (
          <section className="cart-grid">
            <div className="cart-products-container flex-col">
              {cartState.map((product) => (
                <CartCard product={product} key={product._id} />
              ))}
            </div>
            <div>
              <CartPrice />
            </div>
          </section>
        ) : (
          <div className="empty-list-msg flex-col justify-center-flex align-center-flex">
            <h2 className="heading-2">Your cart is empty!!</h2>
            <button
              className="curs-point btn btn-primary-solid shoetube-btn-main"
              onClick={() => navigate("/product")}
            >
              Start shopping
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export { Cart };
