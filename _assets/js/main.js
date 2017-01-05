//= require jquery

/**
 * Call to action home page
 */
$('.call-action').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.email-action').offset().top
    }, 500, function() {
        $('.email-action input').focus();
    });

    event.preventDefault();
});

/**
 * Call to action ebook
 */
$('.quote a').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.main-left').offset().top
    }, 500, function() {
        $('.main-left input').eq(0).focus();
    });

    event.preventDefault();
});
