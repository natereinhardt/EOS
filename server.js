var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    opsController = require('./server/controllers/opsController');

mongoose.connect('mongodb://localhost:27017/eos');
app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});
app.use('/js', express.static(__dirname + '/client/js'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(3000, function () {
    console.log('Im Listening...');

    app.get('/api/ops', opsController.list);
    app.post('/api/ops', opsController.create);


});