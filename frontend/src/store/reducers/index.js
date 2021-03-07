import { combineReducers } from "redux";

// REDUCERS
import { user } from "./user";
import { categories } from "./categories";
import { products } from "./products";

export const Reducers = combineReducers({
  userState: user,
  categoriesState: categories,
  productsState: products,
});
