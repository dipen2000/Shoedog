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
    <div className="cart-card-container bord-3-yellow">
      <div className="product-img-container bord-3-red">
        <img className="img-resp" src={img} alt={`${brand} ${name}`} />
      </div>
      <div className="flex-col bord-3-green">
        <h3>{brand}</h3>
        <h3>{name}</h3>
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
        <div className="flex-row gap-1">
          <ButtonPrimary onClick={() => decrementProductQuantity(product)}>
            -
          </ButtonPrimary>
          <span>{qty}</span>
          <ButtonPrimary onClick={() => incrementProductQuantity(product)}>
            +
          </ButtonPrimary>
        </div>
        <div>
          <ButtonPrimary onClick={() => moveToWishlist(product)}>
            Move to wishlist
          </ButtonPrimary>
          <br />
          <ButtonPrimary onClick={() => removeFromCart(_id)}>
            remove from cart
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
