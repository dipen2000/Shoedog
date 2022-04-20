import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { useWishlist } from "../context/wishlist-context";
import { ProductCard } from "../Components/ProductCard/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import "../Components/ProductListing/productListing.css";
import "./wishlist.css";

const Wishlist = () => {
  const { wishlistState } = useWishlist();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="wishlist-container">
        <h2>Wishlist({wishlistState.length})</h2>
        {wishlistState.length > 0 ? (
          <section className="products-grid">
            {wishlistState.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </section>
        ) : (
          <div className="empty-list-msg flex-col justify-center-flex align-center-flex">
            <h2>Your wishlist is empty</h2>
            <button
              className="curs-point btn btn-primary-solid shoetube-btn-main"
              onClick={() => navigate("/product")}
            >
              Start shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export { Wishlist };
