import "./cart.css";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { useCart } from "../context/cart-context";
import { CartCard } from "../Components/CartCard/CartCard";
import { CartPrice } from "../Components/CartPrice/CartPrice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartState } = useCart();
  return (
    <>
      <Navbar />
      <section className="cart-wrapper">
        <h2>My Cart ({cartState.length})</h2>
        {cartState.length > 0 ? (
          <section className="cart-grid">
            <div className="cart-products-container">
              {cartState.map((product) => (
                <CartCard product={product} key={product._id} />
              ))}
            </div>
            <div className="cart-price-container">
              <CartPrice />
            </div>
          </section>
        ) : (
          <div>
            <div>Your cart is empty!!</div>
            <Link to="/product">Start shopping</Link>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export { Cart };
