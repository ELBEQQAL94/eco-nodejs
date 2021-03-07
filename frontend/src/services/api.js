const API = "http://localhost:4444/api/v1";

// AUTH
export const SIGNUP_USER_URL = `${API}/auth/signup`;
export const LOGIN_USER_URL = `${API}/auth/login`;
export const LOGOUT_USER_URL = `${API}/auth/logout`;

// CATEGORIES
export const CREATE_CATEGORY_URL = `${API}/categories/user`;
export const GET_ALL_CATEGORIES_URL = `${API}/categories/all`;

// PRODUCTS
export const GET_PRODUCTS_URL = `${API}/products`;
export const GET_PRODUCT_PHOTO_URL = `${API}/products/photo`;
export const CREATE_PRODUCT_URL = `${API}/products/user`;
