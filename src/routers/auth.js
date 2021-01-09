const express = require('express');
const router = express.Router();

// Validator SignUp users
const {userSignupValidator, userLoginValidator, requireLoggedIn} = require('../middlewares');

// Controllers
const { signup, login, logout } = require('../controllers');

router.post('/signup', userSignupValidator, signup);
router.post('/login', userLoginValidator, login);
router.get('/logout', logout);

module.exports = router;