// for cards slider 
(function() {

    var slideContainer = $('.slide-container');

    slideContainer.slick();

    $('.clash-card__image img').hide();
    $('.slick-active').find('.clash-card img').fadeIn(200);

    // On before slide change
    slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick-active').find('.clash-card img').fadeOut(1000);
    });

    // On after slide change
    slideContainer.on('afterChange', function(event, slick, currentSlide) {
        $('.slick-active').find('.clash-card img').fadeIn(200);
    });

})();

// for main slider 
let i = 0;

$('.slide').click(function() {
    $('.active').addClass('nonActive').find('span').empty()
    $(this).removeClass('nonActive').addClass('active')
    i = $(this).index()
})

setItner = setInterval(go, 4000);

function go() {
    $('.active').addClass('nonActive').find('span').empty()
    $($('.slide')[i % 6]).removeClass('nonActive').addClass('active')
    i++;
}

// for card slider 2

$(document).ready(function() {
    $("#cards__slider2").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        nav: true,
        navigationText: ["<", ">"],
        pagination: true,
        margin: '10',
        autoPlay: true
    });

    // for testimonial 
    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [990, 2],
        itemsTablet: [768, 1],
        pagination: true,
        navigation: false,
        navigationText: ["<", ">"],
        slideSpeed: 1000,
        autoPlay: true
    });

    // for games reviews 
    $("#client-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [990, 1],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: true,
        navigationText: ["<", ">"],
        slideSpeed: 1000,
        autoPlay: true
    });

});

// circle slider

// for recent slider