<?php

/*
 * ConnexionTest.php
 */

/**
 * 
 * @param type $psCheminParametresConnexion
 * @return type
 */
function getConnexion($psCheminParametresConnexion) {

    $tProprietes = parse_ini_file($psCheminParametresConnexion);

    $lsProtocole = $tProprietes["protocole"];
    $lsServeur = $tProprietes["serveur"];
    $lsPort = $tProprietes["port"];
    $lsUT = $tProprietes["ut"];
    $lsMDP = $tProprietes["mdp"];
    $lsBD = $tProprietes["bd"];

    /*
     * Connexion
     */
    $lcnx = null;
    try {
        $lcnx = new PDO("$lsProtocole:host=$lsServeur;port=$lsPort;dbname=$lsBD;", $lsUT, $lsMDP);
        $lcnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $lcnx->setAttribute(PDO::ATTR_AUTOCOMMIT, FALSE);
        $lcnx->exec("SET NAMES 'UTF8'");
    } catch (Exception $ex) {
        $lcnx = null;
    }

    return $lcnx;
}

/**
 * 
 * @param PDO $pcnx
 * @param type $psPseudo
 * @param type $psMDP
 * @return boolean
 */
function authentification(PDO $pcnx, $psPseudo, $psMDP) {

    $lbOK = false;

// On recupere toutes les informations du contributeur
    $lsSQL = "SELECT * FROM utilisateurs WHERE pseudo = ? AND mdp = ?";
    $lrs = $pcnx->prepare($lsSQL);
    // --- Obligatoirement une variable (Passage par reference)
    $lrs->bindParam(1, $psPseudo, PDO::PARAM_STR);
    $lrs->bindParam(2, $psMDP, PDO::PARAM_STR);
    $lrs->execute();

    $enr = $lrs->fetch();
    if ($enr === null || !$enr) {
//        $_SESSION["idStatutContributeur"] = $lsIdStatut;
//        $_SESSION["idContributeur"] = $lsIdContributeur;
//        echo "KO";
    } else {
        $lsMessage = "Vous &ecirc;tes connect&eacute;(e) !";
//        $lsIdStatut = $enr["id_statut"];
//        $lsIdContributeur = $enr["id_contributeur"];
        $lbOK = true;
//        echo "OK";
    } // if OK/KO

    return $lbOK;
}

/*
 * CALLs ...
 */
$lsPseudo = "p";
$lsMDP = "b";
//$lbOK = false;

if ($lsPseudo != null && $lsMDP != null) {
    if (empty($lsPseudo) || empty($lsMDP)) {
        $lsMessage = "Le serveur a r&eacute;pondu : Saisies obligatoires !";
//        $lbOK = false;
    } else {
        $lcnx = getConnexion("../conf/bd.ini");
        $lbOK = authentification($lcnx, $lsPseudo, $lsMDP);
        if ($lbOK) {
            $lsMessage = "Authentification OK";
        } else {
            $lsMessage = "Authentification KO";
        }
    }
} else {
    $lsMessage = "Probl&egrave;me de remplissage !!!";
}
$pcnx = null;
echo $lsMessage;
?>