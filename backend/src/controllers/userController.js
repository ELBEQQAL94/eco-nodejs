// Models
const User = require('../models/user');

exports.getUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;

    res.json({
        user: req.profile,
    });
};

exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true}, (error, user) => {
        if(error) {
            return res.status(400).json({
                error: error.message,
            });
        };

        user.hashed_password = undefined;
        user.salt = undefined;

        res.json(user);
    });

};