import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { Container } from "../Components/Container/Container";
import { Filter } from "../Components/Filter/Filter";
import { ProductListing } from "../Components/ProductListing/ProductListing";
const Product = () => {
  const style = {};
  return (
    <>
      <Navbar />
      <Container>
        <div className="grid-container">
          <Filter />
          <ProductListing />
        </div>
      </Container>
    </>
  );
};

export { Product };
