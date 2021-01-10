const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');

const { notFound, errorHandler } = require('./middlewares');

// ROUTERS
const { home, authRoutes, userRoutes, categoryRoutes, productRoutes } = require('./routers');

// Init App
const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origini: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(expressValidator());
app.use(cookieParser());
app.use(helmet());

// routers
app.use('/', home);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/profile', userRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/products', productRoutes);


app.use(notFound);
app.use(errorHandler);


module.exports = app;