$(document).ready(function() {
    $('.dropdown').mouseenter(function() {
        $(this).find('.dd_menu').addClass('visible');
        $(this).find('> a').addClass('active');
    })

    $('.dropdown').mouseleave(function() {
        $(this).find('.dd_menu').removeClass('visible');
        $(this).find('> a').removeClass('active');
    })

})
