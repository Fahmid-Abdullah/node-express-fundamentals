
// GET: Respond with a simple list of users
// This handler responds to GET requests by sending a static list of users in the response.
const getUsers = (req, res) => {
    // Sending a 200 status code and a JSON response containing the list of users
    res.status(200).json({
        message: 'List of users', // Descriptive message for the response
        users: [
            { id: 1, name: 'John Doe' }, // Example user 1
            { id: 2, name: 'Jane Smith' } // Example user 2
        ]
    });
};

// POST: Accept a name and respond with a personalized greeting
// This handler processes POST requests where a new user is created with the provided name.
const newUser = (req, res) => {
    const { name } = req.body; // Destructuring to get the 'name' from the request body

    // If the name is not provided, return a 400 status with an error message
    if (!name) {
        return res.status(400).json({ success: false, message: 'Name is required' });
    }

    // If the name is provided, respond with a success message and a greeting
    res.status(201).json({
        success: true, // Indicates the operation was successful
        message: `Hello, ${name}! Your user has been created.` // Personalized message
    });
};

// Export the controller methods so they can be used in the route handlers
module.exports = {
    getUsers,
    newUser
}
