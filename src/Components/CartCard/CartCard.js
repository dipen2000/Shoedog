import "./cartCard.css";
import { useCart } from "../../context/cart-context";
import { calculatePriceOff } from "../../utils/cartCardUtil/cartCardUtil";
import "../../styles/buttons.css";
const CartCard = ({ product }) => {
  const { name, qty, price, image, img, brand, gender, discount } = product;
  const { removeFromCartHandler, updateQtyHandler, moveToWishlistHandler } =
    useCart();
  return (
    <>
      <div className="individual-cart-card-container card-box-shadow">
        <div className="cart-card-img-section">
          <div className="cart-card-img-container">
            <img className="img-resp" src={img} alt={`${name} ${brand}`} />
          </div>
        </div>

        <div className="cart-card-detail-section ">
          <div className="flex-col justify-space-between-flex cart-card-flex-container">
            <div className="flex-col cart-card-detail-container">
              <h2>{name}</h2>
              <p>{gender}</p>
              <div className="flex-row price-container">
                <h4>{"₹ " + (price - discount)}</h4>
                <p className="price-line-through">{"₹ " + price}</p>
                <strong className="savings-percentage">
                  {calculatePriceOff(price, discount) + " %"}
                </strong>
              </div>
              <div className="quantity-counter-container flex-row align-center-flex">
                <h4>Quantity : </h4>
                <div className="quantity-counter flex-row align-center-flex justify-center-flex">
                  <span
                    className="curs-point incr-decr-span"
                    onClick={() => updateQtyHandler(product, "decrement")}
                  >
                    -
                  </span>
                  <span>{qty}</span>
                  <span
                    className="curs-point incr-decr-span"
                    onClick={() => updateQtyHandler(product, "increment")}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="cart-card-CTA-btn-container flex-col">
              <button
                onClick={() => moveToWishlistHandler(product)}
                className="curs-point btn btn-primary-solid shoetube-btn-main shoetube-btn-main-cart"
              >
                Move to wishlist
              </button>
              <button
                onClick={() => removeFromCartHandler(product)}
                className="curs-point btn btn-primary-outline shoetube-btn-main-outline"
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
        {/* <div>{name}</div>
        <div>&#8377;{price}</div>
        <div>
          Quantity :{" "}
          <button onClick={() => updateQtyHandler(product, "decrement")}>
            -
          </button>
          <span>{qty}</span>
          <button onClick={() => updateQtyHandler(product, "increment")}>
            +
          </button>
        </div>
        <button onClick={() => moveToWishlistHandler(product)}>
          Move to wishlist
        </button>
        <br />
        <button onClick={() => removeFromCartHandler(product)}>
          Remove from cart
        </button> */}
      </div>
    </>
  );
};

export { CartCard };
