const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Add more fields as needed, such as wind speed, precipitation, etc.
});

const WeatherModel = mongoose.model('Weather', weatherSchema);
module.exports = WeatherModel;
