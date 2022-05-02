import "./CategoryCard.css";
const CategoryCard = ({ category }) => {
  return (
    <div className="category-card-container curs-point">
      <img
        className="img-resp"
        src={category.categoryImg}
        alt={`${category.categoryName} collection img`}
      />
      <div className="flex-row collection-name-overlay-container align-center-flex justify-center-flex">
        <h3>{category.categoryName}</h3>
      </div>
    </div>
  );
};

export { CategoryCard };
