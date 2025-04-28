const express = require('express');

// Create a new instance of an Express Router to define and group related routes
const router = express.Router();

// GET: Respond with a simple list of items
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'List of items',
        items: [
            { id: 1, name: 'Laptop' },
            { id: 2, name: 'Phone' }
        ]
    });
});

// POST: Accept an item name and respond with a confirmation message
router.post('/newItem', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, message: 'Item name is required' });
    }

    res.status(201).json({
        success: true,
        message: `Item "${name}" has been added to the inventory.`
    });
});

module.exports = router