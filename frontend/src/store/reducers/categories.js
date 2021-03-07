// CONSTANTS
import { GET_ALL_CATEGORIES, CREATE_CATEGORY } from "../types/categories";

const initialState = {
  categories: [],
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.push(action.payload),
      };
    default:
      return state;
  }
};
