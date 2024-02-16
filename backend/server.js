// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productsRouter = require('./routes/productRoute');
const userRoutes = require('./routes/user');
const contactRoute = require('./routes/Contact');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order'); // Import the order route



const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/fashionista';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/auth', authRoutes);
app.use('/products', productsRouter);
app.use('/user', userRoutes);
app.use('/api/contact', contactRoute);
app.use('/api/product-details', productsRouter);
app.use('/api/cart', cartRoutes);
app.use('/api/orders-with-products', orderRoutes); // Use the order route


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});