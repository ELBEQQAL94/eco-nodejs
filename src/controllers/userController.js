exports.getUser = (req, res) => {
    res.json({
        user: req.profile,
    });
};