import "./Product.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { Filter } from "../../Components/Filter/Filter";
const Product = () => {
  return (
    <ShoedogContainer>
      <section className="product-page-grid-container">
        <Filter />
        <div></div>
      </section>
    </ShoedogContainer>
  );
};

export { Product };
