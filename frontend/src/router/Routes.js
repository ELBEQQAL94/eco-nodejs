// PAGES
import Home from "../pages/Home";
import LogIn from "../pages/auth/LogIn";
import SignUp from "../pages/auth/SignUp";
import NotFound from "../pages/NotFound";

// LAYOUTES
import MainLayout from "../layout/MainLayout";

// PATHS
import { 
    HOME_ROUTE, 
    NOT_FOUND_ROUTE, 
    LOGIN_ROUTE, 
    SIGNUP_ROUTE 
} from "../constants/appRoutesConstants";

export const APP_ROUTES = [
    {
        path: HOME_ROUTE,
        layout: MainLayout,
        exact: true,
        roles: [],
        component: Home
    },
    {
        path: LOGIN_ROUTE,
        layout: MainLayout,
        exact: true,
        roles: [],
        component: LogIn,
    },
    {
        path: SIGNUP_ROUTE,
        layout: MainLayout,
        exact: true,
        roles: [],
        component: SignUp,
    },
    {
        path: NOT_FOUND_ROUTE,
        layout: MainLayout,
        exact: true,
        roles: [],
        component: NotFound
    },
];