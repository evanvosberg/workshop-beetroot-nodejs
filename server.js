var express = require('express');

var page = require('./public/js/templates/page');
var universal = require('./public/js/examples/universal');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
    res.send(page);
});


app.listen(3000);

console.log(universal);
