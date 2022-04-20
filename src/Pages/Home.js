import { Navbar } from "../Components/Navbar/Navbar";
import { Container } from "../Components/Container/Container";
import { Carousel } from "../Components/Carousel/Carousel";
import { NewCollectionContainer } from "../Components/NewCollectionContainer/NewCollectionContainer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Carousel />
        <NewCollectionContainer />
      </Container>
    </>
  );
};

export { Home };
