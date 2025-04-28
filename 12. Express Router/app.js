// Express Routers are a way to organize and modularize route definitions in your app.
// Instead of keeping all route definitions in a single file, routers allow you to 
// group related routes together in separate files. This improves maintainability and scalability, 
// especially as the app grows in complexity. For instance, you might have separate routers 
// for handling routes related to users, products, etc., keeping the application structure clean.

// Let's examine the routes directory structure: routes are grouped by their functionality, 
// making the codebase more organized. This approach helps to clean up the app.js file, 
// making it much more readable and easier to manage.
// Implementing these routes is simple, thanks to this modular structure.

// Challenge: Implement express router for for itemRoute. Then test it out using Postman.

// Import Express and create an instance of the app.
const express = require('express');
const app = express();

// Import the 'user' router from the 'routes' folder (it contains user-related routes).
const user = require('./routes/userRoute');
// TODO: Import 'item' router here.

// Middleware to parse incoming JSON data in requests.
app.use(express.json());

// Use the 'user' router for all routes starting with '/user'.
// Try them using Postman.
// http://localhost:5000/user
// http://localhost:5000/user/newUser
app.use('/user', user);
// TODO: Use the 'item' router for all routes starting with '/item'.


// Handle all other routes (wildcard). If no matching route is found, send a 404 response.
app.all(/.*/, (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
});

// Start the server and listen on port 5000.
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
