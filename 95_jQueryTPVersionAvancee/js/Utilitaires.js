/* 
 * Utilitaires.js
 */

/**
 * 
 * OBSOLETE (elle sera deplacee dans UtilitairesChaines.js)
 * 
 * @param {type} psChaine
 * @returns {unresolved}
 */
function trim(psChaine) {
    return psChaine.replace(/^(\s*)|(\s*)$/g, "");
} /// trim

/**
 * 
 * @param {type} psValeur
 * @param {type} psMotif
 * @returns {Boolean}
 */
function isOKViaER(psValeur, psMotif) {
    var lbOK = true;
    var er = new RegExp(psMotif, "g");
    if (!er.test(psValeur)) {
        lbOK = false;
    }

    return lbOK;
} /// isOKViaER

/**
 * 
 * @returns {Boolean}
 */
function isFormNotEmpty()
{
    var lbOK = true;
    var obligatoires = document.getElementsByClassName("obligatoire");
    console.log(obligatoires.length);
    for (var i = 0; i < obligatoires.length; i++) {
        console.log(i);
        var valeur = obligatoires[i].value;
        if (trim(valeur) === "") {
            lbOK = false;
        }
    }
    console.log(lbOK);
    return lbOK;
} /// isFormNotEmpty

/**
 * 
 * Traite les INPUT TYPE TEXT
 * et les SELECT
 * 
 * @param {type} classe
 * @returns {isFormNotEmptyV2.tableauChamps|Array}
 */
function isFormNotEmptyV2(classe)
{
    var tableauChamps = [];
    var obligatoires = document.getElementsByClassName(classe);
    console.log(obligatoires.length);
    for (var i = 0; i < obligatoires.length; i++) {
        console.log(i);
        var valeur = obligatoires[i].value;
        if (valeur.trim() === "") {
            var nom = obligatoires[i].name;
            console.log("nom du champ obligatoire et non rempli : " + nom);
            tableauChamps.push(nom);
        }
    }
    console.log(tableauChamps);
    return tableauChamps;
} /// isFormNotEmptyV2
