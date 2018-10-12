/*
 * ControlesER.js
 */

/**
 *
 * @param {type} asChaine
 * @param {type} aiMin
 * @returns {Boolean}
 */
function min(asChaine, aiMin) {
    return asChaine.trim().length >= aiMin;
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isEmail(psChaine) {
    var motif = "^[0-9a-zA-Z_-]+([.][0-9a-zA-Z_-]+)?@[0-9a-zA-Z._-]{2,}[.][a-zA-Z]{2,5}$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isMDPFort(psChaine) {
    //
    var motif = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isCPFR(psChaine) {
    var motif = "^\\d{5}$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isTelephoneFR(psChaine) {
    // Indicatif (1 : USA, 961 : Liban)
    // Telephone : 0000000000 ou 00-00-00-00-00
    // ou encore (+nnnn)000000000
    var motif = "^0[1-9]\\d{8}|0[1-9]([-]\\d{2}){4}|\\(\\+[0-9]{1,4}\\)[1-9]\\d{8}$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isEntier(psChaine) {
    // ?, *, +
    // ? : 0,1 - * : 0,n - + : 1,n
    var motif = "^[-]?[0-9]+$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isEntierPositif(psChaine) {
    var motif = "^[0-9]+$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isEntierNegatif(psChaine) {
    var motif = "^-[0-9]+$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isDecimal(psChaine) {
    var motif = "^[-]?[0-9]*[.]?[0-9]+$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isDecimalFR(psChaine) {
    var motif = "^[-]?[0-9]*[,]?[0-9]+$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isNomSansAccent(psChaine) {
    var motif = "^[A-Z][A-Za-z '-]+$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isNomAvecAccent(psChaine) {
    var motif = "^[A-Z][A-Za-zàâäéèêëîïôöüûù '-]+$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isNomUnderscorise(psChaine) {
    // ?, *, +
    // ? : 0,1
    // * : 0,n
    // + : 1,n
    // Accepte les chiffres
    // mots valides : ville, id_pays, nom_du_pays, code007_du_produit
    var motif = "^[a-z0-9]+(_?[a-z0-9]+)*$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isConstante(psChaine) {
    // ?, *, +
    // ? : 0,1
    // * : 0,n
    // + : 1,n
    // MMM et n fois _MMM
    // Accepte les chiffres
    // Mots valides : NOM_DU_SERVEUR,
    // Mots invalides : Nom_DU_SERVEUR,
    var motif = "^[A-Z]+(_[A-Z]*)*$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isCamelize(psChaine) {
    // ?, *, +
    // ? : 0,1
    // * : 0,n
    // + : 1,n
    // N'accepte pas les chiffres
    // Mots valides : ville, idPays, nomDuPays, ControlesEr, ControlesExpressionsRationnelles
    // Mots invalides : Controles_Expressions_Rationnelles, ControlesExpressionsRationnelles007, URL_DU_SERVEUR
    var motif = "^[A-Za-z][a-z]+([A-Z][a-z]*)*$";
//    var motif = "^[A-Za-z]";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isDateFR(psChaine) {
    // Date jj/mm/aaaa ou j/m/aaaa ou j/mm/aaaa ou jj/m/aaaa
    //var motif = "^(\\d{2}/\\d{2}/\\d{4})|(\\d/\\d/\\d{4})|(\\d/\\d{2}/\\d{4})|(\\d{2}/\\d/\\d{4})$";
    var motif = "^\\d{1,2}/\\d{1,2}/\\d{4}$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}

/**
 *
 * @param {type} psChaine
 * @returns {Boolean}
 */
function isURL(psChaine) {
    // + : 1,n
    // http://... ou https://... ou file://... ou file:///...
    var motif = "^(http://|https://|file://|file:///).+$";
    var er = new RegExp(motif);
    return er.test(psChaine);
}
