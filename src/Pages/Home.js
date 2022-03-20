import { Navbar } from "../Components/Navbar/Navbar";
import { Container } from "../Components/Container/Container";
import { Carousel } from "../Components/Carousel/Carousel";
import { NewCollectionContainer } from "../Components/NewCollectionContainer/NewCollectionContainer";
import { Footer } from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Carousel />
        <NewCollectionContainer />
      </Container>
      <Footer />
    </>
  );
};

export { Home };
