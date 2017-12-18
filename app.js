

$(document).ready(function () {
    $('.nav ul li:first').addClass('active');
    $('.selected-content:not(:first)').hide();
    $('.nav ul li a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).show();
        $(content).siblings('.selected-content').hide();
    });
});



//     $('#typography').click(function (e) { //#A_ID is an example. Use the id of your Anchor
//         $('html, body').animate({
//             scrollTop: $('#section-styles-typography').offset().top //#DIV_ID is an example. Use the id of your destination on the page
//         }, 'slow');
// });