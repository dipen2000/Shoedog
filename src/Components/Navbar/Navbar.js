import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../Buttons";
import { useAuth } from "../../context/authContext";
import { useWishlist } from "../../context/wishlistContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { wishlistState } = useWishlist();
  return (
    <header className="navbar-sticky">
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
              Wishlist ({wishlistState.length})
            </Link>
          </div>
          <div>
            <Link to="/cart" className="curs-point">
              Add to cart
            </Link>
          </div>
          <ButtonPrimary
            onClick={() => navigate(`${isAuth ? "/logout" : "/login"}`)}
          >
            {isAuth ? "Logout" : "Login"}
          </ButtonPrimary>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
