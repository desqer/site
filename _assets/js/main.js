//= require jquery

$('.call-action').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.email-action').offset().top
    }, 500, function() {
        $('.email-action input').focus();
    });

    event.preventDefault();
});
