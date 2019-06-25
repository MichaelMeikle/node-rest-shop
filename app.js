const express = require('express');
const morgan = require('morgan');
const app = express();

const productRoutes = require('./api/controllers/products');
const orderRoutes = require('./api/controllers/orders');

//Logging
app.use(morgan('dev'));

//Routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message : error.message,
            code: error.status
        }
    });
});

//Export for server.js
module.exports = app;