// Services
import {
  getProductsService,
  createProductService,
  getProductPhotoService,
} from "../../services/productsServices";

export function getProducts(sortBy, order, limit, page) {
  return getProductsService(sortBy, order, limit, page);
}

export function getProductPhoto(productId) {
  console.log("productId: ", productId);
  return getProductPhotoService(productId);
}

export function createProduct(category, userId) {
  return createProductService(category, userId);
}
