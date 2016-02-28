// Use `webpack app/app.js app/dist/bundle.js --module-bind 'css=style!css'`
require('./styles/app.css');

document.write(require('./modules/content.js'));
