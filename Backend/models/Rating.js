const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    }
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
