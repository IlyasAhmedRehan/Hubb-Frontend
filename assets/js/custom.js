$(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
       $('.sticky_header').addClass('sticky');
    } else {
       $('.sticky_header').removeClass('sticky');
    }
});