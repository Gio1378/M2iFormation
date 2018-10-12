/*
 * Panier.js
 */

var isCouvertures;
var isTitres;
var ibPanierVisible;

/**
 * 
 * @return {undefined}
 */
function init() {
    remplirLeCatalogue();

    $("#btVoirLePanier").on("click", voirLePanier);
    $("#btViderLePanier").on("click", viderLePanier);

    $("#divContenuDuPanier").hide();

    isCouvertures = "";
    isTitres = "";
    ibPanierVisible = false;

    var contenuPanier = $.cookie("panier");
    console.log("contenuPanier");
    console.log(contenuPanier);

} /// init

/**
 * 
 * @return {undefined}
 */
function remplirLeCatalogue() {
    $("#tBodyCatalogue").empty();

    console.log("remplirCatalogue");

//    var jqXHR = $.get(
//            "../ressources/json/catalogue.json"
//            );

    var jqXHR = $.get(
            "../controls/CatalogueCTRL.php"
            );

    jqXHR.done(function(data) {
        console.log("done");
        data = JSON.parse(data);//pour que ce soit reconnu comme des objets Json
        console.log(data);
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
            var tr = $("<tr>");

            // Catégorie;
            //var categorie = data[i].categorie;
            var chemin = "../images/";

            // IMAGE
            var td = $("<td>");
            var img = $("<img>");
            $(img).attr("src", chemin + data[i].photo);
            $(img).attr("width", "50");
            //$(element).attr("class", "nomDeClasse")
            $(img).attr("class", "dropAutorise");
            $(img).attr("title", data[i].designation);
            $(img).attr("alt", "Couverture");
            //$(img).addClass = "dropAutorise";
            //img.draggable;
            //img.attr("src", $(donnees.draggable).attr("src"));
            td.append(img);
            tr.append(td);

            // TITRE
            td = $("<td>");
            td.html(data[i].designation);
            tr.append(td);

            $("#tBodyCatalogue").append(tr);
        } /// rof
        dragDrop();
    });

    jqXHR.fail(function(xhr, statut, erreur) {
// xhr.status : 404
// xhr.statusText : Not Found
// statut : error
// erreur : Not Found par exemple
        $("#lblMessage").html("Erreur : " + xhr.status + "-" + xhr.statusText);
    });

} /// remplirLeCatalogue

/**
 * 
 * @return {undefined}
 */
function dragDrop() {
    $(".dropAutorise").draggable
            (
                    {
                        revert: true,
                        zIndex: 1000,
                        opacity: 0.7
                    }
            );

    $("#imgPanier").droppable
            (
                    {
                        accept: ".dropAutorise",
                        tolerance: "intersect",
                        hoverClass: "auDessus",
                        drop: function(evenement, donnees)
                        {
                            console.log(donnees);
                            /*
                             * SOLUTION FACILE MAIS "BRUTALE" avec concatenation
                             */
                            var lsSRC = $(donnees.draggable).attr("src");
                            var lsCouverture = "<img src='" + lsSRC + "' alt='Couverture' width='50' />";
                            isCouvertures += lsCouverture + "&nbsp;&nbsp;&nbsp;";
                            $("#contenuDuPanier").html(isCouvertures);

                            /*
                             * SOLUTION BASIQUE AVEC DOM !!!
                             */

                            // La source de l'image draguée
//                            console.log($(donnees.draggable).attr("src"));
//                            var img = $("<img>");
//                            img.attr("src", $(donnees.draggable).attr("src"));
//                            img.attr("width", 50);
//                            $("#contenuDuPanier").append(img);

                            /*
                             * AUTRE SOLUTION ... muy elegante !
                             */
                            // On clone l'image
//                            var image = $(donnees.draggable[0]);
//                            // LA CLE !!!
//                            image.css("position", "initial");
//                            image.clone(false).appendTo("#contenuDuPanier");

                            /*
                             * Pour un cookie !
                             */
                            var lsTitre = $(donnees.draggable).attr("title");
                            console.log(lsTitre);
                            var contenuPanier = $.cookie("panier");
                            console.log("contenuPanier");
                            console.log(contenuPanier);
                            if (contenuPanier === "" || contenuPanier === null || contenuPanier === undefined) {
                                contenuPanier = lsTitre;
                            } else {
                                contenuPanier += "#" + lsTitre;
                            }
                            //$.cookie("panier", isTitres);
                            var dExpires = new Date();
                            dExpires.setYear(2025);
                            document.cookie = "panier=" + contenuPanier + "; expires=" + dExpires.toGMTString();
                            console.log(contenuPanier);
                        }
                    }
            );
} /// dragDrop

/**
 * 
 * @return {undefined}
 */
function voirLePanier() {
    /*
     * "Déstockage" du cookie
     */

    if (ibPanierVisible) {
        $("#divContenuDuPanier").hide();
        $("#btVoirLePanier").html("Voir<br>la panier");
    } else {
        $("#divContenuDuPanier").show();
        $("#btVoirLePanier").html("Masquer<br>la panier");
        if ($("#contenuDuPanier").html() == "") {
            $("#contenuDuPanier").html("Le panier est vide");
        }
    }
    ibPanierVisible = !ibPanierVisible;

} /// voirLePanier

/**
 * 
 * @return {undefined}
 */
function viderLePanier() {
    $("#contenuDuPanier").html("Le panier est vide");
    isTitres = "";
    isCouvertures = "";
    //$.cookie("panier", "");
    var dExpires = new Date();
    document.cookie = "panier=; expires=" + dExpires.toGMTString();
} /// voirLePanier

/*
 * MAIN
 */
$(document).ready(init);
