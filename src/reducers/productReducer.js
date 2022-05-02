import { ACTIONS } from "../constants/actions";
import { getSizeArr } from "../Utils";
const initialProducts = {
  input: [],
  sortBy: null,
  gender: ACTIONS.FILTER_BY_ALL_GENDERS,
  sizes: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DISPLAY_DATA:
      return { ...state, input: action.payload.data };
    case ACTIONS.SORT_BY_HIGH_TO_LOW:
      return {
        ...state,
        sortBy: ACTIONS.SORT_BY_HIGH_TO_LOW,
      };
    case ACTIONS.SORT_BY_LOW_TO_HIGH:
      return {
        ...state,
        sortBy: ACTIONS.SORT_BY_LOW_TO_HIGH,
      };
    case ACTIONS.FILTER_BY_ALL_GENDERS:
      return { ...state, gender: ACTIONS.FILTER_BY_ALL_GENDERS };
    case ACTIONS.FILTER_BY_MALE_GENDER:
      return { ...state, gender: ACTIONS.FILTER_BY_MALE_GENDER };
    case ACTIONS.FILTER_BY_FEMALE_GENDER:
      return { ...state, gender: ACTIONS.FILTER_BY_FEMALE_GENDER };
    case ACTIONS.FILTER_BY_SIZE:
      return { ...state, sizes: getSizeArr(state.sizes, action.payload.size) };
    default:
      return state;
  }
};

export { initialProducts, productReducer };
