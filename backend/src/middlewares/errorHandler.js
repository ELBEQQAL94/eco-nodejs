// handle errors
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    res.status(req.statusCode || 500);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
    });
};

module.exports = errorHandler;