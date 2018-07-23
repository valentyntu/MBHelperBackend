const Guest = require("../models/TradingTableSave");

class SaveController {
    find() {
        return Guest.find();
    }

    create(guest) {
        return Guest.create(guest);
    }

    findById(id) {
        return Guest.findById(id);
    }

    removeById(id) {
        return Guest.findByIdAndRemove(id);
    }

    updateById(id, guest) {
        return Guest.findByIdAndUpdate(id, guest, {new: true});
    }
}

module.exports = new SaveController();