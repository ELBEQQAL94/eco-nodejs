// catch errors
const errorHandler = require('./errorHandler');

// error route not found
const notFound = require('./notFound');

// users validator
const {userSignupValidator, userLoginValidator} = require('./userValidator');

// category validator
const { categoryValidator } = require('./categoryValidator');

// check if user authenticated
const { requireLoggedIn, isAuthenticated, isAdmin } = require('./authenticated');

// get user by id
const { getUserById } = require('./user');


module.exports = {
    errorHandler,
    notFound,
    userSignupValidator,
    userLoginValidator,
    requireLoggedIn,
    isAuthenticated,
    isAdmin,
    getUserById,
    categoryValidator,
};