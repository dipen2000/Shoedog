import "./ProductListing.css";
import { Chip } from "../Chip/Chip";
import { getFinalData } from "../../Utils";
import { SearchBar } from "../SearchBar/SearchBar";
import { ProductCard } from "../Cards";
import { useProduct } from "../../context/productContext";
import { useCategory } from "../../context/categoryContext";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
import { NikeLogo, AdidasLogo, ReebokLogo, PumaLogo } from "../../assets";
import { getTheCategoryLogo } from "../../Utils";
import { Loader } from "../Loader/Loader";

const ProductListing = () => {
  const [searchInput, setSearchInput] = useState("");
  const { productState } = useProduct();
  const { categoriesState, selectedCategory, setSelectedCategory } =
    useCategory();
  const finalData = getFinalData(productState, searchInput, selectedCategory);
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();

  return (
    <div className="flex-col video-listing-container">
      <div className="flex-row categories-section gap-2">
        <Chip
          style={{
            backgroundColor:
              selectedCategory === "All"
                ? "var(--navbar-bg-color)"
                : "var(--primary-background-color)",
            color:
              selectedCategory === "All"
                ? "var(--primary-background-color)"
                : "var(--btn-primary-font-color)",
          }}
          onClick={() => {
            setSelectedCategory("All");
          }}
        >
          All
        </Chip>
        {categoriesState.map((category) => {
          const isCategorySelected = selectedCategory === category.categoryName;
          return (
            <Chip
              style={{
                backgroundColor: isCategorySelected
                  ? "var(--navbar-bg-color)"
                  : "var(--primary-background-color)",
                color: isCategorySelected
                  ? "var(--primary-background-color)"
                  : "var(--btn-primary-font-color)",
              }}
              key={category._id}
              onClick={() => setSelectedCategory(category.categoryName)}
            >
              {getTheCategoryLogo(category.categoryName, isCategorySelected)}
            </Chip>
          );
        })}
      </div>
      <div className="flex-row search-section">
        <SearchBar
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </div>
      <div className="video-section">
        <h3 className="page-heading">Products ({finalData.length})</h3>
        {productState.input.length === 0 ? (
          <div className="flex-row align-center-flex justify-center-flex">
            <Loader />
          </div>
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
