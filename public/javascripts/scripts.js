$(document).ready(() => {
<<<<<<< HEAD
=======
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
>>>>>>> 03ec67dd4b8bb935050064414a013ec3cfbca021
    $('#splash').hide();
    // $('#loading').hide();
    setTimeout(() => {
        $('#loading').fadeOut();
        $('#splash').fadeIn(1000);
    }, 1000)
})