const express = require('express');
const router = express.Router();

// Category Validator
const { 
    requireLoggedIn, 
    isAuthenticated, 
    isAdmin, 
    getUserById,
} = require('../middlewares');


// Controllers
const { createProduct, getProducts, getProduct, deleteProduct, updateProduct } = require('../controllers');

router.get('/', getProducts);
router.get('/:productId', getProduct);
router.post('/user/:userId/', [requireLoggedIn, isAuthenticated, isAdmin], createProduct);
router.put('/user/:userId/product/:productId', [requireLoggedIn, isAuthenticated, isAdmin], updateProduct);
router.delete('/user/:userId/product/:productId', [requireLoggedIn, isAuthenticated, isAdmin], deleteProduct);

router.param('userId', getUserById);

module.exports = router;