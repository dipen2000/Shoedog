import "./Home.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { CategoryCard, ProductCard } from "../../Components/Cards";
import { ButtonPrimary } from "../../Components/Buttons";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <ShoedogContainer>
        <section className="hero-img-container">
          <img
            className="img-resp"
            src="https://i.postimg.cc/DwNskF02/daniel-storek-JM-q-KEd1-GMI-unsplash.jpg"
            alt="Hero img"
          />
          <div className="flex-col hero-CTA-section">
            <h2 className="heading-2">Get you shoe game up!</h2>
            <div>
              <ButtonPrimary onClick={() => navigate("/product")}>
                Shop now
              </ButtonPrimary>
            </div>
          </div>
        </section>
        <section className="collections-container flex-col">
          <h2 className="mb-1 mt-1">Our collections</h2>
          <div className="flex-row justify-space-evenly-flex">
            <CategoryCard
              title={"Nike"}
              bgImgSrc={"https://i.postimg.cc/JsvPh8Lc/nike-coll.jpg"}
            />
            <CategoryCard
              title={"Adidas"}
              bgImgSrc={"https://i.postimg.cc/qz7LXqBx/adidas-coll.jpg"}
            />
            <CategoryCard
              title={"Puma"}
              bgImgSrc={"https://i.postimg.cc/XG0G2Hf0/puma-coll.jpg"}
            />
            <CategoryCard
              title={"Reebok"}
              bgImgSrc={"https://i.postimg.cc/TyBqTJnk/reebok-coll.jpg"}
            />
          </div>
        </section>
        <section className="top-picks-container">
          <h2 className="mb-1 mt-1">Our top picks</h2>
          <div className="flex-row justify-space-evenly-flex">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </ShoedogContainer>
    </>
  );
};

export { Home };
