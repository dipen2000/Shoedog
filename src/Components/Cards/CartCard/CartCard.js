import { ButtonPrimary } from "../../Buttons";
import { useCart } from "../../../context/cartContext";
import { getThePriceOffPercentage } from "../../../Utils/cart";
import "./CartCard.css";

const CartCard = ({ product }) => {
  const {
    removeFromCart,
    moveToWishlist,
    decrementProductQuantity,
    incrementProductQuantity,
  } = useCart();
  const { img, brand, name, gender, price, discount, _id, qty } = product;
  return (
    <div className="cart-card-container card-box-shadow">
      <div className="product-img-container">
        <img className="img-resp" src={img} alt={`${brand} ${name}`} />
      </div>
      <div className="flex-col gap-1 cart-product-detail-section">
        <h2>{name}</h2>
        <p>{gender}</p>
        <div className="flex-row gap-1">
          <span>Rs. {price - discount}</span>
          <span>
            <s>Rs. {price}</s>
          </span>
          <span className="price-off">
            % {getThePriceOffPercentage(price, discount)} off
          </span>
        </div>
        <div className="flex-row">
          <div className="flex-row gap-1 quantity-incr-decr-section align-center-flex">
            <span
              className="curs-point incr-decr-span"
              onClick={() => decrementProductQuantity(product)}
            >
              -
            </span>
            <span>{qty}</span>
            <span
              className="curs-point incr-decr-span"
              onClick={() => incrementProductQuantity(product)}
            >
              +
            </span>
          </div>
        </div>

        <div className="flex-col">
          <button
            className="btn btn-primary-solid shoetube-btn-main"
            onClick={() => moveToWishlist(product)}
          >
            Move to wishlist
          </button>

          <button
            className="btn btn-primary-outline shoetube-btn-main-outline"
            onClick={() => removeFromCart(_id)}
          >
            remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
