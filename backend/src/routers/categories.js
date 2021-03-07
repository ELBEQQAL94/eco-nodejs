const express = require('express');
const router = express.Router();

// Category Validator
const { 
    categoryValidator, 
    requireLoggedIn, 
    isAuthenticated, 
    isAdmin, 
    getUserById 
} = require('../middlewares');


// Controllers
const { createCategory, getAllCategories, getCategories, getCategory, updateCategory, deleteCategory } = require('../controllers');

router.get('/all', getAllCategories);
router.get('/', getCategories);
router.get('/:categoryId', getCategory);
router.post('/user/:userId/', [requireLoggedIn, isAuthenticated, isAdmin, categoryValidator], createCategory);
router.put('/user/:userId/category/:categoryId', [requireLoggedIn, isAuthenticated, isAdmin, categoryValidator], updateCategory);
router.delete('/user/:userId/category/:categoryId', [requireLoggedIn, isAuthenticated, isAdmin], deleteCategory);

router.param('userId', getUserById);

module.exports = router;