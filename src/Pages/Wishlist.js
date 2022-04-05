import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { useWishlist } from "../context/wishlist-context";
import { ProductCard } from "../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "../Components/ProductListing/productListing.css";

const Wishlist = () => {
  const { wishlistState } = useWishlist();

  return (
    <>
      <Navbar />
      <h2>Wishlist({wishlistState.length})</h2>
      {wishlistState.length > 0 ? (
        <section className="products-grid">
          {wishlistState.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </section>
      ) : (
        <div>
          <p>Your wishlist is empty</p>
          <Link to="/product">Start shopping</Link>
        </div>
      )}

      <Footer />
    </>
  );
};

export { Wishlist };
