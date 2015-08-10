var express = require('express'),
    app     = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});
app.use('/js', express.static(__dirname + '/client/js'));

app.use('/bower_components',express.static(__dirname + '/bower_components'));

app.listen(3000, function(){
    console.log('Im Listening...');

});