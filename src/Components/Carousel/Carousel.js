import "./carousel.css";
import "../../styles/buttons.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  return (
    <div className="img-carousel">
      <img
        className="img-resp"
        src="https://i.postimg.cc/DwNskF02/daniel-storek-JM-q-KEd1-GMI-unsplash.jpg"
        border="0"
        alt="daniel-storek-JM-q-KEd1-GMI-unsplash"
      />
      <div className="img-banner-text-container flex-col">
        <h1 className="heading-1">Get your Sneaker game up!</h1>
        <div>
          <button
            className="curs-point btn btn-primary-solid shoetube-btn-main"
            onClick={() => navigate("/product")}
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export { Carousel };
