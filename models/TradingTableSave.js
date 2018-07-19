const mongoose = require("mongoose");
const TradingTableSaveSchema = new mongoose.Schema({
    cities: {type: Array, required: true},
    products: {type: Array, required: true},
    prices: {type: Array, required: true}
});

const TradingTableSave = mongoose.model('TradingTableSave', TradingTableSaveSchema, 'saves');

module.exports = TradingTableSave;