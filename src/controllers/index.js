// Authenticated User Controller
const { signup, login, logout } = require('./authController');

// Users Controller
const { getUser } = require('./userController');

// Categories Controller
const { createCategory, getCategories, getCategory, updateCategory, deleteCategory } = require('./categoryController');

// Products Controller
const { createProduct, getProducts, getProduct, deleteProduct, updateProduct } = require('./productController');

module.exports = {
    signup,
    login,
    logout,
    getUser,
    createCategory,
    updateCategory,
    getCategories,
    getCategory,
    deleteCategory,
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
};
