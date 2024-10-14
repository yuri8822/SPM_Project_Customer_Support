import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;