const router = require('express').Router();
const Products = require('../models/Product');


router.route('/').get(async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    // Fetch the product from the database based on the provided ID
    const product = await Products.findOne({ id: productId });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Send the product data as a JSON response
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;