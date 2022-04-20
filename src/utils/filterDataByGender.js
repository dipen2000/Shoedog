import { ACTIONS } from "../Constants/actions";
const filterDataByGender = (data, state) => {
  switch (state.gender) {
    case ACTIONS.MALE_GENDER:
      return [...data].filter((item) => item.gender === "Men");
    case ACTIONS.FEMALE_GENDER:
      return [...data].filter((item) => item.gender === "Women");
    default:
      return [...data];
  }
};

export { filterDataByGender };
