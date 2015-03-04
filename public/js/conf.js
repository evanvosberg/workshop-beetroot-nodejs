requirejs.config({

    // Dependencies for initial load after config is set
    deps: [],

    // Optional method to call if deps are loaded
    callback: function () {

    },

    // Base url to load modules from
    baseUrl: 'js',

    // Packages in CommonJS style (but AMD modules in there are still required)
    packages: [{
        name: "requirejs",
        main: "require"
    }, {
        name: "superagent",
        main: "superagent"
    }, {
        name: "q",
        main: "q"
    }, {
        name: "page",
        main: "page"
    }]
});
