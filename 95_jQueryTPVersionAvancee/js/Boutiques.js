/* 
 * Boutiques.js
 * 
 * Ordonnancement strict
 * Geolocalisation
 * Afficher carte
 * Afficher marqueur geolocalisation
 * Requete AJAX pour les boutiques
 * Afficher marqueurs boutiques 
 */

var lblMessage;
var latitude;
var longitude;
var latitudes;
var longitudes;
var carte;

/**
 * 
 * @returns {undefined}
 */
function init() {

    latitudes = new Array();
    longitudes = new Array();

    lblMessage = document.getElementById("lblMessage");

    // --- GEOLOCALISATION HTML5
    if (navigator.geolocation) {
        // --- Demande de la position
        // --- Cette methode prend en parametre
        // --- une fonction de callback qu'elle va appeler
        // --- en lui fournissant le parametre position contenant les coordonnees.
        navigator.geolocation.getCurrentPosition(obtenirLatEtLongFromCapteur, echecGetCurrentPosition, {maximumAge: 6000000, timeout: 10000}); // 10 minutes
    }
    else {
        lblMessage.innerHTML = "Votre navigateur ne gère pas la géolocalisation";
    }
} /// init

// ---------------------------------
function obtenirLatEtLongFromCapteur(position) {
    // Succes de la requete de geolocalisation 
    // --- Latitude
    latitude = position.coords.latitude;
    // --- Longitude
    longitude = position.coords.longitude;

    afficherCarte();

    //getLibrairiesFromXML();
    getLibrairiesFromJSON();

} /// obtenirLatEtLongFromCapteur

// -----------------------------
function echecGetCurrentPosition(erreur) {

    switch (erreur.code) {

        case erreur.TIMEOUT:
            // --- Acquisition d'une nouvelle position.
            navigator.geolocation.getCurrentPosition(obtenirLatEtLongFromCapteur, echec);
            break;

        default:
            lblMessage.innerHTML = "Echec de l'obtention de coordonnées";
            break;
    }
    ;
} /// echec

// -------------------
function afficherCarte() {
    console.log("afficherCarte");
    // --- Affiche une carte a latitude, longitude, zoom (De 1 a 20)
    var coordonnees = new google.maps.LatLng(latitude, longitude);

    // --- Les options
    var options = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        center: coordonnees
    };

    // --- La carte
    carte = new google.maps.Map(document.getElementById("divMap"), options);

    // --- Un marqueur
    var marqueur = new google.maps.Marker({
        map: carte,
        icon: "../images/vous_etes_ici_noir.png", // marqueur special
        position: coordonnees
    });

} /// afficherCarte

/**
 * 
 * @returns {undefined}
 */
function afficherMarqueurs() {
    console.log("afficherMarqueurs");
//    for(var i = 0; i < latitudes.length; i++) {
    // --- On recupere les latitudes et longitudes des tableaux

//    // --- On cree un objet LatLng
//    var coordonnees = new google.maps.LatLng(latitude, longitude);
//    // --- On cree un objet marqueur
//    var marqueur = new google.maps.Marker({
//        map: carte,
//        position: coordonnees,
//        icon: "../images/vous_etes_ici_noir.png" // marqueur special
//                //icon : "../images/marqueur_vert.gif"
//    });
//
//    // --- On se sert d'input type hidden pour recuperer les lat et lng des entreprises
//    var latitudes = document.getElementById("latitudes").value;
//    var longitudes = document.getElementById("longitudes").value;
//
//    var tLatitudes = latitudes.split(";");
//    var tLongitudes = longitudes.split(";");

    // --- On ajoute les marqueurs
    for (var i = 0; i < latitudes.length; i++) {
        console.log("Afficher marqueur : " + i);
        console.log(latitudes[i]);
        console.log(longitudes[i]);
        var coordonnees = new google.maps.LatLng(latitudes[i], longitudes[i]);
        new google.maps.Marker({
            map: carte,
            position: coordonnees
        });
    }
} /// afficherMarqueursXML

/**
 * 
 * @returns {undefined}
 */
function getLibrairiesFromXML() {
    console.log("getLibrairiesFromXML");
    $.ajax
            ({
                type: "GET",
                url: "../ressources/librairies.xml",
                dataType: "xml",
                success: function(donnees)
                {
//                    var lsLibrairies = "";
                    // --- Les elements "ville" du XML en retour
                    $(donnees).find("librairie").each(function()
                    {
                        // --- Valeur de l'attribut
//                        var lsNomLibrairie = $(this).attr("raisonsociale");
                        var latitude = $(this).attr("latitude");
                        var longitude = $(this).attr("longitude");
                        latitudes.push(latitude);
                        longitudes.push(longitude);
//                        lsLibrairies += lsNomLibrairie + " : " + latitude + "/" + longitude + "<br/>";
                    });
//                    $("#lblMessage").html(lsLibrairies);
//                    for (var i = 0; i < latitudes.length; i++) {
//                        console.log(latitudes[i]);
//                        console.log(longitudes[i]);
//                    }

                    afficherMarqueurs();

                },
                error: function(xhr, statut, erreur)
                {
                    $("#lblMessage").html("Erreur : " + statut);
                }
            });
} /// getLibrairiesXML

/**
 * 
 */
function getLibrairiesFromJSON() {
    console.log("getLibrairiesFromJSON");
    // Bogue !!! Trouve 1271 resultats !!!
    /*
     * $.get
     */
    var jqxhr = $.get(
            "../ressources/librairies.json",
            function(data) {
                for (var i = 0; i < data.length; i++) {
                    latitudes.push(data[i].latitude);
                    longitudes.push(data[i].longitude);
                }
                console.log(data.length);
                afficherMarqueurs();
            },
            "json"
            ); /// $.get 
//    jqxhr.done(function(data) {
//         for (var i = 0; i < data.length; i++) {
//            latitudes.push(data[i].latitude);
//            longitudes.push(data[i].longitude);
//        }
//        console.log(data.length);
//        afficherMarqueurs();
//    });

    /*
     * $.ajax
     */
//    var jqxhr = $.ajax({
//        type: "get",
//        url: "../ressources/librairies.json",
//        dataType: "json",
//        success: function(data) {
//            console.log(data);
//            console.log(data.length);
//            for (var i = 0; i < data.length; i++) {
//                latitudes.push(data[i].latitude);
//                longitudes.push(data[i].longitude);
//            }
//            console.log(data.length);
//            afficherMarqueurs();
//        }
//    }); /// $.ajax 

    /*
     SUPER OK
     */
//    var jqxhr = $.getJSON(
//            "../ressources/librairies.json"
//            ); /// $.getJSON 

//    jqxhr.done(function(data) {
//        console.log(data);
//        console.log(data.length);
//        for (var i = 0; i < data.length; i++) {
//            latitudes.push(data[i].latitude);
//            longitudes.push(data[i].longitude);
//        }
//        afficherMarqueurs();
//        //$("#lblMessage").html(data);
//    });
//    jqxhr.fail(function(xhr, statut, erreur) {
//        console.log("Erreur AJAX : " + xhr.status + "-" + xhr.statusText);
//        $("#lblMessage").html(xhr.status + "-" + xhr.statusText);
//    });
//    jqxhr.always(function() {
//        console.log("FIN");
//    });
} /// getLibrairiesJSON


/**
 * 
 * @returns {undefined}
 */
function succesCallback() {

} /// succesCallback


/*
 * 
 */
$(document).ready(init);


