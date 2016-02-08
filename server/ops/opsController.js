var Op = require('./op');

module.exports.create = function (req, res) {

    var opName = req.params.opName;
    var op = new Op();
    op.name = opName;

    op.save(function (err, result) {
        res.json(result);
    });
};
module.exports.list = function (req, res) {
    Op.find({}, function (err, results) {
        res.json(results);
    });
};

