
const express = require('express'); // Import the express module
const app = express(); // Create an instance of the Express application
let { users, items } = require('./data.js'); // Import users and items from data.js

app.use(express.json()) // Middleware to parse incoming JSON requests and make the data available in req.body

// PUT: Update an existing resource on the server completely.
// For example, for the following PUT method, you pass an id as a parameter (Recall Params from 4. GET Method) and name as the body.
// It will return the updated list of users with the user at id with the new name you provided.
// Try it out, open postman, set request to PUT, and paste the following URL http://localhost:5000/updateUser/1
// Go to the body tab, choose raw and paste the following and send (without the // of course):
// {
//     "name": "Updated Name",
// }
// If params and body is correct, you will see the list of users with the user at id with the new name you provided.
app.put('/updateUser/:id', (req, res) => {
    const { id }  = req.params; // Destructure id from request body
    const { name } = req.body; // Destructure name from the request body

    if (!id || !name) { // Check if any required field is missing
        return res.status(400).json({ success: false, message: "Invalid params or body passed." });  // Return 400 message (returning makes sure it doesn't go past this point if this message is sent)
    }

    const existingUser = users.find(user => user.id === Number(id)); // Find the first user that matches the id

    if (!existingUser) {
        return res.status(400).json({ success: false, message: "User ID not found in data.js" }); // If no user is found, failure message
    }

    existingUser.name = name; // Update the user's name

    // Return the updated list of users
    return res.status(200).json({
        success: true,
        message: "User edited successfully",
        users: users
    });
});

// Challenge: Create a PUT method to edit an existing item. 
// TODO: Create PUT method here


// Handle All Other Routes (Wildcard)
app.all(/.*/, (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
  });

// Start the server
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
  });
  