import { ButtonPrimary } from "../../Buttons";
import "./ProductCard.css";
const ProductCard = ({ product, onClick }) => {
  const {
    name,
    brand,
    gender,
    sizes,
    inStock,
    price,
    discount,
    hasFastDelivery,
  } = product;
  return (
    <div onClick={onClick} className="product-card-container curs-point">
      <div className="flex-col">
        <h4>{name}</h4>
        <h3>{brand}</h3>
        <h3>{gender}</h3>
        <div className="flex-row gap-1">
          {sizes.map((size, index) => {
            return <span key={index}>{size}</span>;
          })}
        </div>
        <p>{inStock ? "In stock" : "out of stocks"}</p>
        <p>{price}</p>
        <p>
          {hasFastDelivery
            ? "has fast delivery"
            : "does not have fast delivery"}
        </p>
        <div>
          <ButtonPrimary>Add to wishlist</ButtonPrimary>
        </div>
        <div>
          <ButtonPrimary>Add to cart</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
