import axios from "axios";
import { isAuthenticated } from "../helpers/isAuthenticated";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${isAuthenticated().token}`;
  return config;
});
