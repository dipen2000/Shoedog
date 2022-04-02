import "./productListing.css";
import { useProduct } from "../../custom-hooks/useProduct";
import { ACTIONS } from "../../Constants/actions";
import { getFinalData } from "../../utils/getFinalData";

const ProductListing = () => {
  const { productState, productDispatch } = useProduct();
  const { products } = productState;

  const finalData = getFinalData(productState);
  return (
    <div className="productListing">
      <div className="brand-filter-container flex-row">
        <button
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
      <hr />
      <h3>Random text here...</h3>
      <hr />
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="products-grid">
          {finalData.length === 0 ? (
            <div>No products available of your preference</div>
          ) : (
            finalData.map((product) => {
              return (
                <div key={product._id} className="grid-item">
                  <p>{product.name}</p>
                  <p>{product.brand}</p>
                  <p>{product.gender}</p>
                  <p>
                    sizes :{" "}
                    {product.sizes.map((size) => {
                      return <span>{size}</span>;
                    })}
                  </p>
                  <p>{product.inStock ? "in stock" : "out of stock"}</p>
                  <p>{product.price}</p>
                  <p>{product.discount}</p>
                  <p>
                    {product.hasFastDelivery
                      ? "has fast delivery"
                      : "no fast delivery"}
                  </p>
                  <p>{product.brandLogo}</p>
                  <p>{product.badge}</p>
                  <button>add to wishlist</button>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export { ProductListing };
