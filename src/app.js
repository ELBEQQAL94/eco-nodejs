const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
const cors = require('cors');
// require('./tasks/createAdminUser');
const { notFound, errorHandler } = require('./middleware');


const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origini: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(helmet());

// routes
app.get('/', (req, res) => {
  const { user } = req;
  res.json({
    message: 'Hello World!',
    user,
  });
});

app.use(notFound);
app.use(errorHandler);


module.exports = app;