
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/team-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Player Schema
const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: [String], default: ['Undecided', 'Undecided', 'Undecided'] }, // Status for 3 games
});

const Player = mongoose.model('Player', playerSchema);

// Routes
app.get('/players', async (req, res) => {
    const players = await Player.find();
    res.json(players);
});

app.post('/players', async (req, res) => {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.json(newPlayer);
});

app.delete('/players/:id', async (req, res) => {
    await Player.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Get a player by ID
app.get('/players/:id', async (req, res) => {
    const player = await Player.findById(req.params.id);
       if (!player) return res.status(404).send('Player not found');
       res.json(player);
   });
   
   // Update a player's status
   app.put('/players/:id', async (req, res) => {
       const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
       if (!player) return res.status(404).send('Player not found');
       res.json(player);
   });