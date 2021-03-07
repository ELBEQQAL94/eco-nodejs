exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'name is required.').notEmpty();
    req.check('email', 'Email is require.')
    .notEmpty()
    .isEmail();
    req.check('password', 'Password is require.').notEmpty().isLength({
        min: 6,
        max: 200
    })
    .withMessage('Password must between 6 and 200 charachters.');

    const errors = req.validationErrors();

    if(errors) {
        res.status(400).json(errors);
    } else {
        next();
    };
};

exports.userLoginValidator = (req, res, next) => {
    req.check('email', 'Email is require.')
    .notEmpty()
    .isEmail();
    req.check('password', 'Password is require.').notEmpty().isLength({
        min: 6,
        max: 200
    })
    .withMessage('Password must between 6 and 200 charachters.');

    const errors = req.validationErrors();

    if(errors) {
        return res.status(400).json({
            error: errors[0].msg
        });
    } else {
        next();
    };
};