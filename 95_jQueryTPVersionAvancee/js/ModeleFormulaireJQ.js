/* 
 * ModeleFormulaireJQ.js
 */
var btValider;
//var pseudo_contributeur;
//var mdp_contributeur;
//var lblMessage;
//var lienMotDePasseOublie;


function init() {
    initVariablesGlobales();
    initElementsDInterface();
    initEvenements();
} /// init

function initVariablesGlobales() {

} /// initVariablesGlobales

function initElementsDInterface() {
    btValider = $("#btValider");
//    pseudo_contributeur = document.getElementById("pseudo_contributeur");
//    mdp_contributeur = document.getElementById("mdp_contributeur");
//    lblMessage = document.getElementById("lblMessage");
//    lienMotDePasseOublie = document.getElementById("lienMotDePasseOublie");
} /// initElementsDInterface

function initEvenements() {
    btValider.on("click", function () {
        return false;
    });
} /// initEvenements


//    lienMotDePasseOublie.onclick = function() {
//        console.log("lienMotDePasseOublie.onclick");
//        alert("lienMotDePasseOublie.onclick");
//        lienMotDePasseOublie.href = lienMotDePasseOublie.href + pseudo_contributeur.value;
//        console.log(lienMotDePasseOublie.href);
//        return true;
//    };
//}

/*
 * MAIN
 */
$(document).ready(init);
