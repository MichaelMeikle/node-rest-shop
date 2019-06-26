const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Controller imports
const productController = require('./api/controllers/products');
const orderController = require('./api/controllers/orders');

//Database
mongoose.connect('mongodb+srv://node-shop:' + process.env.MONGO_ATLAS_PW + '@node-rest-shop-kwdqo.mongodb.net/test?retryWrites=true&w=majority',
{
    useMongoClient: true
});

//Logging
app.use(morgan('dev'));

//CORS Handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Body Parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/products', productController);
app.use('/orders', orderController);

//Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
});

//Error response messasge
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message : error.message,
            statusCode: error.status
        }
    });
});

//Export for server.js
module.exports = app;