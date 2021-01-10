const express = require('express');
const router = express.Router();

// Validator SignUp users
const { getUserById, requireLoggedIn, isAuthenticated, isAdmin } = require('../middlewares');

// Controllers
const { getUser, updateUser } = require('../controllers');

router.get('/:userId', requireLoggedIn, isAuthenticated, getUser);
router.put('/:userId', requireLoggedIn, isAuthenticated, updateUser);

router.param('userId', getUserById);

module.exports = router;