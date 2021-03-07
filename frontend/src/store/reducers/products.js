// CONSTANTS
import { GET_PRODUCTS, CREATE_PRODUCT } from "../types/products";

const initialState = {
  products: [],
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: state.products.push(action.payload),
      };
    default:
      return state;
  }
};
