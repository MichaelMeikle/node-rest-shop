const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Orders were fetched"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Orders were created"
    });
});

router.get('/:orderID', (req, res, next) =>
{
    const id = req.params.orderID;
    if(id === 'special')
    {
        res.status(200).json({
            message: 'You discovered the special order ID',
            id: id
        });
    }
    else
    {
        res.status(200).json({
            message: 'You passed an ID to orders'
        });
    }
});

router.delete('/:orderID', (req, res, next) =>
{
    res.status(200).json({
        message: 'Deleted order!'
    });
});

module.exports = router;