const express = require('express');
const router = express.Router();
const Order = require('../models/Order');


router.post('/add', async (req, res) => {
  try {
    const { productId, quantity, userId } = req.body;

    // Check if the same product for the same user already exists
    const existingOrder = await Order.findOne({ user_id: userId, product_id: productId });

    if (existingOrder) {
      // Product already exists in the cart
      return res.status(200).json({ success: false, message: 'Product is already in the cart' });
    }

    // If not, create a new record
    await Order.create({
      user_id: userId,
      product_id: productId,
      quantity,
      discount: 0, // You can implement discount logic here
    });

    res.status(200).json({ success: true, message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const orders = await Order.find({ user_id: userId });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders with products:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/order/:id/:usrId', async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.params.iusrIdd;

    const orders = await Order.find({  user_id: userId, product_id: productId});
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders with products:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});


router.put('/update-quantity/:id', async (req, res) => {
  const orderId = req.params.id;
  const { quantity } = req.body;

  try {
    const order = await Order.findOne({ _id: orderId });

    if (order) {
      order.quantity = quantity;
      await order.save();
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error updating quantity:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/delete-order/:id', async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findOne({ _id: orderId });

    if (order) {
      await order.deleteOne();
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error deleting order:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
