// This is a test program to check your setup.
// Start by running: npm start (run npm install first if needed)
// Follow the instructions on README.md

const express = require('express'); // Import the express module
const app = express(); // Create an instance of the Express application
let { users, items } = require('./data.js'); // Import users and items from data.js

// Handle the Users GET Request
app.get('/users', (req, res) => {
    res.status(200).json({ success: true, users: users });
  });

// Handle the Items GET Request
app.get('/items', (req, res) => {
    res.status(200).json({ success: true, items: items });
  });

// Handle All Other Routes (Wildcard)
app.all(/.*/, (req, res) => {
  res.status(200).json({ success: false, message: "Resource Not Found" });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
