import "./Navbar.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { ButtonPrimary } from "../Buttons";
import { useAuth } from "../../context/authContext";
import { useWishlist } from "../../context/wishlistContext";
import { useCart } from "../../context/cartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const activeStyle = {
    borderBottom: "2px solid var(--btn-primary-color)",
  };
  return (
    <header className="navbar-sticky">
      <nav className="navbar flex-row justify-space-between-flex align-center-flex">
        <Link to="/" className="curs-point">
          <h2 className="navbar-title">SHOEDOG</h2>
        </Link>
        <div className="mid-nav-links-container flex-row align-center-flex justify-center-flex">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
            className="curs-point"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/product"
            className="curs-point"
          >
            Products
          </NavLink>
        </div>
        <div className="right-nav-links-container flex-row align-center-flex justify-center-flex">
          {isAuth && (
            <div className="right-nav-links-container flex-row align-center-flex justify-center-flex">
              <div className="nav-icon-container relative container-box-shadow-black">
                <Link to="/wishlist" className="curs-point">
                  <i className="fa-solid fa-heart"></i>
                  <div className="absolute"></div>
                </Link>
                {wishlistState.length > 0 && (
                  <div className="absolute badge-on-nav-icon">
                    {wishlistState.length}
                  </div>
                )}
              </div>
              <div className="nav-icon-container relative container-box-shadow-black">
                <Link to="/cart" className="curs-point">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                {cartState.length > 0 && (
                  <div className="absolute badge-on-nav-icon">
                    {cartState.length}
                  </div>
                )}
              </div>
            </div>
          )}

          {isAuth ? (
            <div className="nav-icon-container relative container-box-shadow-black">
              <Link to="/userDetail" className="curs-point">
                <i className="fa-solid fa-circle-user"></i>
              </Link>
            </div>
          ) : (
            <ButtonPrimary onClick={() => navigate("/login")}>
              {"Login"}
            </ButtonPrimary>
          )}
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
