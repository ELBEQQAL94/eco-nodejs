import { axiosInstance } from "../axios";

// API END POINTS
import { SIGNUP_USER_URL } from "../api";

export const signupService = (user) => {
    return axiosInstance.post(SIGNUP_USER_URL, user);
};