const express = require('express');

// Create a new instance of an Express Router to define and group related routes
const router = express.Router();

// GET: Respond with a simple list of users
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'List of users',
        users: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' }
        ]
    });
});

// POST: Accept a name and respond with a personalized greeting
router.post('/newUser', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, message: 'Name is required' });
    }

    res.status(201).json({
        success: true,
        message: `Hello, ${name}! Your user has been created.`
    });
});

module.exports = router