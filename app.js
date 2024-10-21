require('dotenv').config();
const mongoose = require('mongoose');
const productsRouter = require('./routes/products');
const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Products API');
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
