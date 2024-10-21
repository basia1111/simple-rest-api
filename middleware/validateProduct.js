const Product = require('../models/product');

const validateProduct = (req, res, next) => {
    
    const { name, price, inStock } = req.body;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({ message: "Name is required and must be a string." });
    }
    if (typeof price !== 'number') {
        return res.status(400).json({ message: "Price is required and must be a number." });
    }
    if (typeof inStock !== 'boolean') {
        return res.status(400).json({ message: "InStock is required and must be a boolean." });
    }

    next();
};

module.exports = validateProduct;
