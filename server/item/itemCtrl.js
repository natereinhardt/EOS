var Item = require('./item');

module.exports.create = function (req, res) {

    var item = new Item();
    item.name = req.params;

    item.save(function (err, result) {
        res.json(result);
    });
};
module.exports.list = function (req, res) {
    Item.find({}, function (err, results) {
        res.json(results);
    });
};
