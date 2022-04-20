import "./newCollectionContainer.css";
// import { Collection } from "../Collection/Collection";
import { useProduct } from "../../custom-hooks/useProduct";
import { ProductCard } from "../ProductCard/ProductCard";

const NewCollectionContainer = () => {
  const { productState } = useProduct();
  const { products } = productState;
  const displayArr = products.slice(0, 4);

  console.log(displayArr);
  return (
    <div className="new-collection-container">
      <h2 className="heading-2 mb-1">Our top picks</h2>
      <div className="flex-row gap-1 justify-center-flex align-center-flex justify-space-evenly-flex">
        {displayArr.map((product) => {
          return (
            <div className="home-product-card-width">
              <ProductCard product={product} key={product._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { NewCollectionContainer };
