import "./ProductListing.css";
import { Chip } from "../Chip/Chip";
import { getFinalData } from "../../Utils";
import { SearchBar } from "../SearchBar/SearchBar";
import { ProductCard } from "../Cards";
import { useProduct } from "../../context/productContext";
const ProductListing = () => {
  const categoriesArr = ["All", "Nike", "Adidas", "Puma", "Reebok"];
  const { productState } = useProduct();
  const finalData = getFinalData(productState);

  return (
    <div className="flex-col video-listing-container">
      <div className="flex-row categories-section gap-2">
        {categoriesArr.map((category, index) => {
          return <Chip key={index}>{category}</Chip>;
        })}
      </div>
      <div className="flex-row search-section">
        <SearchBar />
      </div>
      <div className="video-section">
        <h3>Products ({finalData.length})</h3>
        {productState.input.length === 0 ? (
          <div>Loading...</div>
        ) : finalData.length ? (
          <div className="video-section-grid">
            {finalData.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        ) : (
          <div>your preference of products does not exist... </div>
        )}
      </div>
    </div>
  );
};

export { ProductListing };
