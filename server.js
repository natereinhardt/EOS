var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override');


mongoose.connect('mongodb://localhost:27017/eos');


// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));




app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/', express.static(__dirname + '/client'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname +'/node_modules'));


require('./server/routes')(app);

app.listen(3000);
console.log('Im Listening...');
exports = module.exports = app;

