
const express = require('express');
const router = express.Router();

// Import the controller functions for handling user-related logic
const userController = require('../controllers/userController');

// Define the route for GET requests to /user
// This route will respond with the list of users
router.get('/', userController.getUsers);

// Define the route for POST requests to /user
// This route will create a new user based on the provided name in the request body
router.post('/newUser', userController.newUser);

// Export the router so it can be used in the main app
module.exports = router;
