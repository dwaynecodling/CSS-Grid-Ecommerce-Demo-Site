var $ = require('jquery');
var Person = require('./modules/Person');

var dwayne = new Person("Dwayne Codling", "purple");
dwayne.greet();

var kelly = new Person("Kelly Edwards", "onyx");
kelly.greet();


$("h1").remove();