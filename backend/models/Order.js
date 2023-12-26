const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    product_id: { type: String, required: true },
    quantity: { type: Number, required: true },
    discount: { type: Number, default: 0 },
  });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;