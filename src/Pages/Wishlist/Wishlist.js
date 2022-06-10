import "./Wishlist.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { useWishlist } from "../../context/wishlistContext";
import { ProductCard } from "../../Components/Cards";
import { ButtonPrimary } from "../../Components/Buttons";
import { useNavigate } from "react-router-dom";
const Wishlist = () => {
  const { wishlistState } = useWishlist();
  const navigate = useNavigate();
  return (
    <ShoedogContainer>
      <div className="flex-col">
        <h2>Wishlist ({wishlistState.length})</h2>
        {wishlistState.length === 0 ? (
          <div>
            <div>Your wishlist is Empty</div>
            <ButtonPrimary onClick={() => navigate("/product")}>
              Start Shopping
            </ButtonPrimary>
          </div>
        ) : (
          <div className="wishlist-section-grid">
            {wishlistState.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>
    </ShoedogContainer>
  );
};

export { Wishlist };
