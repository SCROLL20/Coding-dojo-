// routes/jokes.routes.js
const express = require('express');
const {
    getAllJokes,
    createJoke,
    updateJoke,
    deleteJoke,
} = require('../controllers/jokes.controller');

const router = express.Router();

router.get('/', getAllJokes); // GET all jokes
router.post('/', createJoke); // Create a new joke
router.put('/:id', updateJoke); // Update a joke by ID
router.delete('/:id', deleteJoke); // Delete a joke by ID

module.exports = router;
