const TradingTablePreset = require("../models/TradingTablePreset");

class PresetController {
    find(params) {
        if (params) {
            return TradingTablePreset.find(params);
        } else return TradingTablePreset.find();
    }

    create(guest) {
        return TradingTablePreset.create(guest);
    }

    findById(id) {
        return TradingTablePreset.findById(id);
    }

    removeById(id) {
        return TradingTablePreset.findByIdAndRemove(id);
    }

    updateById(id, guest) {
        return TradingTablePreset.findByIdAndUpdate(id, guest, {new: true});
    }
}

module.exports = new PresetController();