// SERVICES
import { signupService } from "../../services/auth-services/signupService";
import { loginService } from "../../services/auth-services/loginService";
import { logoutService } from "../../services/auth-services/logoutService";


export function signUpAction(user) {
    return signupService(user);
};

export function loginAction(user) {
    return loginService(user);
};

export function logoutAction(user) {
    return logoutService(user);
};