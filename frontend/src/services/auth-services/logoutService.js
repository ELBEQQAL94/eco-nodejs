import { axiosInstance } from "../axios";

// API END POINTS
import { LOGOUT_USER_URL } from "../api";

export const logoutService = () => {
    return axiosInstance.get(LOGOUT_USER_URL);
};