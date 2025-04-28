
const express = require('express'); // Import the express module
const app = express(); // Create an instance of the Express application
let { users, items } = require('./data.js'); // Import users and items from data.js

app.use(express.json()) // Middleware to parse incoming JSON requests and make the data available in req.body

// POST: Send new data to the server to create a resource.
// For example, for the following POST method, you pass an id, name, and age as the body and it creates a new user in data.js
// Try it out, open postman, set request to POST, and paste the following URL http://localhost:5000/newUser
// Go to the body tab, choose raw and paste the following and send (without the // of course):
// {
//     "id": 6,
//     "name": "New User",
//     "age": 18
// }
// If body is correct, you will see the list of users including the one you just sent.
app.post('/newUser', (req, res) => {
    
    const { id, name, age } = req.body; // Destructure id, name, and age from the request body

    if (!id || !name || !age) { // Check if any required field is missing
        return res.status(400).json({ success: false, message: "Invalid body passed." });  // Return 400 message (returning makes sure it doesn't go past this point if this message is sent)
    } else {
        const newUser = { // Create a new user object from the values extracted from req.body
            id,
            name,
            age
        }

        // Send a 201 Created response back with success message and the list of all users including the newest user
        return res.status(201).json({
            success: true,
            message: "New User Created and saved to data.js!",
            users: [...users, newUser] // Return the new list of users
        });
    }
});

// Challenge: Create a POST method to add a new item.
// TODO: Create POST method here


// Handle All Other Routes (Wildcard)
app.all(/.*/, (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
  });

// Start the server
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
  });
  