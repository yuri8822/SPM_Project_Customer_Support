const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    // there needs to be a link to the user who gave the rating:
    value: {
        type: Number,
        required: true,
    }
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
