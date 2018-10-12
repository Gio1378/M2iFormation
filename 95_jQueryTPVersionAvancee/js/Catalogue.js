/* 
 * Catalogue.js
 */

/**
 * 
 * @return {undefined}
 */
function init() {
    $("#onglets").tabs();

    $("#accordeon").accordion({header: "h5"});

    $("#btImprimer").on("click", imprimer);

    $("#souffletLitterature").empty();
    $("#souffletEssais").empty();

    $("#dvd").empty();
    $("#cd").empty();

    remplirLeCatalogue();

} /// init


/**
 * 
 * @return {undefined}
 */
function remplirLeCatalogue() {

    console.log("remplirCatalogue");

    var jqXHR = $.get(
            "../ressources/json/catalogue.json"
            );

    jqXHR.done(function (data) {
        console.log("done");
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let tr = $("<tr>");

            // Catégorie;
            let categorie = data[i].categorie;
            let chemin = "";
            if (categorie === "livres") {
                chemin = "../images/litterature/";
                let img = $("<img>");
                $(img).attr("src", chemin + data[i].image);
                $(img).attr("height", "100");
                $("#souffletLitterature").append(img);
            }
            if (categorie === "musiques") {
                chemin = "../images/musique/";
                let img = $("<img>");
                $(img).attr("src", chemin + data[i].image);
                $(img).attr("height", "100");
                $("#cd").append(img);
            }
            if (categorie === "films") {
                chemin = "../images/cinema/";
                let img = $("<img>");
                $(img).attr("src", chemin + data[i].image);
                $(img).attr("height", "100");
                $("#dvd").append(img);
            }

            // IMAGE
        }
    });

    jqXHR.fail(function (xhr, statut, erreur) {
// xhr.status : 404
// xhr.statusText : Not Found
// statut : error
// erreur : Not Found par exemple
        $("#lblMessage").html("Erreur : " + xhr.status + "-" + xhr.statusText);
    });

} /// remplirCatalogue

/**
 * 
 * @return {undefined}
 */
function imprimer() {
    console.log("imprimer");

} /// imprimer


/*
 * MAIN
 */
$(document).ready(init);
