$(function () {

    $('.rate-star').rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true,
    });

    $('.slider__top-inner').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: document.querySelector('.slider__top-right'),
        prevArrow: document.querySelector('.slider__top-left')
    });

    $(function () {
        var mixer = mixitup('.product__inner')
    });

    $('.slider__bottom-slick').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll:3,
         nextArrow: document.querySelector('.slider__bottom-right'),
        prevArrow: document.querySelector('.slider__bottom-left')
    });

});