const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    team: {type: String, required: true},
    position: String,
    injured: Boolean, 
    sponsors: [String]
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;