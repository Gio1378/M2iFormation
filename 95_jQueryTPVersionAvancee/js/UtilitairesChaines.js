/* 
 * UtilitairesChaines.js
 */

/**
 * 
 * @param {type} psChaine
 * @returns {unresolved}
 */
function trim(psChaine) {
    return psChaine.replace(/^(\s*)|(\s*)$/g, "");
} /// trim

/**
 * 
 * @param {type} psChaine
 * @returns {unresolved}
 */
function chaineMoinsLeDernier(psChaine) {
    // substr(debut, longueur)
    return psChaine.substr(0, psChaine.length - 1);
} /// trim






