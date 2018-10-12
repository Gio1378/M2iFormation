/* 
 * General.js
 */

/**
 * 
 * @returns {undefined}
 */
function afficherDateEtHeure() {
    var d = new Date();

    let numJour = d.getDay();
    let quantieme = d.getDate();
    let mois = d.getMonth();
    let annee = d.getFullYear();
    let heure = d.getHours();
    let minutes = d.getMinutes();
    let secondes = d.getSeconds();

    let tJours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    let tMois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

    let dateActuelle = tJours[numJour] + " " + quantieme + " " + tMois[mois] + " " + annee;
    let heureActuelle = heure + " heure(s) " + minutes + " minute(s) et " + secondes + " seconde(s)";

//    let lblFooter = document.getElementById("lblFooter");
//    lblFooter.innerHTML = "A Paris nous sommes le " + dateActuelle + " et il est " + heureActuelle;
    $("#lblFooter").html("A Paris nous sommes le " + dateActuelle + " et il est " + heureActuelle);
} /// afficherDateEtHeure


/*
 * Affichage du Sommaire
 */
function afficherSommaire() {
//    let sommaire = "";
//    sommaire += "<ul>";
//    sommaire += "<li><a href='../html/Accueil.html'>Accueil</a>&nbsp;|&nbsp;</li>";
//    sommaire += "<li><a href='../html/Inscription.html'>Inscription</a>&nbsp;|&nbsp;</li>";
//    sommaire += "<li><a href='../html/Authentification.html'>Authentification</a>&nbsp;|&nbsp;</li>";
//    sommaire += "<li><a href='../html/Catalogue.html'>Catalogue</a>&nbsp;|&nbsp;</li>";
//    sommaire += "<li><a href='../html/Panier.html'>Panier</a>&nbsp;|&nbsp;</li>";
//    sommaire += "<li><a href='../html/Boutiques.html'>Boutiques</a>&nbsp;|&nbsp;</li>";
//    sommaire += "<li><a href='../html/Selections.html'>S&eacute;lections</a>&nbsp;|&nbsp;</li>";
//    sommaire += "</ul>";
//
//    $("#sommaire").html(sommaire);

    let tItems = new Array();
    tItems["Accueil"] = "Accueil.html";
    tItems["Inscription"] = "Inscription.html";
    tItems["Authentification"] = "Authentification.html";
    tItems["Catalogue"] = "Catalogue.html";
    tItems["Panier"] = "Panier.html";
    tItems["Boutiques"] = "Boutiques.html";
    tItems["S&eacute;lections"] = "Selections.html";

    let ul;
    let li;
    let a;
    ul = $("<ul>");
    for (let cle in tItems) {
        li = $("<li>");
        a = $("<a>");
        a.html(cle);
        a.attr("href", tItems[cle]);
        li.append(a);
        ul.append(li);
//        console.log(cle);
    }
    $("#sommaire").append(ul);
} /// afficherSommaire


/*
 * Affichage du contenu de Aside
 */
function afficherAside() {
//    let aside = "";
//    aside += "<ul>";
//    aside += "<li><a href='#'>Google</a></li>";
//    aside += "<li><a href='#'>Yahoo</a></li>";
//    aside += "<li><a href='#'>etc</a></li>";
//    aside += "</ul>";
//    $("#aside").html(aside);
    let tItems = new Array();
    tItems["Google"] = "https://www.google.fr";
    tItems["Yahoo"] = "https://fr.yahoo.com/";
    tItems["etc"] = "https://fr.etc.com/";

    let ul;
    let li;
    let a;
    ul = $("<ul>");
    for (let cle in tItems) {
        li = $("<li>");
        a = $("<a>");
        a.html(cle);
        a.attr("href", tItems[cle]);
        li.append(a);
        ul.append(li);
//        console.log(cle);
    }
    $("#aside").append(ul);
} /// afficherAside

/*
 * MAIN
 */
afficherSommaire();
afficherAside();
window.setInterval(afficherDateEtHeure, 1000);
