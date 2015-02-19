// CommonJS

require()

module = {
    exports: {}
};

exports             // exports === module.exports


// AMD (Asynchronous Module Definition)

define(function (require, exports, module) {
    // Here we can write CommonJS

});

// Let RequireJS try to load required module automatically
define(function (require, exports, module) {
    // Here we can write CommonJS
    var otherModule = require('other-module')

});

// Safe way to ensure modules are loaded before execute the callback
define(['require', 'exports', 'module', 'other-module'], function (require, exports, module) {
    // Here we can write CommonJS
    var otherModule = require('other-module')

});


// UMD (Universal Module Definition)
(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        factory(require, exports, module);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    }
}(this, function (require, exports, module) {
    // Here we can write CommonJS

}));

// UMD (Universal Module Definition) Safe mode
(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        factory(require, exports, module);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['require', 'exports', 'module', 'other-module'], factory);
    }
}(this, function (require, exports, module) {
    // Here we can write CommonJS
    var otherModule = require('other-module')

}));


// UMD (Universal Module Definition) Support non module loader environment
(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        factory(require('other-module'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['other-module'], factory);
    } else {
        // No module loader
        factory(root.otherModule);
    }
}(this, function (otherModule) {
    // Here we CAN'T write CommonJS

}));
