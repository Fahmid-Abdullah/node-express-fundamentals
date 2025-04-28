// Now that we have gone through the methods, let's talk about middleware
// We have already seen it used earlier when we used:
// app.use(express.json()) to parse incoming JSON requests and make the data available in req.body

// Middleware is software that sits between the server and client to process requests, responses, or data before reaching their final destination.
// Common use cases for middleware include handling authentication, logging, error handling, and modifying request or response data in web applications.

//  req => middleware => res

const express = require('express');
const app = express();

// Middleware Logger - logs each request method and URL
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();  // pass control to the next middleware or route handler
};

// The order of middleware also matters. If you have middleware 1 then middleware 2, middleware 1 will run first followed by middleware 2

// Challenge: Create a middleware that counts the number of incoming requests.
// Hint: Think about where you want to define the counter.
// TODO: Create the middleware here.

// Use the middlewares
app.use(logger); // applies to all routes
// TODO: Use the middleware here

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Handle All Other Routes (Wildcard)
app.all(/.*/, (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
  });

// Start the server
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
  });
  