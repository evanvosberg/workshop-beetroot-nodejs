(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        factory(require, exports, module);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    }
}(this, function (require, exports, module) {

    var superagent = require('superagent'),
        when = require('q');

    // Add promise to superagent
    superagent.Request.prototype.promise = function () {
        var req = this;

        return when
            .promise(function (resolve, reject) {
                req.end(function (res) {
                    if (res.ok) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                });
            })
            .fail(req.abort);
    };

    module.exports = superagent;

}));
