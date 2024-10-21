# Product API

## Description

This is a simple RESTful API for managing products, built with Express.js and MongoDB. It provides basic CRUD operations.

## Features

- CRUD operations for products
- Input validation
- Error handling

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/product-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd product-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add your MongoDB connection string:

   ```plaintext
   DATABASE_URL=mongodb://localhost:27017/yourdbname
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Get All Products

- **Endpoint**: `GET /products`
- **Response**: List of all products.

### Get a Product by ID

- **Endpoint**: `GET /products/:id`
- **Response**: Details of the specified product.

### Create a New Product

- **Endpoint**: `POST /products`
- **Request Body**:
  ```json
  {
      "name": "Product Name",
      "price": 19.99,
      "inStock": true
  }
  ```
- **Response**: Confirmation message with the created product.

### Update a Product

- **Endpoint**: `PUT /products/:id`
- **Request Body**:
  ```json
  {
      "name": "Updated Product",
      "price": 25.99,
      "inStock": false
  }
  ```
- **Response**: Confirmation message with the updated product.

### Delete a Product

- **Endpoint**: `DELETE /products/:id`
- **Response**: Confirmation message.

