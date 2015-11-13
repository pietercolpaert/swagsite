$(window).load(function() {
    $(window).scroll(header);
});

var header = function() {   
    if($(document).scrollTop() > 0) {
        $('nav').css({'position': 'fixed', 'background-color': 'white'});
        $('.nav').removeClass('nav').addClass('nav-low');
        $('#left a').html('<img src="themes/appsforghent/assets/images/logo-black.png" alt="Logo Open Belgium 2016" />')
    } else {
        $('nav').css({'position': 'relative', 'background-color': 'transparent'});
        $('.nav-low').removeClass('nav-low').addClass('nav');
        $('#left a').html('<img src="themes/appsforghent/assets/images/logo.png" alt="Logo Open Belgium 2016" />')
    }
}