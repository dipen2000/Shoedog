import "./CategoryCard.css";
const CategoryCard = ({ title, bgImgSrc }) => {
  return (
    <div className="category-card-container curs-point">
      <img
        className="img-resp"
        src={bgImgSrc}
        alt={`${title} collection img`}
      />
      <div className="flex-row collection-name-overlay-container align-center-flex justify-center-flex">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export { CategoryCard };
