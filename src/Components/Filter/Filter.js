import "./Filter.css";
import {
  RadioInputField,
  CheckboxField,
  RangeSliderField,
} from "../InputFields";
import { ACTIONS } from "../../constants/actions";
import { useProduct } from "../../context/productContext";
const Filter = () => {
  const sizes = ["8", "9", "10", "11", "12"];
  const { productState, productDispatch } = useProduct();

  return (
    <div className="filter-container">
      <div className="filter-fixed-container">
        <div className="flex-col gap-2">
          <div className="flex-row align-center-flex justify-space-between-flex">
            <h2>Filter</h2>
            <span
              className="clear curs-point"
              onClick={() =>
                productDispatch({
                  type: ACTIONS.CLEAR_FILTER,
                  payload: { data: productState.input },
                })
              }
            >
              Clear
            </span>
          </div>
          <div className="flex-col gap-1">
            <div className="filter-option-container flex-col">
              <h3 className="filter-heading">Sort by</h3>
              <div className="flex-col">
                <RadioInputField
                  name="sort-by-price"
                  onChange={() =>
                    productDispatch({ type: ACTIONS.SORT_BY_HIGH_TO_LOW })
                  }
                  checked={
                    productState.sortBy &&
                    productState.sortBy === ACTIONS.SORT_BY_HIGH_TO_LOW
                  }
                >
                  High to low
                </RadioInputField>
                <RadioInputField
                  name="sort-by-price"
                  onChange={() =>
                    productDispatch({ type: ACTIONS.SORT_BY_LOW_TO_HIGH })
                  }
                  checked={
                    productState.sortBy &&
                    productState.sortBy === ACTIONS.SORT_BY_LOW_TO_HIGH
                  }
                >
                  Low to high
                </RadioInputField>
              </div>
            </div>
            <div className="filter-option-container flex-col">
              <h3 className="filter-heading">Filter by gender</h3>
              <div className="flex-col">
                <RadioInputField
                  name="filter-by-gender"
                  onChange={() =>
                    productDispatch({ type: ACTIONS.FILTER_BY_ALL_GENDERS })
                  }
                  checked={
                    productState.gender === ACTIONS.FILTER_BY_ALL_GENDERS
                  }
                >
                  All genders
                </RadioInputField>
                <RadioInputField
                  name="filter-by-gender"
                  onChange={() =>
                    productDispatch({ type: ACTIONS.FILTER_BY_MALE_GENDER })
                  }
                  checked={
                    productState.gender === ACTIONS.FILTER_BY_MALE_GENDER
                  }
                >
                  Male
                </RadioInputField>
                <RadioInputField
                  name="filter-by-gender"
                  onChange={() =>
                    productDispatch({ type: ACTIONS.FILTER_BY_FEMALE_GENDER })
                  }
                  checked={
                    productState.gender === ACTIONS.FILTER_BY_FEMALE_GENDER
                  }
                >
                  Female
                </RadioInputField>
              </div>
            </div>
            <div className="filter-option-container flex-col">
              <h3 className="filter-heading">Size</h3>
              <div className="flex-row gap-1">
                {sizes.map((size, index) => {
                  return (
                    <CheckboxField
                      key={index}
                      name={`filter-by-size-${size}`}
                      onChange={() =>
                        productDispatch({
                          type: ACTIONS.FILTER_BY_SIZE,
                          payload: { size: size },
                        })
                      }
                      checked={productState.sizes.includes(size)}
                    >
                      {size}
                    </CheckboxField>
                  );
                })}
              </div>
            </div>
            <div className="filter-option-container flex-col">
              <h3 className="filter-heading">Filter by stock</h3>
              <div className="flex-col">
                <CheckboxField
                  name="filter-by-stock"
                  onChange={() =>
                    productDispatch({ type: ACTIONS.FILTER_BY_STOCK })
                  }
                  checked={productState.inStock}
                >
                  Only show in stock products
                </CheckboxField>
              </div>
            </div>
            <div className="filter-option-container flex-col">
              <h3 className="filter-heading">Filter by fast delivery</h3>
              <div className="flex-col">
                <CheckboxField
                  name="filter-by-delivery"
                  onChange={() =>
                    productDispatch({ type: ACTIONS.FILTER_BY_DELIVERY })
                  }
                >
                  Only show products with fast delivery
                </CheckboxField>
              </div>
            </div>
            <div className="filter-option-container flex-col">
              <h3 className="filter-heading">Price range</h3>
              <div className="flex-col">
                <RangeSliderField
                  name="price-range-slider"
                  min="0"
                  max="10000"
                  step="2000"
                  value={productState.rangeValue}
                  onChange={(e) =>
                    productDispatch({
                      type: ACTIONS.FILTER_BY_RANGE,
                      payload: { rangeValue: e.target.value },
                    })
                  }
                />
                {productState.rangeValue === "0" ? (
                  <p>All price range</p>
                ) : (
                  <p>
                    The price range of : 0 to{" "}
                    <span>{productState.rangeValue}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Filter };
