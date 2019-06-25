const express = require('express');
const app = express();

const productRoutes = require('./api/controllers/products');
const orderRoutes = require('./api/controllers/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;