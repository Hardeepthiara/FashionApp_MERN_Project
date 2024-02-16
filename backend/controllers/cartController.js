const Order = require('../models/Order');
const OrderDetail = require('../models/OrderDetail');

const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity, price } = req.body;

    let order = await Order.findOne({ userId, status: 'open' });

    if (!order) {
      order = new Order({ userId, status: 'open' });
      await order.save();
    }

    let orderDetail = await OrderDetail.findOne({ orderId: order._id, productId });

    if (orderDetail) {
      orderDetail.quantity += quantity;
      orderDetail.price = price; 
      await orderDetail.save();
    } else {
      orderDetail = new OrderDetail({ orderId: order._id, productId, quantity, price });
      await orderDetail.save();
    }

    res.json({ success: true, message: 'Item added to cart successfully' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const processOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    const order = await Order.findOne({ userId, status: 'open' });

    if (!order) {
      return res.status(400).json({ error: 'No open order found' });
    }

    order.status = 'processed';
    await order.save();

    res.json({ success: true, message: 'Order processed successfully' });
  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addToCart, processOrder };
