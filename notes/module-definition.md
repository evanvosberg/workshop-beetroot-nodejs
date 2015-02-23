# Module Definitions

## CommonJS

Free variables in the module context

- `require` method to load modules
- `module` module specific object
- `exports` object to export when required in another module

### How exports works
Note that `module` has a property `exports` which references the `exports` object, internally NodeJS uses the `module.exports`. 

Internally it looks like this:

```js
var module = 
        exports: {}
    };

var exports = module.exports;
```

Why it's important to know this?

#### Example #1

This

```js
exports = function () {
	// Do something awesome
};
```

would still exports 

```
{}
```

#### Example #2

This

```js
module.exports = function () {
	// Do something awesome
};
```

would exports that

```js
function () {
	// Do something awesome
}
```

## AMD (Asynchronous Module Definition)

In browsers environment we need to load the modules form the server and mainly we doing this in an asynchronous way.

### Syntax

```js
define(function (require, exports, module) {
    // Here we can write CommonJS

});
```

### Let RequireJS try to load required module automatically

```
define(function (require, exports, module) {
    // Here we can write CommonJS
    var otherModule = require('other-module')

});
```

### Safe way to ensure modules are loaded before execute the callback

```js
define(['require', 'exports', 'module', 'other-module'], function (require, exports, module) {
    // Here we can write CommonJS
    var otherModule = require('other-module')

});
```


## UMD (Universal Module Definition)

Way to define your module runing in different environments.

### Syntax

```js
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
```

### UMD (Universal Module Definition) Safe mode

```js
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
```


### UMD (Universal Module Definition) Support non module loader environment

```js
(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        factory(require('other-module'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['other-module'], factory);
    } else {
        // No module loader
        root.myModule = factory(root.otherModule);
    }
}(this, function (otherModule) {
    // Here we CAN'T write CommonJS

}));
```
