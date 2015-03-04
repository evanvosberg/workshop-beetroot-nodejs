(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        factory(require, exports, module);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    }
}(this, function (require, exports, module) {
    var index = require('../templates/index');

    module.exports = function (ctx, next) {
        ctx.siteBody = index();

        next();
    };
}));
