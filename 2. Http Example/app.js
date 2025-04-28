// When you create a simple server using Node.js’s http module, 
// the server only responds to what you explicitly tell it to.
// For instance, if we set up the server again and, instead of hardcoding HTML as a response, 
// we respond with an existing index.html file, it will serve only the index.html content.
// However, if the HTML references other files (like CSS, JS, images),
// and we don't explicitly handle them, the server will not find them and will throw 404 errors.

// Test it out now by running: npm start (run npm install first if needed)

// To fix this, the server needs to correctly respond to requests for these static files:
// - http://localhost:5000/styles.css
// - http://localhost:5000/script.js
// - http://localhost:5000/image.gif

// You may notice these look like the /about route we handled earlier.
// The solution is very similar: detect the URL and serve the correct file.

// Example: styles.css is already implemented but commented out for reference.
// Uncomment the 'homeStyles' file and '/styles.css' route to activate it.

// Challenge: 
// - Read script.js and image.gif into memory
// - Create routes to serve them.
// If you do it correctly, you’ll have a fully functional styled web app —
// the button should change the background color, and the gif should appear.

// Import necessary modules
const http = require('http') // Import the 'http' module to create a basic web server
const { readFileSync } = require('fs') // Import 'readFileSync' to read files from the filesystem

// Get the files
const homePage = readFileSync('./simple-app/index.html') // Read the index.html file into memory
// const homeStyles = readFileSync('./simple-app/styles.css') // Read the styles.css file into memory
// TODO: Read script.js into memory here
// TODO: Read image.gif into memory here

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url // Get the requested URL path

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' }) // Serve the HTML page
        res.write(homePage)
        res.end()
    } 
    // else if (url === '/styles.css') {
    //     res.writeHead(200, { 'content-type': 'text/css' }) // Serve the CSS file
    //     res.write(homeStyles)
    //     res.end()
    // }

    // TODO: Add script.js route here
    // (Content-Type: text/javascript)
    
    // TODO: Add image.gif route here
    // (Content-Type: image/gif)

    else {
        res.writeHead(404, { 'content-type': 'text/html' }) // Handle unknown routes
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

// Start the server and listen on port 5000
server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
})