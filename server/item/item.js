var mongoose = require('mongoose');

module.exports = mongoose.model('item', {
    name: String,
    type: {
        name: String,
        id: String,
        itemInfo: String
        },
    buyPrice: Number,
    location: {
        name: String,
        id: String
    }
});