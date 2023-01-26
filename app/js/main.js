$(function () {

    $(".product-slider__inner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,

    });

    
    $("#example_id").ionRangeSlider({
        min: 0,
        max: 100,
        from: 50
    });

// Start Дописываем и стираем класс List к иконкам + класс active

$('.icon-th-list').on('click', function(){
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
});

$('.icon-th-large').on('click', function(){
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
});

// End Дописываем и стираем класс List к иконкам + класс active




    var mixer = mixitup('.products__inner-box');



});