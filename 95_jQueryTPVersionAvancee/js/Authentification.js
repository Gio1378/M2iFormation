/* 
 * Authentification.js
 * Authentification avec AJAX et PHP
 * Mot de passe visible : text <--> password
 * Mot de passe oublié : envoi d'un mail avec PHP
 * Se souvenir de moi : cookie
 */

/**
 * 
 * @returns {undefined}
 */
function init() {
    console.log("init");
    $("#btValider").on("click", sauthentifier);
    $("#chkMdpVisible").on("click", mdpVisible);
    $("#motDePasseOublie").on("click", mdpOublie);
    $("#chkMdpVisible").prop("checked", false);
    $("#chkSeSouvenir").prop("checked", true);
    lireCookiesPseudoEtMDP();
    // En periode de test
//    $("#pseudo").val("p");
//    $("#mdp").val("b");
} /// init

/**
 * 
 * @return {undefined}
 */
function sauthentifier() {
// Récupération des valeurs saisies
    var lsPseudo = $("#pseudo").val().trim();
    var lsMDP = $("#mdp").val().trim();
    var lbOK = controler(lsPseudo, lsMDP);
    if (lbOK) {
        seSouvenir(lsPseudo, lsMDP);
        getMySQLUser(lsPseudo, lsMDP);
        //getJSONUser(lsPseudo, lsMDP);
    }
} /// sauthentifier

/**
 * 
 * @returns {undefined}
 */
function controler(lsPseudo, lsMDP) {
    var lbOK = false;
    // Nettoyage
    $("#lblMessage").html("");
    // Tests sur les valeurs
    if (lsPseudo === "" || lsMDP === "") {
        $("#lblMessage").html("Vides !!!");
    } else {
        $("#lblMessage").html("OK");
        lbOK = true;
    }

    return lbOK;
} /// controler

/**
 * 
 * @return {undefined}
 */
function seSouvenir(lsPseudo, lsMDP) {
    /*
     * Création cookie avec pseudo et mdp (se souvenir)
     */
    if (navigator.cookieEnabled) {
        console.log("chkSeSouvenir : " + $("#chkSeSouvenir").prop("checked"));
        if ($("#chkSeSouvenir").prop("checked")) {
            var dExpires = new Date();
            dExpires.setYear(2025);
//                document.cookie = "email" + "=" + lsEmail + "; expires=" + dExpires.toGMTString();
//                document.cookie = "mdp" + "=" + lsMDP + "; expires=" + dExpires.toGMTString();
            creerCookie("pseudo", lsPseudo);
            creerCookie("mdp", lsMDP);
            console.log("Un cookie a été créé !!!");
            $("#lblMessage").html("Un cookie a été créé !!!");
        } else {
            $("#lblMessage").html("Pas de cookie créé !!!");
//                var dExpires = new Date();
//                document.cookie = "email=; expires=" + dExpires.toGMTString();
//                document.cookie = "mdp=; expires=" + dExpires.toGMTString();
            creerCookie("email", "");
            creerCookie("mdp", "");
        }
    } else {
        $("#lblMessage").html("Vous avez désactivé les cookies, impossible de me souvenir de vous !!!");
    }
} /// seSouvenir

/**
 * 
 * @param {type} asNomCookie
 * @param {type} asValeur
 * @returns {undefined}
 */
function creerCookie(asNomCookie, asValeur) {
    var dExpires = new Date();
    dExpires.setYear(2025);
    document.cookie = asNomCookie + "=" + asValeur + "; expires=" + dExpires.toGMTString();
} /// creerCookie

/**
 * 
 * @return {undefined}
 */
function lireCookiesPseudoEtMDP() {
// Renvoie une chaîne de caractères
    var cookies = document.cookie;
    var lbOK = false;
    var trouve = 0;
    console.log("Les cookies");
    console.log(cookies);
    // Chaque cookie est séparé par "; "
    var tCookies = cookies.split("; ");
    for (var i = 0; i < tCookies.length; i++) {
        console.log("Un cookie");
        console.log(tCookies[i]);
        // Le nom du cookie et sa valeur sont séparés par =
        var tCookie = tCookies[i].split("=");
        console.log("Nom du cookie");
        console.log(tCookie[0]);
        console.log("Valeur du cookie");
        console.log(tCookie[1]);
        if (tCookie[0] === "pseudo") {
            console.log("Cook pseudo");
            console.log(tCookie[0]);
            console.log("Valeur du Cook pseudo");
            console.log(tCookie[1]);
            $("#pseudo").val(tCookie[1]);
            trouve++;
        }
        if (tCookie[0] === "mdp") {
            console.log("Cook mdp");
            console.log(tCookie[0]);
            console.log("Valeur du Cook mdp");
            console.log(tCookie[1]);
            $("#mdp").val(tCookie[1]);
            trouve++;
        }
//sCookies += tCookie[0] + " -->" + tCookie[1] + "<br>";
    }

    if (trouve === 2) {
        lbOK = true;
    }

    $("#lblMessage").html(lbOK);
} /// lireCookie

/**
 * 
 * @return {undefined}
 */
function mdpVisible() {
    console.log("checked prop " + $("#chkMdpVisible").prop("checked"));
    //console.log("checked attr " + $("#chkMdpVisible").attr("checked"));
    if ($("#chkMdpVisible").prop("checked")) {
        $("#mdp").attr("type", "text");
    } else {
        $("#mdp").attr("type", "password");
    }
} /// mdpVisible

/**
 * 
 * @return {undefined}
 */
function mdpOublie() {
    console.clear();
    console.log("mdpOublie");
    /*
     * TODO ...
     */
} /// mdpOublie

/**
 * 
 * @param {type} lsPseudo
 * @param {type} lsMDP
 * @return {undefined}
 */
function getMySQLUser(lsPseudo, lsMDP) {
// Requete AJAX de type GET vers PHP
    var jqxhr = $.get(
            "../controls/AuthentificationCTRL.php",
            {pseudo: lsPseudo, mdp: lsMDP}
    ); /// $.get 

    jqxhr.done(function(data) {
        console.log(data);
        data = JSON.parse(data);//pour que ce soit un vrai objet Json
        if (data.pseudo != null && data.pseudo != "-1") {
            $("#lblMessage").html("Authentification OK");
        } else {
            if (data.pseudo == "-1") {
                $("#lblMessage").html("Problème serveur, veuillez contacter votre administrateur");
            } else {
                $("#lblMessage").html("Authentification KO");
            }
        }
        //$("#lblMessage").html(data.message);
        console.log("Pseudo : " + data.pseudo);
        console.log("Email : " + data.email);
        document.cookie = "qualite=" + data.qualite;
    });
    jqxhr.fail(function() {
        console.log("Erreur AJAX");
    });
    jqxhr.always(function() {
        console.log("FIN");
    });
} /// getMySQLUser

/**
 * 
 * @param {type} lsPseudo
 * @param {type} lsMDP
 * @return {Array}
 */
function getJSONUser(lsPseudo, lsMDP) {
    var jqXHR = $.get(
            "../ressources/json/utilisateurs.json",
            "json"
            ); /// $.get 

    jqXHR.done(function(data) {
        console.log(data);
        //data = JSON.parse(data);
        var i = 0;
        var lbTrouve = false;
        while (i < data.length && !lbTrouve) {
            var pseudo = data[i].pseudo;
            var mdp = data[i].mdp;
            if (pseudo === lsPseudo && mdp === lsMDP) {
                lbTrouve = true;
            }
            i++;
        }
        if (lbTrouve) {
            $("#lblMessage").html("Authentificatin réussie !");
        } else {
            $("#lblMessage").html("Authentificatin ratée !!!");
        }

        //$("#lblMessage").html(data.ville + " [" + data.codePostal + "] - Habitants : " + data.habitants);
    });
    jqXHR.fail(function(xhr, statut, erreur) {
        console.log("Erreur AJAX : " + xhr.status + "-" + xhr.statusText + " : " + statut);
        $("#lblMessage").html(xhr.status + "-" + xhr.statusText);
    });
} /// getJSONUser


/*
 * MAIN
 */
$(document).ready(init);
