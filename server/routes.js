var opsController = require('./controllers/opsController');

module.exports = function(app) {
//path.join(__dirname, 'client');
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.get('/api/ops', opsController.list);
    app.post('/api/ops', opsController.create);


    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('index.html', { root: './client' });
    });

};