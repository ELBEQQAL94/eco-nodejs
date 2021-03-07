// Authenticated User Controller
const { signup, login, logout } = require('./authController');

// Users Controller
const { getUser, updateUser } = require('./userController');

// Categories Controller
const { 
    createCategory, 
    getCategories, 
    getCategory, 
    updateCategory, 
    deleteCategory,
    getAllCategories,
} = require('./categoryController');

// Products Controller
const { 
    createProduct, 
    getProducts, 
    getProduct, 
    deleteProduct, 
    updateProduct, 
    relatedProducts,
    searchProduct,
    photoProduct,
} = require('./productController');

module.exports = {
    signup,
    login,
    logout,
    getUser,
    updateUser,
    createCategory,
    updateCategory,
    getCategories,
    getCategory,
    getAllCategories,
    deleteCategory,
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    relatedProducts,
    searchProduct,
    photoProduct,
};
