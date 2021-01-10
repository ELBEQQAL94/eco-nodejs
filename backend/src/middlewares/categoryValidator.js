exports.categoryValidator = (req, res, next) => {
    req.check('name', 'name is required.').notEmpty();

    const errors = req.validationErrors();

    if(errors) {
        res.status(400).json(errors);
    } else {
        next();
    };
};
