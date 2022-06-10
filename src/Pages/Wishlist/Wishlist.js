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
      <div className="flex-col gap-1">
        <h2>Wishlist ({wishlistState.length})</h2>
        {wishlistState.length === 0 ? (
          <div className="empty-list">
            <h2>Your wishlist is Empty</h2>
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
