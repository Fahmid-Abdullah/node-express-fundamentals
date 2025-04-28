const express = require('express'); // Import the express module
const app = express(); // Create an instance of the Express application
let { users, items } = require('./data.js'); // Import users and items from data.js

app.use(express.json()) // Middleware to parse incoming JSON requests and make the data available in req.body

// Handle the Users Page
// DELETE: Remove a resource from the server.
// For example, for the following DELETE method you pass an id as a parameter (Recall Params from 4. GET Method)
// The method returns a list of items with the item at item id removed
// Try it out, open postman, set request to DELETE, and paste the following URL http://localhost:5000/deleteUser/1
// If params is correct, you will see the list of users with the user at id removed.
app.delete("/deleteUser/:id", (req, res) => {
    const { id } = req.params; // Destructure id from request params

    if (!id) { // Return 400 message (returning makes sure it doesn't go past this point if this message is sent)
        return res.status(404).json({ success: false, message: "id params not found" })
    }

    // Filter out the user with the matching id
    const matchedUsers = users.filter(user => user.id !== Number(id));

    // If no users remain, you can return a message indicating that no user was found to delete
    if (matchedUsers.length === users.length) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    // Return the updated list of users
    res.status(200).json({ success: true, users: matchedUsers });
})

// Challenge: Create a DELETE method to delete an existing item. 
// TODO: Create DELETE method here



// Handle All Other Routes (Wildcard)
app.all(/.*/, (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
  });

// Start the server
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
  });
  