const mongoose = require("mongoose");
const TradingTableSaveSchema = new mongoose.Schema({
    cities: {type: Array, required: true},
    products: {type: Array, required: true},
    prices: [{
        key: String,
        buy: Number,
        sell: Number
    }],
    sub: {type: String}
});

const TradingTableSave = mongoose.model('TradingTableSave', TradingTableSaveSchema, 'saves');

module.exports = TradingTableSave;