//Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $("nav").addClass('scrolled');
    } else {
        $("nav").removeClass('scrolled');
    }
});

// Au clic des liens qui ont la classe scroll, on "anime" (scroll) le body (html corrige un bug sur firefox/IE) jusqu'à l'élément dont l'ID correspond au href du lien cliqué

// Le chiffre (500) correspond à la vitesse en millisecondes de l'animation. Ici, 0.5 secondes.

$(function(){

    $('.scroll').click(function(){

        $('html, body').animate({

            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

});