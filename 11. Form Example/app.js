// Now that we've covered the basics, let's walk through a real-world example.
// First, check out the simple-form component to see how it works.
// It's a basic form that asks for an email and password, then submits the data.
// When the form is submitted, it sends the email and password as the body of a POST request to /login.
// To test this functionality, start the backend using npm start (run npm install first if needed).
// If the submitted email is bob@gmail.com and the password is password, the user will successfully log in.

// Import the CORS middleware to enable Cross-Origin Resource Sharing
// Allows the server to accept requests from different websites (not just its own).
const cors = require('cors');

const express = require('express');
const app = express();

// Enable CORS to allow cross-origin requests
app.use(cors());

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Middleware to parse URL-encoded payloads (from forms, etc.)
app.use(express.urlencoded());

// Custom middleware to log login attempts
const loginLogger = (req, res, next) => {
    // Destructure email from request body
    const { email } = req.body;
    // Get the current timestamp
    const time = new Date().toISOString();
    
    if (email) {
        // Log the email and timestamp of the login attempt
        console.log(`${email} login attempt at ${time}`);
    } else {
        // Handle case where email is missing
        console.log("Something went wrong. Please try again later.");
    }
    
    // Call next middleware/route handler
    next();
}

// Route to handle login requests
app.post("/login", loginLogger, (req, res) => {
    // Destructure email and password from request body
    const { email, password } = req.body;

    // Check if email or password are missing
    if (!email || !password) {
        // Send error response if fields are missing
        return res.status(404).json({ success: false, message: "One or more input fields are not filled out." });
    }

    // Validate credentials (hardcoded for demonstration purposes)
    // WARNING: In real applications, never hardcode credentials. Always use secure storage and hashing!
    if (email === "bob@gmail.com" && password === "password") {
        console.log(`Successful. Welcome ${email}.`);
        // Send success response
        return res.status(200).json({ success: true, message: `User login successful. Welcome ${email}.` });
    } else {
        console.log(`Failed. Incorrect email or password.`);
        // Send error response for incorrect credentials
        res.status(404).json({ success: true, message: "Incorrect email or password. Please try again later." });
    }
})

// Challenge: Open data.js to see a list of user accounts.
// Your task: Create a new POST endpoint that checks if there is an account matching the provided email and password.
// Remember to use the loginLogger middleware in this new route.
// Also, comment out the old POST /login method above before proceeding.
// Use Postman for seamless testing.
// TODO: Implement the new POST /login method here.


// Start the server and listen on port 5000
app.listen(5000, (req, res) => {
    console.log("Listening on PORT 5000...");
})
