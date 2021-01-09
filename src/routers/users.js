const express = require('express');
const router = express.Router();

// Validator SignUp users
const { getUserById, requireLoggedIn, isAuthenticated, isAdmin } = require('../middlewares');

// Controllers
const { getUser } = require('../controllers');

router.get('/:userId', requireLoggedIn, isAuthenticated, getUser);

router.param('userId', getUserById);

module.exports = router;