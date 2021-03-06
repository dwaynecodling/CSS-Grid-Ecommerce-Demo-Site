var $ = require('jquery');
var Person = require('./modules/Person');

var dwayne = new Person("Dwayne", "purple");
dwayne.greet();

var kelly = new Person("Danielle", "onyx");
kelly.greet();

[...document.querySelectorAll('div[data-image]')].forEach((element) => {
    var image=element.dataset.image;
    element.style['backgroundImage'] = `url("${image}")`;
});

//all items
var item = $('.product__filter-item');

item.each(function($i) {
    var $this = $(this);

    $this.on('click', function(e){

        item
            .not($this)
            .removeClass('active');

        var state = $this.hasClass('active');

        if(state) {
            return;
        } else  {
            $this.addClass('active');

            $('.products')
                .attr('class', 'products')
                .addClass('grid-' + $i);
        }

    });
});






