import "./productListing.css";
import { useProduct } from "../../custom-hooks/useProduct";
import { ACTIONS } from "../../Constants/actions";
import { getFinalData } from "../../utils/getFinalData";
import { ProductCard } from "../ProductCard/ProductCard";

const ProductListing = () => {
  const { productState, productDispatch } = useProduct();
  const { products } = productState;

  const finalData = getFinalData(productState);
  return (
    <div className="productListing">
      <div className="brand-filter-container flex-row">
        <button
          className="btn btn-primary-outline shoedog-chip-btn"
          onClick={() =>
            productDispatch({
              type: ACTIONS.FILTER_BY_BRAND,
              payload: { brand: "all" },
            })
          }
        >
          All brands
        </button>
        <button
          className="btn btn-primary-outline  shoedog-chip-btn"
          onClick={() =>
            productDispatch({
              type: ACTIONS.FILTER_BY_BRAND,
              payload: { brand: "Nike" },
            })
          }
        >
          Nike
        </button>
        <button
          className="btn btn-primary-outline shoedog-chip-btn"
          onClick={() =>
            productDispatch({
              type: ACTIONS.FILTER_BY_BRAND,
              payload: { brand: "Reebok" },
            })
          }
        >
          Reebok
        </button>
        <button
          className="btn btn-primary-outline shoedog-chip-btn"
          onClick={() =>
            productDispatch({
              type: ACTIONS.FILTER_BY_BRAND,
              payload: { brand: "Adidas" },
            })
          }
        >
          Adidas
        </button>
        <button
          className="btn btn-primary-outline shoedog-chip-btn"
          onClick={() =>
            productDispatch({
              type: ACTIONS.FILTER_BY_BRAND,
              payload: { brand: "Puma" },
            })
          }
        >
          Puma
        </button>
      </div>

      <h3 className="heading-3 product-page-title">
        Products ({finalData.length})
      </h3>

      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="products-grid">
          {finalData.length === 0 ? (
            <div>No products available of your preference</div>
          ) : (
            finalData.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export { ProductListing };
