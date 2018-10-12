/* 
 * Accueil.js
 */

//var giGauche = 0;
//
//var chrono;
//var delai;

/**
 * 
 * @returns {undefined}
 */
function fermerPopup() {
    $("#surgissante").css("display", "none");
}

/**
 * 
 * @returns {undefined}
 */
function placerAGauche() {
    $("#surgissante").css("left", "-200px");
}

/**
 * 
 * @returns {undefined}
 */
function init() {
    $("#croixSurgissante").on("click", fermerPopup);
    //chrono = window.setInterval(deplacerPub, 10);
    $("#surgissante").animate({left: 300}, 3000, "swing", placerAGauche);

    $("#imgAccueil").fadeIn(5000);

    $("#promotion").animate({top: 30}, 5000);
    $("#dates").animate({top: 130}, 3000);
    $("#slogan").animate({top: 230}, 7500);
}

/*
 * MAIN
 */
$(document).ready(init);
