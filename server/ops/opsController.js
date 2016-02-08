var Op = require('./op');

module.exports.create = function (req, res) {
    var op = new Op(req.body);
    op.save(function (err, result) {
        res.json(result);
    });
};
module.exports.list = function (req, res) {
    Op.find({}, function (err, results) {
        res.json(results);
    });
};

