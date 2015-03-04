var site = require('../templates/site');
var page = require('../templates/page');

var api = require('../api');

module.exports = function (req, res, next) {


    api.get('http://localhost:3000/api/' + req.params.page)
        .promise()
        .then(function (response) {
            return response.body
        })
        .then(function (data) {
            var siteBody = page(data);

            res.send(site({
                body: siteBody
            }));
        })
        .fail(function (err) {
            res.status(404).send();
        });

};
