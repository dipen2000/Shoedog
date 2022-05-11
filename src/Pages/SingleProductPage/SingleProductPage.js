import "./SingleProductPage.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/productContext";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { productState } = useProduct();
  console.log(productId);
  const productSelected = productState.input.find(
    (product) => product._id === productId
  );
  console.log(productSelected);
  const { brand, name, price, discount, desc, img } = productSelected;
  return (
    <>
      <ShoedogContainer>
        <div className="single-product-container">
          <div className="single-product-detail-section">
            <div className="flex-row justify-center-flex bord-3-red">
              <div className="single-product-img-container bord-3-green">
                <img className="img-resp" src={img} alt="img" />
              </div>
            </div>
          </div>
          <div className="single-product-detail-section">
            <div className="flex-col">
              <h3>{brand}</h3>
              <h2>{name}</h2>
              <div className="flex-row gap-1">
                <span>Rs. {price - discount}</span>
                <span>
                  <s>Rs. {price}</s>
                </span>
                <span>somes% off</span>
              </div>
              <div>
                <p>desc : {desc}</p>
              </div>
              <div>
                <button>Add to wishlist</button>
              </div>
              <div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </ShoedogContainer>
    </>
  );
};

export { SingleProductPage };
