// PAGES
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Shop from "../pages/Shop";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

// AUTH PAGES
import LogIn from "../pages/auth/LogIn";
import SignUp from "../pages/auth/SignUp";

// ADMIN PAGES
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddCategory from "../pages/admin/category/AddCategory";
import AddProduct from "../pages/admin/product/AddProduct";

// LAYOUTES
import MainLayout from "../layout/MainLayout";

// PATHS
import {
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  DASHBOARD_ROUTE,
  SHOP_ROUTE,
  PROFILE_ROUTE,
  ADMIN_DASHBOARD_ROUTE,
  ADD_CATEGORY_ROUTE,
  ADD_PRODUCT_ROUTE,
} from "../constants/appRoutesConstants";

import { ADMIN } from "../constants/roles";

export const APP_ROUTES = [
  {
    path: HOME_ROUTE,
    layout: MainLayout,
    exact: true,
    roles: null,
    isPrivate: false,
    isAdmin: false,
    component: Home,
  },
  {
    path: SHOP_ROUTE,
    layout: MainLayout,
    exact: true,
    roles: null,
    isPrivate: false,
    isAdmin: false,
    component: Shop,
  },
  {
    path: DASHBOARD_ROUTE,
    layout: MainLayout,
    exact: true,
    roles: null,
    isPrivate: true,
    isAdmin: false,
    component: Dashboard,
  },
  {
    path: PROFILE_ROUTE,
    layout: MainLayout,
    exact: true,
    roles: null,
    isPrivate: true,
    isAdmin: false,
    component: Profile,
  },
  {
    path: LOGIN_ROUTE,
    layout: MainLayout,
    exact: true,
    roles: null,
    isPrivate: false,
    isAdmin: false,
    component: LogIn,
  },
  {
    path: SIGNUP_ROUTE,
    layout: MainLayout,
    exact: true,
    isPrivate: false,
    isAdmin: false,
    roles: null,
    component: SignUp,
  },
  {
    path: ADMIN_DASHBOARD_ROUTE,
    layout: MainLayout,
    exact: true,
    isPrivate: true,
    isAdmin: true,
    roles: ADMIN,
    component: AdminDashboard,
  },
  {
    path: ADD_CATEGORY_ROUTE,
    layout: MainLayout,
    exact: true,
    isPrivate: true,
    isAdmin: true,
    roles: ADMIN,
    component: AddCategory,
  },
  {
    path: ADD_PRODUCT_ROUTE,
    layout: MainLayout,
    exact: true,
    isPrivate: true,
    isAdmin: true,
    roles: ADMIN,
    component: AddProduct,
  },
  {
    path: NOT_FOUND_ROUTE,
    layout: MainLayout,
    exact: true,
    isPrivate: false,
    isAdmin: false,
    roles: null,
    component: NotFound,
  },
];
