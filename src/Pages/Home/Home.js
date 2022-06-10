import "./Home.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { CategoryCard, ProductCard } from "../../Components/Cards";
import { ButtonPrimary } from "../../Components/Buttons";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/productContext";
import { useCategory } from "../../context/categoryContext";

const Home = () => {
  const navigate = useNavigate();
  const { productState } = useProduct();
  const { categoriesState, setSelectedCategory } = useCategory();

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
            {categoriesState.length ? (
              categoriesState.map((category) => {
                return (
                  <CategoryCard
                    key={category._id}
                    category={category}
                    onClick={() => {
                      setSelectedCategory(category.categoryName);
                      navigate(`/products/${category.categoryName}`);
                    }}
                  />
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
        <section className="top-picks-container">
          <h2 className="mb-1 mt-1">Our top picks</h2>
          <div className="flex-row justify-space-evenly-flex">
            {productState.input.slice(0, 5).map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </section>
      </ShoedogContainer>
    </>
  );
};

export { Home };
