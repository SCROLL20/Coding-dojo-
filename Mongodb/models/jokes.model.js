// models/jokes.model.js
const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true,
    },
    punchline: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Joke", JokeSchema);
