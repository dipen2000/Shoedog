import { ButtonPrimary } from "../../Buttons";
import "./ProductCard.css";
import { useWishlist } from "../../../context/wishlistContext";
import { ACTIONS } from "../../../constants/actions";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
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
  const { isAuth } = useAuth();
  const { wishlistState, toggleWishlist } = useWishlist();
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
          <ButtonPrimary
            onClick={() => {
              isAuth ? toggleWishlist(product) : navigate("/login");
            }}
          >
            {wishlistState.find((item) => item._id === product._id)
              ? "Remove from wishlist"
              : "Add to wishlist"}
          </ButtonPrimary>
        </div>
        <div>
          <ButtonPrimary>Add to cart</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
