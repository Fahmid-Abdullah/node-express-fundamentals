// Welcome to the first lesson
// Start with running npm install to ensure dependencies are up-to-date
// Then run npm start to begin

const http = require('http') // Import the 'http' module to create a basic web server

// A web server handles HTTP requests and serves web content (e.g., HTML, images) to clients.

// Create the server that handles incoming requests
const server = http.createServer((req, res) => {
  const url = req.url // Get the requested URL from the incoming request
  // home page
  if (url === '/') { // Check if the requested URL is the home page ("http://localhost:5000")
    res.writeHead(200, { 'content-type': 'text/html' }) // Send a successful response with status code 200 and set content type to HTML
    res.write('<h1>home page</h1>') // Write the HTML content for the home page
    res.end() // End the response (sending the content to the client)
  }
  // about page
  else if (url === '/about') { // Check if the requested URL is the home page ("http://localhost:5000/about")
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  else {
    // Challenge: If the request URL doesn't exist, send a 404 not found response and write HTML content that indicates page was not found.
    // TODO: Implement res.writeHead
    // TODO: Implement res.write
    // TODO: Implement res.end
  }
})

// Tell the server to listen for incoming requests on port 5000
server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
  })