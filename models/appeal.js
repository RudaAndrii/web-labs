const mongoose = require('mongoose');

const appealSchema = new mongoose.Schema({
    appealTitle: {
        type: String,
        min: 3,
        required: true
    },
    appealBody: {
        type: String,
        min: 50,
        required: true
    },
    appealUsername: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('Appeal', appealSchema);

