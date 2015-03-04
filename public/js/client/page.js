(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        factory(require, exports, module);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    }
}(this, function (require, exports, module) {

    var page = require('../templates/page');

    var api = require('../api');
    
    module.exports = function (ctx, next) {
    
        api.get('http://localhost:3000/api/' + ctx.params.page)
            .promise()
            .then(function (response) {
                return response.body
            })
            .then(function (data) {
                ctx.siteBody = page(data);
                
                next();
            })
            .fail(function (err) {
                next();
            });
    
    };

}));
