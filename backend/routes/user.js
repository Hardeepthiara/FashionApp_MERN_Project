const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import your User model

// GET user details by ID
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return relevant user details (modify this based on your User model structure)
    const userDetails = {
      firstName: user.firstName,
      // Add other details you want to include
    };

    res.json(userDetails);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
