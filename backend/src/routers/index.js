const home = require('./home');

// Authenticated Routes
const authRoutes = require('./auth');

// Users Routes
const userRoutes = require('./users');

// Categories Routes
const categoryRoutes = require('./categories');

// Products Routes
const productRoutes = require('./products');

module.exports = {
    home,
    authRoutes,
    userRoutes,
    categoryRoutes,
    productRoutes,
};