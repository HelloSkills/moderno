$(function () {

    $(".product-slider__inner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,

    });


    
    $("#demo_0").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });
    
    
    $("#example_id").ionRangeSlider();

    var mixer = mixitup('.products__inner-box');



});