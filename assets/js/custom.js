$(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
       $('.sticky_header').addClass('sticky');
    } else {
       $('.sticky_header').removeClass('sticky');
    }
});