import { axiosInstance } from "./axios";

// API END POINTS
import { CREATE_CATEGORY_URL, GET_ALL_CATEGORIES_URL } from "./api";

export const getAllCategoriesService = () => {
  return axiosInstance.get(GET_ALL_CATEGORIES_URL);
};

export const createCategoryService = (category, userId) => {
  return axiosInstance.post(`${CREATE_CATEGORY_URL}/${userId}`, category);
};
