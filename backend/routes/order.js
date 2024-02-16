// Assuming you have a 'Product' model
const Product = require('../models/Product');
const Order = require('../models/Order');

// Express Router
const router = require('express').Router();

router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    // Fetch orders for the user
    const orders = await Order.find({ user_id: userId });
    const products = await Product.find();

    const ordersWithProducts = [];

    orders.forEach(order => {
      // Find the corresponding product by product_id
      const productDetail = products.find(product => product.id.toString() === order.product_id);

      // Create a new object with combined data
      const combinedData = {
        order_id: order._id,
        user_id: order.user_id,
        product_id: order.product_id,
        quantity: order.quantity,
        product_details: productDetail,
      };

      // Add the combined data to the array
      ordersWithProducts.push(combinedData);
    });

    res.status(200).json({ success: true, ordersWithProducts });
  } catch (error) {
    console.error('Error fetching orders with products:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});


module.exports = router;
