// Libs
const jwt = require('jsonwebtoken');

// Models
const User = require('../models/user');

exports.signup = (req, res) => {
    const nawUser = new User(req.body);
    const email = req.body.email;

    //check if email exists
    User.findOne({ email }, (err, user) => {
        if(user) {
            return res.status(400).json({
                message: "Email already exists, try other one!"
            });
        } else {
            nawUser.save((err, user) => {
                if(err) return res.status(400).send(err);
                user.hashed_password = undefined;
                user.salt = undefined;
                return res.send(user);
            });
        }
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

        res.cookie('token', token, { expire: new Date() + 86400000 });

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
    res.clearCookie('token');
    res.json({
        message: "User Log Out!"
    });
};