// Now that you've seen how basic Node.js servers work,
// it's time to use Express.js — a powerful and popular web framework that makes this all much easier!

// Start by running: npm start (run npm install first if needed)

const express = require('express') // Import the express module
const app = express() // Create an instance of the Express application

// Handle the Home Page
app.get('/', (req, res) => { // Handles GET requests to specific paths
  res.status(200).send('Home Page') // Send a simple "Home Page" message with a 200 OK status
})

// Handle the About Page
app.get('/about', (req, res) => {
  res.status(200).send('About Page') // Send a simple "About Page" message with a 200 OK status
})

// Challenge: Create a route for /contact page that sends a simple "Contact Page" message with a 200 OK status
// TODO: Implement route here

// Handle All Other Routes (Wildcard)
app.all(/.*/, (req, res) => {
    res.status(404).send('Resource not Found')
  })

// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})