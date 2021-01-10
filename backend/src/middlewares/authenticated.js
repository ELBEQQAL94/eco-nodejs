const expressJwt = require('express-jwt');

exports.requireLoggedIn = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'authenticated',
});

exports.isAuthenticated = (req, res, next) => {
    let user = req.profile && req.authenticated && (req.profile._id == req.authenticated._id);
    if(!user) {
        return res.status(403).json({
            error: "Access denied!"
        });
    };

    next();
};

exports.isAdmin = (req, res, next) => {
    let isAdmin = req.authenticated.role === 1;

    if(!isAdmin) {
        return res.status(403).json({
            error: "Not Admin, Access denied!"
        });
    };

    next();
};