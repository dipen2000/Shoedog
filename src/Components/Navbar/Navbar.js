import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useWishlist } from "../../context/wishlist-context";

const Navbar = () => {
  const { isAuth } = useAuth();
  const { wishlistState } = useWishlist();
  return (
    <header>
      <nav className="navbar flex-row justify-space-between-flex align-center-flex">
        <Link to="/" className="curs-point">
          <h2>SHOEDOG</h2>
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
          <label htmlFor="dark-mode">
            <input className="curs-point" type="checkbox" name="dark-mode" />
            switch to dark mode
          </label>
          <div>
            <Link to="/wishlist" className="curs-point">
              Wishlist {wishlistState.length}
            </Link>
          </div>
          <div>
            <Link to="/cart" className="curs-point">
              Add to cart
            </Link>
          </div>
          <button className="curs-point">Hindi</button>
          <button className="curs-point">
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
