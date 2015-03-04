(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        factory(require, exports, module);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    }
}(this, function (require, exports, module) {

    module.exports = function (data) {
        data || (data = {});
        
        return '<a href="/foo">Foo</a><br/><a href="/bar">Bar</a>';
    };

}));
