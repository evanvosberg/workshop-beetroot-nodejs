define(function (require, exports, module) {
    var app = require('page');
    var $ = require('jquery');
    
    app.start();
    
    function render(ctx) {
        if (ctx.siteBody) {
            $('body').html(ctx.siteBody);
        } else {
            location.href = ctx.path;
        }
    }
  
    app('/', require('./client/index'), render);    
    app('/:page', require('./client/page'), render);

});
