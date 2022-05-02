import { ACTIONS } from "../constants/actions";

const getFilteredDataByGender = (data, state) => {
  switch (state.gender) {
    case ACTIONS.FILTER_BY_MALE_GENDER:
      return data.filter((item) => item.gender === "Men");
    case ACTIONS.FILTER_BY_FEMALE_GENDER:
      return data.filter((item) => item.gender === "Women");
    default:
      return [...data];
  }
};

export { getFilteredDataByGender };
