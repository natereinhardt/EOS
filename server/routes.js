var opsCtrl = require('./ops/opsCtrl');
var eveCrest = require('./crest/eveCrest');

module.exports = function(app) {
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.get('/api/ops', opsCtrl.list);
    app.post('/api/ops/:opName', opsCtrl.create);

    app.route('/api/crest/priceData').get(eveCrest.getSearchResults);


    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('index.html', { root: './client' });
    });

};