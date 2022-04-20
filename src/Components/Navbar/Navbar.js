import "./Navbar.css";
import "../../styles/buttons.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";

const Navbar = () => {
  const { isAuth } = useAuth();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  return (
    <header className="nav-position-sticky">
      <nav className="navbar flex-row justify-space-between-flex align-center-flex">
        <Link to="/" className="curs-point">
          <h2 className="navbar-title">SHOEDOG</h2>
        </Link>
        <div className="mid-nav-links-container flex-row align-center-flex justify-center-flex">
          <Link to="/" className="curs-point">
            Home
          </Link>
          <Link to="/product" className="curs-point">
            Products
          </Link>
        </div>
        <div className="right-nav-links-container flex-row align-center-flex justify-center-flex">
          <div>
            <Link to="/wishlist" className="curs-point">
              Wishlist {wishlistState.length}
            </Link>
          </div>
          <div>
            <Link to="/cart" className="curs-point">
              Cart {cartState.length}
            </Link>
          </div>
          {/* <button className="curs-point">Hindi</button> */}
          <button className="curs-point btn btn-primary-solid shoetube-btn-main">
            <Link to={`/${isAuth ? "logout" : "login"}`}>
              {isAuth ? "Logout" : "Login"}
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
