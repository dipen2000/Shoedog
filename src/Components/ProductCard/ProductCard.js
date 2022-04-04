import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";
const ProductCard = ({ product }) => {
  const { wishlistState, toggleWishlist } = useWishlist();
  const { cartState, addToCartHandler } = useCart();
  const { isAuth, navigate } = useAuth();

  const itemInWishlist = wishlistState.find((item) => item._id === product._id);
  const itemInCart = cartState.find((item) => item._id === product._id);

  return (
    <div className="grid-item">
      <p>{product.name}</p>
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
      <p>{product.badge}</p>
      <button
        onClick={() => {
          toggleWishlist(product);
        }}
      >
        {isAuth && itemInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      </button>
      <br />
      <button
        onClick={() =>
          isAuth && itemInCart ? navigate("/cart") : addToCartHandler(product)
        }
      >
        {isAuth && itemInCart ? "Go To Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export { ProductCard };
