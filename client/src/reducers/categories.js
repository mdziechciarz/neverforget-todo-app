import { CATEGORIES, LOGOUT } from "../actions/types";

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES.GET_ALL:
      return [...action.payload];
    case CATEGORIES.CREATE:
      return [...state, action.payload];
    case LOGOUT:
      return [];
    default:
      return state;
  }
};

export default categoriesReducer;
