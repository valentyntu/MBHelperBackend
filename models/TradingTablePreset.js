const mongoose = require("mongoose");
const TradingTablePresetSchema = new mongoose.Schema({
    name: {type: String},
    cities: {type: Array, required: true},
    products: {type: Array, required: true},
});

const TradingTablePreset = mongoose.model('TradingTablePreset', TradingTablePresetSchema, 'presets');

module.exports = TradingTablePreset;