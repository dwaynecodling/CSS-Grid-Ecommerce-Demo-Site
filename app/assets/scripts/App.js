var $ = require('jquery');
var Person = require('./modules/Person');

var dwayne = new Person("Dwayne Codling", "purple");
dwayne.greet();

var kelly = new Person("Kelly Edwards", "onyx");
kelly.greet();

[...document.querySelectorAll('div[data-image]')].forEach((element) => {
    var image=element.dataset.image;
    element.style['backgroundImage'] = `url("${image}")`;
})