var express = require('express');
var html = require('./html-doc');
var requirejs = require('requirejs');
var universal = require('./public/universal');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
    res.send(html);
});


app.listen(3000);

console.log(universal);
