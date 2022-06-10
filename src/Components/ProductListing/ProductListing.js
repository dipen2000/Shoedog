import "./ProductListing.css";
import { Chip } from "../Chip/Chip";
import { getFinalData } from "../../Utils";
import { SearchBar } from "../SearchBar/SearchBar";
import { ProductCard } from "../Cards";
import { useProduct } from "../../context/productContext";
import { useCategory } from "../../context/categoryContext";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const ProductListing = () => {
  const [searchInput, setSearchInput] = useState("");
  const { productState } = useProduct();
  const { categoriesState, selectedCategory, setSelectedCategory } =
    useCategory();
  const finalData = getFinalData(productState, searchInput, selectedCategory);
  const navigate = useNavigate();
  return (
    <div className="flex-col video-listing-container">
      <div className="flex-row categories-section gap-2">
        <Chip
          style={{
            backgroundColor: selectedCategory === "All" ? "black" : "",
            color: selectedCategory === "All" ? "white" : "",
          }}
          onClick={() => {
            setSelectedCategory("All");
          }}
        >
          All
        </Chip>
        {categoriesState.map((category) => {
          return (
            <Chip
              style={{
                backgroundColor:
                  selectedCategory === category.categoryName ? "black" : "",
                color:
                  selectedCategory === category.categoryName ? "white" : "",
              }}
              key={category._id}
              onClick={() => setSelectedCategory(category.categoryName)}
            >
              {category.categoryName}
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
        <h3>Products ({finalData.length})</h3>
        {productState.input.length === 0 ? (
          <div>Loading...</div>
        ) : finalData.length ? (
          <div className="video-section-grid">
            {finalData.map((product) => {
              return (
                <ProductCard
                  key={product._id}
                  product={product}
                  onClick={() => navigate(`/product/${product._id}`)}
                />
              );
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
