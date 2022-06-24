import "./CategoryCard.css";

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      className="category-card-container curs-point container-box-shadow-purple"
      onClick={onClick}
    >
      <img
        className="img-resp category-img"
        src={category.categoryImg}
        alt={`${category.categoryName} collection img`}
      />
      <div className="flex-row collection-name-overlay-container align-center-flex justify-center-flex">
        <h2>{category.categoryName}</h2>
      </div>
    </div>
  );
};

export { CategoryCard };
