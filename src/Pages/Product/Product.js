import "./Product.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { Filter } from "../../Components/Filter/Filter";
import { ProductListing } from "../../Components/ProductListing/ProductListing";
const Product = () => {
  return (
    <ShoedogContainer>
      <section className="product-page-grid-container">
        <Filter />
        <ProductListing />
      </section>
    </ShoedogContainer>
  );
};

export { Product };
