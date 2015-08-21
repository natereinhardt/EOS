var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    passport       = require('passport'),
    flash          = require('connect-flash'),
    methodOverride = require('method-override'),
    configDB       = require('./config/database.js'),
    morgan         = require('morgan'),
    session        = require('express-session'),
    cookieParser   = require('cookie-parser');


mongoose.connect(configDB.url);

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));


// required for passport
app.use(session({ secret: 'helloworld' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



app.use(methodOverride('X-HTTP-Method-Override'));

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/views', express.static(__dirname + '/client/views'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname +'/node_modules'));


require('./server/routes')(app, passport);

app.listen(1337);
console.log('Im Listening...');
exports = module.exports = app;

