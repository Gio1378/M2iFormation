<?php

/*
 * AuthentificationJQ.php
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
 * @param type $psemail
 * @param type $psmdp
 * @return boolean
 */
function authentification(PDO $pcnx, $psemail, $psmdp) {

    $lbOK = false;

// On recupere toutes les informations du contributeur
    $lsSQL = "SELECT * FROM abonne WHERE email = ? AND mdp = ?";
    $lrs = $pcnx->prepare($lsSQL);
    // --- Obligatoirement une variable (Passage par reference)
    $lrs->bindParam(1, $psemail, PDO::PARAM_STR);
    $lrs->bindParam(2, $psmdp, PDO::PARAM_STR);
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
$lsEMail = filter_input(INPUT_GET, "email");
$lsMDP = filter_input(INPUT_GET, "mdp");
//$lbOK = false;

if ($lsEMail != null && $lsMDP != null) {
    if (empty($lsEMail) || empty($lsMDP)) {
        $lsMessage = "Le serveur a r&eacute;pondu : Saisies obligatoires !";
//        $lbOK = false;
    } else {
        $lcnx = getConnexion("../ressources/diaporama.ini");
        $lbOK = authentification($lcnx, $lsEMail, $lsMDP);
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