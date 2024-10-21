const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const validateId = require('../middleware/validateId');
const validateProduct = require('../middleware/validateProduct');

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

router.get('/:id', validateId, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

router.post('/', validateProduct, async (req, res) => {
    const { name, price, inStock } = req.body;
    const product = new Product({
        name,
        price,
        inStock
    });

    try {
        await product.save();
        res.status(201).json({ message: "Product saved", product: product });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

router.delete('/:id', validateId, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Deleted product", productID: req.params.id });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

router.put('/:id', validateId, validateProduct, async (req, res) => {
    const { name, price, inStock } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, { name, price, inStock }, { new: true, runValidators: true });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: product });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

module.exports = router;
