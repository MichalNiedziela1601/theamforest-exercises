/**
 * Created by student on 17.11.16.
 */
$(function () {
    $(document).ready(function () {
        $(".site-spinner").fadeOut("slow");
    })
});

$('.carousel').carousel({
    interval: 1000
})

function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}

$(function () {
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('current');
            })
            $(this).addClass('current');

            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('nav a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.main-menu li a').removeClass("current");
                currentLink.addClass("current");
            }
            else{
                currentLink.removeClass("current");
            }
        });
    }
});

