const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    newsTitle: {
        type: String,
        min: 3,
        required: true
    },
    newsBody: {
        type: String,
        min: 50,
        required: true
    }
});

module.exports = mongoose.model('News', newsSchema);