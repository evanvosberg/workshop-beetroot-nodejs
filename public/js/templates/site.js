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
        
        return '\
<html>\
<head>\
<title>Test page</title>\
<link href="styles/main.css" rel="stylesheet"/>\
<script src="js/require.js" data-main="js/main.js"></script>\
</head>\
<body>\
' + (data.body || '') + '\
</body>\
</html>';
    };

}));
