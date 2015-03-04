var express = require('express');
var app = express();

app.get('/api/:id', function (req, res, next) {
    try {
        res.json(require('./api/' + req.params.id + '.json'));
    } catch (err) {
        res.status(404).json({});
    }
});


app.use(express.static(__dirname + '/public'));


app.get('/', require('./public/js/server/index'));
app.get('/:page', require('./public/js/server/page'));


app.listen(3000);
