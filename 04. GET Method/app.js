// Now that we have a basic idea of how express works, we will look at the methods. Starting with the GET method
// Start by running: npm start (run npm install first if needed)

const express = require('express'); // Import the express module
const app = express(); // Create an instance of the Express application
let { users, items } = require('./data.js'); // Import users and items from data.js

// Handle the Home Page
app.get('/', (req, res) => {
  res.status(200).send('<h1>Home Page</h1>'); // Send a simple "Home Page" message with a 200 OK status
});

// Handle the Users Page
// GET: Retrieve data from the server.
app.get('/users', (req, res) => {
    // .json() automatically sets the Content-Type to "application/json" 
    // and sends the JavaScript object as a JSON-formatted response to the client
    res.status(200).json({ success: true, users: users });
  });

// Challenge: Create a route at /items that responds with a JavaScript object containing the items data and sends a 200 OK status.
// TODO: Implement route here


// Params: Dynamic parts of the URL path that you can define using a colon (:)
// For example: /users/:id
// Try the URL http://localhost:5000/users/1
// The 1 is id, you can change it and you will notice it returns the user corresponding to the id
app.get('/users/:id', (req, res) => {
  const { id } = req.params; // extract id from params
  const user = users.find((user) => user.id === Number(id)); // Searches the 'items' array for the first element that matches the condition.
  
  if (user) {
    res.status(200).json({ success: true, user: user });
  } else {
    res.status(404).json({ success: false, message: `No user found with id ${id}` });
  }
});

// Challenge: Create a route for items that takes id as a parameter and returns item corresponding to id
// TODO: Implement route here


// Query: Key-value pairs attached to the URL after a '?' symbol
// For example: /userSearch?name=
// Try: http://localhost:5000/userSearch?name=Bobby
// Bobby is the name, you can change it and you will notice it returns the user corresponding to the name
app.get('/userSearch', (req, res) => {
  const { name } = req.query; // extract name from query
  // .filter() goes through every user in the 'users' array
  // For each user, it checks if the user's name (converted to lowercase) includes the search term (also lowercase)
  // If 'name' is not provided (undefined), 'name?.toLowerCase()' safely becomes '' (empty string), matching all users
  const filteredUsers = users.filter((user) => 
    user.name.toLowerCase().includes(name?.toLowerCase() || '')
  );

  res.status(200).json({ success: true, users: filteredUsers });
});

// Challenge: Create a route for items that takes id as a query and returns item corresponding to price
// TODO: Implement route here


// Handle All Other Routes (Wildcard)
app.all(/.*/, (req, res) => {
  res.status(404).send('<h1>Resource Not Found</h1>');
});

// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
