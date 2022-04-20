import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";
import {
  shortenProductName,
  calculatePriceOff,
} from "../../utils/cartCardUtil/cartCardUtil";
import "./productCard.css";
const ProductCard = ({ product }) => {
  const { wishlistState, toggleWishlist } = useWishlist();
  const { cartState, addToCartHandler } = useCart();
  const { isAuth, navigate } = useAuth();

  const itemInWishlist = wishlistState.find((item) => item._id === product._id);
  const itemInCart = cartState.find((item) => item._id === product._id);

  return (
    <div className="grid-item product-card-font flex-col justify-space-between-flex card-box-shadow">
      {!product.inStock && (
        <div className="out-of-stock-container flex-col align-center-flex justify-center-flex">
          <div className="out-of-stock-text">Out of stock</div>
        </div>
      )}
      <div className="flex-col">
        <div className="card-img-thumbnail">
          <img
            className="img-resp"
            src={product.img}
            alt={`${product.name} ${product.brand}`}
          />
        </div>
        <div className="flex-col card-product-desc-container">
          <h4 className="card-product-name">
            {shortenProductName(product.name)}
          </h4>
          <div className="flex-row justify-space-between-flex">
            <div className="flex-row">
              {product.sizes.map((size) => {
                return <div className="size-orb">{size}</div>;
              })}
            </div>
            <p>{product.gender}</p>
          </div>
          <div className="flex-row price-container">
            <h4>{"₹ " + (product.price - product.discount)}</h4>
            <p className="price-line-through">{"₹ " + product.price}</p>
            <strong className="savings-percentage">
              {calculatePriceOff(product.price, product.discount) + " %"}
            </strong>
          </div>
        </div>
      </div>
      {/* <p>{product.name}</p>
      <p>{product.brand}</p>
      <p>{product.gender}</p>
      <p>
        sizes :{" "}
        {product.sizes.map((size, index) => {
          return <span key={index}>{size}</span>;
        })}
      </p>
      <p>{product.inStock ? "in stock" : "out of stock"}</p>
      <p>{product.price}</p>
      <p>{product.discount}</p>
      <p>
        {product.hasFastDelivery ? "has fast delivery" : "no fast delivery"}
      </p>
      <p>{product.brandLogo}</p>
      <p>{product.badge}</p> */}

      <div
        className={`flex-col cart-wishlist-CTA ${
          !product.inStock && "pointer-event-none"
        }`}
      >
        <button
          className="curs-point btn btn-primary-solid shoetube-btn-main card-cart-wishlist-btn"
          onClick={() => {
            toggleWishlist(product);
          }}
        >
          {isAuth && itemInWishlist
            ? "Remove from wishlist"
            : "Add to wishlist"}
        </button>

        <button
          className="curs-point btn btn-primary-solid shoetube-btn-main card-cart-wishlist-btn"
          onClick={() =>
            isAuth && itemInCart ? navigate("/cart") : addToCartHandler(product)
          }
        >
          {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
