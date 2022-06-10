import "./SingleProductPage.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/productContext";
import { useAuth } from "../../context/authContext";
import { useWishlist } from "../../context/wishlistContext";
import { useCart } from "../../context/cartContext";
import { ButtonPrimary } from "../../Components/Buttons";
import { getThePriceOffPercentage } from "../../Utils/cart/getThePriceOffPercentage";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { productState } = useProduct();
  const { isAuth } = useAuth();
  const { wishlistState, toggleWishlist } = useWishlist();
  const { cartState, removeFromCart, addToCart } = useCart();

  const productSelected = productState.input.find(
    (product) => product._id === productId
  );
  const { brand, name, price, discount, desc, img } = productSelected;
  return (
    <>
      <ShoedogContainer>
        <div className="single-product-container">
          <div className="single-product-detail-section card-box-shadow">
            <div className="flex-row justify-center-flex">
              <div className="single-product-img-container">
                <img className="img-resp" src={img} alt="img" />
              </div>
            </div>
          </div>
          <div className="single-product-detail-section card-box-shadow">
            <div className="flex-col gap-1">
              <h3>{brand}</h3>
              <h2>{name}</h2>
              <div className="flex-row gap-1">
                <span>Rs. {price - discount}</span>
                <span>
                  <s>Rs. {price}</s>
                </span>
                <strong className="price-off">
                  {getThePriceOffPercentage(price, discount) + " %"}
                </strong>
              </div>
              <div>
                <p>
                  <strong>Description</strong> : {desc}
                </p>
              </div>
              <div>
                <button
                  className="btn btn-primary-outline shoetube-btn-main-outline"
                  onClick={() => {
                    isAuth
                      ? toggleWishlist(productSelected)
                      : navigate("/login");
                  }}
                >
                  {wishlistState.find(
                    (item) => item._id === productSelected._id
                  )
                    ? "Remove from wishlist"
                    : "Add to wishlist"}
                </button>
              </div>
              <div>
                <button
                  className="curs-point btn btn-primary-solid shoetube-btn-main"
                  onClick={() => {
                    isAuth
                      ? cartState.find(
                          (item) => item._id === productSelected._id
                        )
                        ? removeFromCart(productId)
                        : addToCart(productSelected)
                      : navigate("/login");
                  }}
                >
                  {cartState.find((item) => item._id === productSelected._id)
                    ? "Remove from cart"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShoedogContainer>
    </>
  );
};

export { SingleProductPage };
