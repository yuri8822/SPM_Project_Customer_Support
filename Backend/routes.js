import express from 'express';
import jwt from 'jsonwebtoken';
// Add models here:
import Rating from './models/Rating';
import Feedback from './models/Feedback';

const router = express.Router();

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

export default router;