var site = require('../templates/site');
var index = require('../templates/index');

module.exports = function (req, res, next) {
    var data = {
            body: index()
        };
    
    res.send(site(data));
};