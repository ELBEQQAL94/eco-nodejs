// Services
import {
  createCategoryService,
  getAllCategoriesService,
} from "../../services/categoriesServices";

export const getAllCategories = () => {
  return getAllCategoriesService();
};

export const createCategory = (category, userId) => {
  return createCategoryService(category, userId);
};
