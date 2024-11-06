const Joke = require("../models/jokes.model")

// * CRUD Features

//? 1. Create a new Joke Feature
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.status(201).json({ 
                success: true,
                message: "New Joke created successfully",
                joke: newlyCreatedJoke
             })
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Failed to create new Joke",
                error: err
            })
        });}

//? 2. Read All Jokes Features
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.status(200).json({ 
                success: true,
                message: "All Jokes retrieved successfully",
                jokes: allDaJokes
             })
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Failed to retrieve all Jokes",
                error: err
            })
        });
}


//? 3. Read One Joke Feature
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.status(200).json({ 
                success: true,
                message: "Single Joke retrieved successfully",
                joke: oneSingleJoke
             })
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Failed to retrieve single Joke",
                error: err
            })
        });}

//? 4. Update Joke Feature
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.status(200).json({ 
                success: true,
                message: "Joke updated successfully",
                joke: updatedJoke
             })
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Failed to update Joke",
                error: err
 
            })
        });}

//? 5. Delete Joke Feature
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ 
                success: true,
                message: "Joke deleted successfully",
                result: result
             })
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Failed to delete an existing Joke",
                error: err
            })
        });}