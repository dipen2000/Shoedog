import { ButtonPrimary } from "../../Buttons";
import "./ProductCard.css";
import { useWishlist } from "../../../context/wishlistContext";
import { useCart } from "../../../context/cartContext";
import { useNavigate } from "react-router-dom";
import { shortenProductName } from "../../../Utils";
import { getThePriceOffPercentage } from "../../../Utils/cart";

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
    img,
  } = product;
  const navigate = useNavigate();
  const { wishlistState, toggleWishlist } = useWishlist();
  const { cartState, addToCart } = useCart();

  const itemInCart = cartState.find((item) => item._id === product._id);
  const itemInWishlist = wishlistState.find((item) => item._id === product._id);
  return (
    <div className="grid-item product-card-container card-box-shadow">
      {!inStock && (
        <div className="out-of-stock-container flex-row align-center-flex justify-center-flex">
          <div className="out-of-stock-text">Out of stock</div>
        </div>
      )}
      <div
        className={`flex-col justify-space-between-flex curs-point ${
          !inStock && "pointer-none"
        }`}
        onClick={() => {
          navigate(`/product/${product._id}`);
        }}
      >
        <div className="flex-col">
          <div className="each-product-img-container">
            <img className="img-resp" src={img} alt="hello" />
          </div>
          <div className="product-detail-section flex-col">
            <strong>{shortenProductName(name)}</strong>
            <div className="flex-row justify-space-between-flex ">
              <div className="flex-row align-center-flex gap-z-5">
                {sizes.map((size, index) => {
                  return (
                    <span className="single-size-container" key={index}>
                      {size}
                    </span>
                  );
                })}
              </div>
              <span>{gender}</span>
            </div>
            <div className="flex-row gap-z-5">
              <span>Rs. {price - discount}</span>
              <span>
                <s>Rs. {price}</s>
              </span>
              <strong className="price-off">
                {getThePriceOffPercentage(price, discount)}%
              </strong>
            </div>
          </div>
        </div>
        <div className="product-card-CTA-section flex-row">
          <button
            className={`btn btn-primary-solid shoetube-btn-main product-card-add-to-cart ${
              !inStock && "pointer-none"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              itemInCart ? navigate("/cart") : addToCart(product);
            }}
          >
            {itemInCart ? "Go to cart" : "Add to cart"}
          </button>
        </div>
      </div>
      <div
        className={`absolute wishlist-container curs-point ${
          !inStock && "pointer-none"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}
      >
        <i
          className={`${itemInWishlist ? "fa-solid" : "fa-regular"} fa-heart`}
        ></i>
      </div>
    </div>
  );
};

export { ProductCard };
