const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    subscribe: {
        type: Boolean,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);