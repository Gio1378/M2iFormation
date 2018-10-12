/* 
 * UtilitairesDates.js
 */

/**
 * 
 * @param {type} psDate
 * @returns {String}
 */
function dateTimeUS2DateTimeFR(psDate) {
    let lsDate = "";
    let tDateTime = psDate.split(" ");
    let dateUS = tDateTime[0];
    let dateFR = dateUS2DateFR(dateUS);
    lsDate = dateFR + " " + tDateTime[1];
    return lsDate;
} /// dateTimeUS2DateTimeFR

/**
 * 
 * @param {type} psDate
 * @returns {String}
 */
function dateTimeUS2DateUS(psDate) {
    let lsDate = "";
    lsDate = psDate.split(" ")[0];
    return lsDate;
} /// dateTimeUS2DateUS

/**
 * 
 * @param {type} psDate
 * @returns {String}
 */
function dateUS2DateFR(psDate) {
    let lsDate = "";
    let tDateUS = psDate.split("-");
    lsDate = tDateUS[2] + "/" + tDateUS[1] + "/" + tDateUS[0];
    return lsDate;
} /// dateUS2DateFR

/**
 * 
 * @param {type} psDate
 * @returns {String}
 */
function dateTimeFR2DateTimeUS(psDate) {
    let lsDate = "";
    
    let tDateTime = psDate.split(" ");
    let dateFR = tDateTime[0];
    let dateUS = dateFR2DateUS(dateFR);    
    lsDate = dateUS + " " + tDateTime[1];    
    
    return lsDate;
} /// dateTimeFR2DateTimeUS

/**
 * 
 * @param {type} psDate
 * @returns {String}
 */
function dateFR2DateUS(psDate) {
    let lsDate = "";
    let tDateUS = psDate.split("/");
    lsDate = tDateUS[2] + "-" + tDateUS[1] + "-" + tDateUS[0];
    return lsDate;
} /// dateFR2DateUS

/**
 * 
 * @param {type} psDate
 * @returns {String}
 */
function dateFR2DateFREnLettres(psDate) {
    let lsDate = "";

    let tMois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

    let tDateFR = psDate.split("/");

    lsDate = tDateFR[0] + " " + tMois[tDateFR[1] - 1] + " " + tDateFR[2];

    return lsDate;
} /// dateFR2DateFREnLettres

// d = new Date("aaaa/mm/jj")
function dateFR2DateFREnToutesLettres(psDate) {
    let lsDate = "";

    let tJours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    let tMois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

    let d = new Date(dateFR2DateUS(psDate));

    //lsDate = tDateFR[0] + " " + tMois[tDateFR[1] - 1] + " " + tDateFR[2];
    lsDate = tJours[d.getDay()] + " " + d.getDate() + " " + tMois[d.getMonth()] + " " + d.getFullYear();

    return lsDate;
} /// dateFR2DateFREnToutesLettres
