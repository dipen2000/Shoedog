import "./cartCard.css";
import { useCart } from "../../context/cart-context";

const CartCard = ({ product }) => {
  const { name, qty, price, image } = product;
  const { removeFromCartHandler, updateQtyHandler, moveToWishlistHandler } =
    useCart();
  return (
    <>
      <div className="individual-cart-card-container">
        <div>{name}</div>
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
        </button>
      </div>
    </>
  );
};

export { CartCard };
