$(document).ready(function () {

    $('.call-us-button').click(function () {
        $('.window-callback').fadeIn();
    });
    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-callback .call-us-form')).length) $('.window-callback').fadeOut();
    });

    jQuery(function($){
        $('.user-phone').mask("+38(999) 999-99-99");
    });

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });

    $('.slider-control').click(function() {
        $('.slider').slick('slickNext');
    });



});
