// Libs
const jwt = require('jsonwebtoken');

// Models
const User = require('../models/user');

exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) return res.status(400).send(err);
        return res.send(user);
    });
};

exports.login = (req, res) => {
    const {email, password} = req.body;
    User.findOne({ email }, (error, user) => {
        if(error || !user){
            return res.status(400).json({
                error: 'User not found with this email, Please Sign Up.'
            });
        }
        
        // Chack muched password
        const authenticated = user.authenticated(password);

        if(!authenticated) {
            return res.status(401).json({
                error: 'Password is incorrect.'
            });
        };

        // generate Token for user
        const token = jwt.sign({ _id:user._id, role: user.role }, process.env.JWT_SECRET);

        res.cookie('user_token', token, { expire: new Date() + 86400000 });

        const { _id, name, email, role } = user;

        res.json({
            token,
            user: {
                _id,
                name,
                email,
                role,
            },
        });
    });
};

exports.logout = (req, res) => {
    res.clearCookie('user_token');
    res.json({
        message: "User Log Out!"
    });
};