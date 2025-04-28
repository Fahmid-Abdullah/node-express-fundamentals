// Express Controllers are used to separate the business logic from the route definitions in your app.
// Instead of writing all logic directly inside the route handlers, controllers allow you to modularize 
// and organize your application logic into separate files. This helps in maintaining cleaner and more 
// manageable code, especially as the application grows in complexity. You might have controllers to 
// handle different sections of your app, such as users, products, or authentication, making it easier 
// to manage the behavior for each part of your application independently.

// It essentially further organizes the routes.

// Let's examine the controller directory structure: controllers are grouped by their functionality, 
// making it easier to understand the logic behind each feature. This approach not only cleans up the 
// route files, but also allows for more focused and reusable business logic. 
// By separating the logic from the routes, the code is much more maintainable and scalable.

// Implementing a controller is simple, just define the necessary methods, import them into the route 
// files, and associate them with the appropriate routes to handle the HTTP requests accordingly.

// Challenge: Implement itemController.js, refactor itemRoute.js to use the new controller.
// If you have done it correctly, the GET and POST methods should work as expected.

// Import Express and create an instance of the app.
const express = require('express');
const app = express();

// Import the routers
const user = require('./routes/userRoute');
const item = require('./routes/itemRoute');

// Middleware to parse incoming JSON data in requests.
app.use(express.json());

// Use the 'user' router for all routes starting with '/user'.
// Try them using Postman.
// http://localhost:5000/user
// http://localhost:5000/user/newUser
app.use('/user', user);

// Use the 'item' router for all routes starting with '/item'.
// Try them using Postman.
// http://localhost:5000/item
// http://localhost:5000/item/newItem
app.use('/item', item);

// Handle all other routes (wildcard). If no matching route is found, send a 404 response.
app.all(/.*/, (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
});

// Start the server and listen on port 5000.
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
