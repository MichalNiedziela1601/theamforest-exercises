/**
 * Created by student on 17.11.16.
 */

$(document).ready(function () {

    $(".preloader").fadeOut('slow', function () {
        $(this).remove();
    });

    var change = $('.change');
    change.each(function(){
        var imgSrc = $(this).children().attr('src');
        $(this).children('img').remove();
        $(this).css('background-image', 'url("'+imgSrc+'")');
    });

    $('#owl-main').owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ['<span><img src="assets/img/arrow_left.png" width="50px" height="50px"></span>', '<span><img src="assets/img/arrow_right.png" width="50px" height="50px"></span>']

    });

    $('#owl-work').owlCarousel({
        items: 1,
        margin: 0,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000

    });


    var contMasonry = $('.masonry');
    contMasonry.imagesLoaded(function () {
        contMasonry.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: 0,
                gutter: 0
            }
        })
    });

    $('.filter').on('click', '.categories', function (event) {
        event.preventDefault();
        var filterObject = $(this).data('filter');
        contMasonry.isotope({
            filter: filterObject
        });
        $('.filter').find('a').removeClass('active');
        $(this).closest('a').addClass('active');
    });

    $('#owl-quote').owlCarousel({
        items: 1,
        margin: 0,
        nav: false,
        loop: true,
        autoplay: true,
        autoHeight: true
    });

    var $meters = $('.skillbar-progress');
    var $section = $('#skills');
    function loadDaBars() {
        $meters.each(function () {
            $(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 1500);
        });
    }

    $(document).bind('scroll', function (ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

    $('#openNav').on('click', function () {
        $('#mySidenav').css('display','block');
    });

    $('#closeNav').on('click', function(){
        $('#mySidenav').css('display','none');
    });
});


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};