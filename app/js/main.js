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



    $('.slider__bottom-slick').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: document.querySelector('.slider__bottom-right'),
        prevArrow: document.querySelector('.slider__bottom-left')
    });
    $(function () {

        $('.products__select-list').styler();

    });


    $('.product__category-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product__category-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product__category-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    $('.category__tabs-title').on('click', function () {
        $('.category__tabs-item').toggleClass('active');
    });
    $('.product__tabsfilter-title').on('click', function () {
        $('.product__tabsfilter-item').toggleClass('active');
    });
    $('.price__range-title').on('click', function () {
        $('.price__range-box').toggleClass('active');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 325,
        from: 0,
        to: 325,
        grid: false,
        prefix: "$"
    });




    $('.products__filter-grid-col').on('click', function () {
        $('.product__list-item').addClass('list');
        $('.product__grid-item').addClass('grid_list');
        $('.products__filter-grid-col').addClass('active');
        $('.products__filter-grid-row').removeClass('active');
    });
    $('.products__filter-grid-row').on('click', function () {
        $('.product__list-item').removeClass('list');
        $('.product__grid-item').removeClass('grid_list');
        $('.products__filter-grid-row').addClass('active');
        $('.products__filter-grid-col').removeClass('active');
    });








    $(function () {
        var mixer = mixitup('.product__inner')
    });

});