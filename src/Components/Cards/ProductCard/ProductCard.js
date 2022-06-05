import { ButtonPrimary } from "../../Buttons";
import "./ProductCard.css";
import { useWishlist } from "../../../context/wishlistContext";
import { useCart } from "../../../context/cartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    name,
    brand,
    gender,
    sizes,
    inStock,
    price,
    discount,
    hasFastDelivery,
  } = product;
  const navigate = useNavigate();
  const { wishlistState, toggleWishlist } = useWishlist();
  const { cartState, addToCart } = useCart();

  const itemInCart = cartState.find((item) => item._id === product._id);
  const itemInWishlist = wishlistState.find((item) => item._id === product._id);
  return (
    <div className="product-card-container">
      <div className="flex-col">
        <h4>{name}</h4>
        <h3>{brand}</h3>
        <h3>{gender}</h3>
        <div className="flex-row gap-1">
          {sizes.map((size, index) => {
            return <span key={index}>{size}</span>;
          })}
        </div>
        <p>{inStock ? "In stock" : "out of stocks"}</p>
        <p>{price}</p>
        <p>
          {hasFastDelivery
            ? "has fast delivery"
            : "does not have fast delivery"}
        </p>
        <div
          className="temp-view bord-3-red curs-point"
          onClick={() => navigate(`/product/${product._id}`)}
        >
          View
        </div>
        <div>
          <button
            onClick={() => {
              toggleWishlist(product);
            }}
          >
            {itemInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              itemInCart ? navigate("/cart") : addToCart(product);
            }}
          >
            {itemInCart ? "Go to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
