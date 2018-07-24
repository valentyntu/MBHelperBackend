const TradingTableSave = require("../models/TradingTableSave");

class SaveController {
    find(params) {
        if (params) {
            return TradingTableSave.find(params);
        } else return TradingTableSave.find();
    }

    create(guest) {
        return TradingTableSave.create(guest);
    }

    findById(id) {
        return TradingTableSave.findById(id);
    }

    removeById(id) {
        return TradingTableSave.findByIdAndRemove(id);
    }

    updateById(id, guest) {
        return TradingTableSave.findByIdAndUpdate(id, guest, {new: true});
    }
}

module.exports = new SaveController();