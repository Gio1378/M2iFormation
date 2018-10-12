/*
 * Inscription.js
 */
var lbMotDePasseAffiche = false;
/**
 *
 * @returns {undefined}
 */
function initInscription() {

//    $.datepicker.setDefaults($.datepicker.regional["fr"]);
//    $("#dateNaissance").datepicker();

    $("#btValider").on("click", function() {
        var lbOK = controler();
        if (lbOK) {
            //insererDansBD(psPseudo, psMDP, psEmail, psQualite) {
            insererDansBD($("#pseudo").val(), $("#mdp").val(), $("#email").val(), "FO");
        } else {
            // NADA
        }
    }
    );
    $("#cles").on("click", afficherMasquerMotDePasse);

    // Remplissage des listes Villes et Hobbies

    remplirListeVilles();
    remplirListeHobbies();

    // En periode de test
    enTest();

} /// initInscription

/**
 *
 * @return {undefined}
 */
function enTest() {
    // En periode de test
    $("#civilite_H").prop("checked", true);
    $("#nom").val("Tintin");
    $("#prenom").val("Reporter");
    $("#email").val("tintin@free.fr");
    $("#email2").val("tintin@free.fr");
    $("#pseudo").val("Tintin");
    $("#mdp").val("mdp123");
    $("#mdp2").val("mdp123");
    $("#cv").val("Reporter à Paris-Match");
    $("#adresse").val("333, rue du fg st Antoine");
    $("#cp").val("75000");
} /// enTest

/**
 *
 * @return {undefined}
 */
function afficherMasquerMotDePasse() {
    if (lbMotDePasseAffiche) {
        $("#mdp").attr("type", "password");
        $("#mdp2").attr("type", "password");
    } else {
        $("#mdp").attr("type", "text");
        $("#mdp2").attr("type", "text");
    }
    lbMotDePasseAffiche = !lbMotDePasseAffiche;
} /// afficherMasquerMotDePasse

/**
 *
 * @return {undefined}
 */
function remplirListeVilles() {

    $("#cp").empty();

    /*
     * STATIQUE
     */
    var tItemsVilles = new Array();
    tItemsVilles["0"] = "- Sélectionnez une ville -";
    tItemsVilles["75000"] = "Paris";
    tItemsVilles["69000"] = "Lyon";
    tItemsVilles["13000"] = "Marseille";
    tItemsVilles["33000"] = "Bordeaux";
    tItemsVilles["59000"] = "Lille";

    for (var cle in tItemsVilles) {
        var option = $("<option>");
        option.val(cle);
        option.html(tItemsVilles[cle]);
        $("#cp").append(option);
    }

    /*
     * FROM JSON FILE
     */
//    $("#cp").empty();
//    var option = $("<option>");
//    option.val("0");
//    option.html("- Sélectionnez une ville -");
//    $("#cp").append(option);
//
//    var jqXHR = $.get(
//            "../ressources/json/villes.json",
//            "json"
//            ); /// $.get
//
//    jqXHR.done(function (data) {
//        console.log(data);
//        //data = JSON.parse(data);
//        for (var i = 0; i < data.length; i++) {
//            var option = $("<option>");
//            option.val(data[i].codePostal);
//            option.html(data[i].ville);
//            $("#cp").append(option);
//        }
//        /*
//         * EN TEST
//         */
//        $("#cp").val("75000");
//    });
//
//    jqXHR.fail(function (xhr, statut, erreur) {
//        console.log("Erreur AJAX : " + xhr.status + "-" + xhr.statusText + " : " + statut);
//        $("#lblMessage").html(xhr.status + "-" + xhr.statusText);
//    });

    /*
     * FROM SQL
     */
    $("#cp").empty();
    var option = $("<option>");
    option.val("0");
    option.html("- Sélectionnez une ville -");
    $("#cp").append(option);

    var jqXHR = $.get(
            "../controls/VillesCTRL.php",
            "json"
            ); /// $.get

    jqXHR.done(function(data) {
        console.log(data);
        // Obligatoire avec PHP
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            var option = $("<option>");
            option.val(data[i].cp);
            option.html(data[i].nomVille);
            $("#cp").append(option);
        }
        /*
         * EN TEST
         */
        $("#cp").val("75011");
    });

    jqXHR.fail(function(xhr, statut, erreur) {
        console.log("Erreur AJAX : " + xhr.status + "-" + xhr.statusText + " : " + statut);
        $("#lblMessage").html(xhr.status + "-" + xhr.statusText);
    });

} /// remplirListeVilles

/**
 *
 * @return {undefined}
 */
function remplirListeHobbies() {
    /*
     * STATIQUE
     */
    var tItemsHobbies = new Array();
    tItemsHobbies["0"] = "- Sélectionnez un ou plusieurs hobbies -";
    tItemsHobbies["1"] = "Cinéma";
    tItemsHobbies["2"] = "Théâtre";
    tItemsHobbies["3"] = "Concert";
    tItemsHobbies["4"] = "Musée";
    tItemsHobbies["5"] = "Conférence";

    for (var cle in tItemsHobbies) {
        var option = $("<option>");
        option.val(cle);
        option.html(tItemsHobbies[cle]);
        $("#hobbies").append(option);
    }

    /*
     * FROM JSON FILE
     */
    $("#hobbies").empty();
    var option = $("<option>");
    option.val("0");
    option.html("- Sélectionnez un ou plusieurs hobbies -");
    $("#hobbies").append(option);

    var jqXHR = $.get(
            "../ressources/json/hobbies.json",
            "json"
            ); /// $.get

    jqXHR.done(function(data) {
        console.log(data);
        //data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            var option = $("<option>");
            option.val(data[i].hobbie);
            option.html(data[i].hobbie);
            $("#hobbies").append(option);
        }
        //$("#lblMessage").html(data.ville + " [" + data.codePostal + "] - Habitants : " + data.habitants);
    });
} /// remplirListeHobbies

/**
 *
 * @returns {undefined}
 */
function controler() {

    var lbOK = false;

    // Nettoyage
    $("#lblMessage").html("");
    $("#lblMessage").css("color", "green");

    $("#nom").css("backgroundColor", "#FFF");
    $("#prenom").css("backgroundColor", "#FFF");
    $("#email").css("backgroundColor", "#FFF");
    $("#email2").css("backgroundColor", "#FFF");
    $("#mdp").css("backgroundColor", "#FFF");
    $("#mdp2").css("backgroundColor", "#FFF");
    $("#cv").css("backgroundColor", "#FFF");
    $("#adresse").css("backgroundColor", "#FFF");

    // Initialisation
    var liKO = 0;
    var lsMessage = "";

    // Recuperation des saisies
    var lsCivilite = "";

    var lsNom = $("#nom").val().trim();
    var lsPrenom = $("#prenom").val().trim();
    var lsEmail = $("#email").val().trim();
    var lsEmail2 = $("#email2").val().trim();
    var lsPseudo = $("#pseudo").val().trim();
    var lsMDP = $("#mdp").val().trim();
    var lsMDP2 = $("#mdp2").val().trim();
    var lsCV = $("#cv").val().trim();
    var lsAdresse = $("#adresse").val().trim();
    var lsCP = $("#cp").val().trim();
    var lsHobbies = $("#hobbies").val();

    var lsNewsLetter;

    // Controle des valeurs saisies
    if (lsNom === "") {
        liKO++;
        $("#nom").css("backgroundColor", "#FF0000");
        lsMessage += "Nom vide !<br>";
    } else {
        lsMessage += lsNom + "<br>";
    }
    if (lsPrenom === "") {
        liKO++;
        $("#prenom").css("backgroundColor", "#FF0000");
        lsMessage += "Pr&eacute;nom vide !<br>";
    } else {
        lsMessage += lsPrenom + "<br>";
    }
    if (lsEmail === "") {
        liKO++;
        $("#email").css("backgroundColor", "#FF0000");
        lsMessage += "E-mail vide !<br>";
    } else {
        lsMessage += lsEmail + "<br>";
    }
    if (lsPseudo === "") {
        liKO++;
        $("#pseudo").css("backgroundColor", "#FF0000");
        lsMessage += "Pseudo vide !<br>";
    } else {
        lsMessage += lsMDP + "<br>";
    }
    if (lsMDP === "") {
        liKO++;
        $("#mdp").css("backgroundColor", "#FF0000");
        lsMessage += "Mot de passe vide !<br>";
    } else {
        lsMessage += lsMDP + "<br>";
    }
    if (lsCV === "") {
        liKO++;
        $("#cv").css("backgroundColor", "#FF0000");
        lsMessage += "CV vide !<br>";
    } else {
        lsMessage += lsCV + "<br>";
    }
    if (lsAdresse === "") {
        liKO++;
        $("#adresse").css("backgroundColor", "#FF0000");
        lsMessage += "Adresse vide !<br>";
    } else {
        lsMessage += lsAdresse + "<br>";
    }
    if (lsCP === "0") {
        liKO++;
        lsMessage += "Ville non s&eacute;lection&eacute;e !<br>";
    } else {
        lsMessage += lsCP + "<br>";
    }
    if (lsHobbies === "0") {
        liKO++;
        lsMessage += "Aucun hobbie sélectionné !<br>";
    } else {
        lsMessage += lsHobbies + "<br>";
    }


    // Cas particuliers
    // Email
    if (lsEmail !== lsEmail2) {
        liKO++;
        $("#email").css("backgroundColor", "#FF0000");
        $("#email2").css("backgroundColor", "#FF0000");
        lsMessage += "Les 2 e-mails sont diff&eacute;rents !<br>";
    }
    // MDP
    if (lsMDP !== lsMDP2) {
        liKO++;
        $("#mdp").css("backgroundColor", "#FF0000");
        $("#mdp2").css("backgroundColor", "#FF0000");
        lsMessage += "Les 2 mots de passe sont diff&eacute;rents !<br>";
    }


    // Newsletter
    // http://api.jquery.com/prop/
//    console.log("newsletter : " + $("#newsletter").prop("checked"));
//    console.log("newsletter : " + $("#newsletter").val());
    if ($("#newsletter").prop("checked")) {
        lsNewsLetter = "1";
        lsMessage += "Vous recevrez la newsletter<br>";
    } else {
        lsNewsLetter = "0";
        lsMessage += "Vous ne recevrez pas la newsletter<br>";
    }
    console.log("lsNewsLetter : " + lsNewsLetter);

    // Civilite
    if (!$("#civilite_H").prop("checked") && !$("#civilite_F").prop("checked")) {
        liKO++;
        lsMessage += "Ni homme, ni femme !!!<br>";
    }

    if ($("#civilite_H").prop("checked")) {
        lsCivilite = "H";
        lsMessage += "Vous êtes un homme";
    }
    if ($("#civilite_F").prop("checked")) {
        lsCivilite = "F";
        lsMessage += "Vous êtes une femme";
    }
    console.log("lsCivilite : " + lsCivilite);

//    console.log("H : " + $("#civilite_H").val());
//    console.log("F : " + $("#civilite_F").val());

    // hobbies
    lsHobbies = "";
    $("select[id='hobbies'] option:selected").each(function() {
        lsHobbies += $(this).val() + '|';
    });
    if (lsHobbies === "0") {
        console.log("Aucun hobbie");
    } else {
        lsHobbies = lsHobbies.substr(0, lsHobbies.length - 1);
        console.log("Hobbie(s) : " + lsHobbies);
        lsMessage += "<br>Hobbies : " + lsHobbies + "<br>";
    }
    //$("#lblMessageMultiple").html(lsSelections);


    // OK/KO
    if (liKO === 0) {
        lbOK = true;
    } else {
        $("#lblMessage").css("color", "red");
        $("#lblMessage").html(lsMessage);
    }

    return lbOK;

} /// controler

/**
 *
 * @param {type} psNom
 * @param {type} psPrenom
 * @param {type} psPseudo
 * @param {type} psEmail
 * @param {type} psMDP
 * @returns {undefined}
 */
function insererDansJSON(psNom, psPrenom, psPseudo, psEmail, psMDP) {
    var jqXHR = $.post(
            "../php/InscriptionJSON.php",
            {nom: psNom, prenom: psPrenom, pseudo: psPseudo, email: psEmail, mdp: psMDP}
    );

    jqXHR.done(function(data) {
        //
        console.log(data);
        data = JSON.parse(data);
        var message = data.message;
        console.log(message);
        $("#lblMessage").html(message);
    });

    jqXHR.fail(function(xhr, statut, erreur) {
        $("#lblMessage").html("Erreur : " + xhr.status + "-" + xhr.statusText);
    });
} /// insererDansJSON

/**
 *
 * @param {type} psPseudo
 * @param {type} psMDP
 * @param {type} psEmail
 * @param {type} psQualite
 * @returns {undefined}
 */
function insererDansBD(psPseudo, psMDP, psEmail, psQualite) {
    // Requete AJAX de type POST
    var jqXHR = $.post(
            "../controls/InscriptionCTRL.php",
            {pseudo: psPseudo, mdp: psMDP, email: psEmail, qualite: psQualite}
    //{civilite: lsCivilite, nom: lsNom, prenom: lsPrenom, cv: lsCV, adresse: lsAdresse, cp: lsCP, email: lsEmail, mdp: lsMDP, hobbies: lsHobbies, newsvarter: lsNewsLetter},
    ); /// $.post
    jqXHR.done(function(data) {
        //
        console.log(data);
        data = JSON.parse(data);
        var message = data.message;
        console.log(message);
        $("#lblMessage").html(message);
    });

    jqXHR.fail(function(xhr, statut, erreur) {
        $("#lblMessage").html("Erreur : " + xhr.status + "-" + xhr.statusText);
    });
} /// insererDansBD


/*
 * MAIN
 */
$(document).ready(initInscription);
