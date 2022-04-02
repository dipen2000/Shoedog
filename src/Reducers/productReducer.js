import { ACTIONS } from "../Constants/actions";

const initialProduct = {
  products: [],
  brand: "all",
  sortBy: null,
  gender: ACTIONS.ALL_GENDERS,
  sizes: [],
  inStock: false,
  price: "",
  hasFastDelivery: false,
  range: "0",
};

const setSizeArr = (sizesArr, size) => {
  if (sizesArr.includes(size)) {
    return [...sizesArr].filter((item) => item !== size);
  } else {
    return [...sizesArr].concat(size);
  }
};

const productReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DISPLAY_PRODUCTS:
      return { ...state, products: [...action.payload.data] };
    case ACTIONS.HIGH_TO_LOW:
      return { ...state, sortBy: ACTIONS.HIGH_TO_LOW };
    case ACTIONS.LOW_TO_HIGH:
      return { ...state, sortBy: ACTIONS.LOW_TO_HIGH };
    case ACTIONS.ALL_GENDERS:
      return { ...state, gender: ACTIONS.ALL_GENDERS };
    case ACTIONS.MALE_GENDER:
      return { ...state, gender: ACTIONS.MALE_GENDER };
    case ACTIONS.FEMALE_GENDER:
      return { ...state, gender: ACTIONS.FEMALE_GENDER };
    case ACTIONS.FILTER_BY_SIZE:
      return { ...state, sizes: setSizeArr(state.sizes, action.payload.size) };
    case ACTIONS.ONLY_INSTOCK:
      return { ...state, inStock: !state.inStock };
    case ACTIONS.ONLY_FAST_DELIVERY:
      return { ...state, hasFastDelivery: !state.hasFastDelivery };
    case ACTIONS.PRICE_RANGE_SLIDER:
      return { ...state, range: action.payload.value };
    case ACTIONS.FILTER_BY_BRAND:
      return { ...state, brand: action.payload.brand };
    case ACTIONS.CLEAR_FILTER:
      return { ...initialProduct, products: action.payload.data };
    default:
      return { ...state };
  }
};

export { initialProduct, productReducer };
