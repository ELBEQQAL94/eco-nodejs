import { axiosInstance } from "./axios";

// API END POINTS
import {
  GET_PRODUCTS_URL,
  CREATE_PRODUCT_URL,
  GET_PRODUCT_PHOTO_URL,
} from "./api";

export const getProductsService = (
  sortBy = "_id",
  order = "asc",
  limit = 6,
  page = 1
) => {
  return axiosInstance.get(
    `${GET_PRODUCTS_URL}?sortBy=${sortBy}&order=${order}&limit=${limit}&page=${page}`
  );
};

export const getProductPhotoService = (productId) => {
  return axiosInstance.get(`${GET_PRODUCT_PHOTO_URL}/${productId}`);
};

export const createProductService = (product, userId) => {
  return axiosInstance.post(`${CREATE_PRODUCT_URL}/${userId}`, product);
};
