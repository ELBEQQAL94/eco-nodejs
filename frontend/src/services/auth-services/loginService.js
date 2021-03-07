import { axiosInstance } from "../axios";

// API END POINTS
import { LOGIN_USER_URL } from "../api";

export const loginService = (user) => {
    return axiosInstance.post(LOGIN_USER_URL, user);
};