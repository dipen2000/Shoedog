import "./filter.css";
import { useProduct } from "../../custom-hooks/useProduct";
import { ACTIONS } from "../../Constants/actions";
import { products } from "../../backend/db/products";
const Filter = () => {
  const { productState, productDispatch } = useProduct();

  const {
    HIGH_TO_LOW,
    LOW_TO_HIGH,
    ALL_GENDERS,
    MALE_GENDER,
    FEMALE_GENDER,
    FILTER_BY_SIZE,
    ONLY_INSTOCK,
    ONLY_FAST_DELIVERY,
    PRICE_RANGE_SLIDER,
    CLEAR_FILTER,
  } = ACTIONS;

  return (
    <div className="filter">
      <h2>Filters</h2>
      <p
        className="curs-point"
        style={{ textDecoration: "underline" }}
        onClick={() =>
          productDispatch({ type: CLEAR_FILTER, payload: { data: products } })
        }
      >
        Clear
      </p>
      <hr />
      <h3>Sort by</h3>
      <hr />
      <label htmlFor="sort-by-price">
        <input
          className="curs-point"
          type="radio"
          name="sort-by-price"
          onChange={() => productDispatch({ type: HIGH_TO_LOW })}
          checked={productState.sortBy && productState.sortBy === HIGH_TO_LOW}
        />
        High to low
      </label>
      <label htmlFor="sort-by-price">
        <input
          className="curs-point"
          type="radio"
          name="sort-by-price"
          onChange={() => productDispatch({ type: LOW_TO_HIGH })}
          checked={productState.sortBy && productState.sortBy === LOW_TO_HIGH}
        />
        Low to high
      </label>
      <hr />
      <h3>Filter by gender</h3>
      <hr />
      <label htmlFor="filter-by-gender">
        <input
          type="radio"
          name="filter-by-gender"
          onChange={() => productDispatch({ type: ALL_GENDERS })}
          checked={productState.gender === ALL_GENDERS}
        />
        All genders
      </label>
      <label htmlFor="filter-by-gender">
        <input
          type="radio"
          name="filter-by-gender"
          onChange={() => productDispatch({ type: MALE_GENDER })}
          checked={productState.gender === MALE_GENDER}
        />
        Male
      </label>
      <label htmlFor="filter-by-gender">
        <input
          type="radio"
          name="filter-by-gender"
          onChange={() => productDispatch({ type: FEMALE_GENDER })}
          checked={productState.gender === FEMALE_GENDER}
        />
        Female
      </label>
      <hr />
      <h3>Size</h3>
      <label htmlFor="filter-by-size-8">
        <input
          className="curs-point"
          type="checkbox"
          name="filter-by-size-8"
          onChange={() =>
            productDispatch({ type: FILTER_BY_SIZE, payload: { size: "8" } })
          }
          checked={productState.sizes.includes("8")}
        />
        8
      </label>
      <label htmlFor="filter-by-size-9">
        <input
          className="curs-point"
          type="checkbox"
          name="filter-by-size-9"
          onChange={() =>
            productDispatch({ type: FILTER_BY_SIZE, payload: { size: "9" } })
          }
          checked={productState.sizes.includes("9")}
        />
        9
      </label>
      <label htmlFor="filter-by-size-10">
        <input
          className="curs-point"
          type="checkbox"
          name="filter-by-size-10"
          onChange={() =>
            productDispatch({ type: FILTER_BY_SIZE, payload: { size: "10" } })
          }
          checked={productState.sizes.includes("10")}
        />
        10
      </label>
      <label htmlFor="filter-by-size-11">
        <input
          className="curs-point"
          type="checkbox"
          name="filter-by-size-11"
          onChange={() =>
            productDispatch({ type: FILTER_BY_SIZE, payload: { size: "11" } })
          }
          checked={productState.sizes.includes("11")}
        />
        11
      </label>
      <label htmlFor="filter-by-size-12">
        <input
          className="curs-point"
          type="checkbox"
          name="filter-by-size-12"
          onChange={() =>
            productDispatch({ type: FILTER_BY_SIZE, payload: { size: "12" } })
          }
          checked={productState.sizes.includes("12")}
        />
        12
      </label>
      <hr />
      <h3>Filter by stock</h3>
      <hr />
      <label htmlFor="filter-by-stock">
        <input
          type="checkbox"
          name="filter-by-stock"
          onChange={() => productDispatch({ type: ONLY_INSTOCK })}
          checked={productState.inStock}
        />
        Only show in stock products
      </label>
      <hr />
      <h3>Filter by fast delivery</h3>
      <hr />
      <label htmlFor="filter-by-delivery">
        <input
          type="checkbox"
          name="filter-by-delivery"
          onChange={() => productDispatch({ type: ONLY_FAST_DELIVERY })}
          checked={productState.hasFastDelivery}
        />
        Only show products with fast delivery
      </label>
      <hr />
      <h3>Price range</h3>
      <label htmlFor="price-range-slider">
        Price range
        <input
          type="range"
          name="price-range-slider"
          min="0"
          max="10000"
          step="2000"
          onChange={(e) =>
            productDispatch({
              type: PRICE_RANGE_SLIDER,
              payload: { value: e.target.value },
            })
          }
        />
      </label>
      <div>
        {productState.range === "0"
          ? "All price Range"
          : `Price Range from 0 to ${productState.range}`}
      </div>
    </div>
  );
};

export { Filter };
