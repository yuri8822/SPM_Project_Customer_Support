const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
// Add models here:
const Rating = require('./models/Rating');
const Feedback = require('./models/Feedback');


// Add routes here:

// route to add a rating:
router.post('/addrating', async (req, res) => {
    const { value } = req.body;
    const rating = new Rating({
        value
    });
    try {
        const savedRating = await rating.save();
        console.log("Rating saved successfully:", savedRating);
        res.status(201).json(savedRating);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;