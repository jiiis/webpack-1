//var contentModule = require('./modules/content.js');
//
//document.write(contentModule);

define(['./modules/content.js'], function(contentModule) {
    document.write(contentModule.content);
});
