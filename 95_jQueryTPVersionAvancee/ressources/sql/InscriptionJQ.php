<?php

/*
 * InscriptionJQ.php
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
 * @param type $taData
 * @return type
 */
function inscription(PDO $pcnx, $taData) {
    $lbOK = false;

    $pcnx->beginTransaction();

    $lsSQL = "INSERT INTO abonne(civilite,nom,prenom,adresse,cp,email,mdp,cv,hobbies,newsletter) VALUES(?,?,?,?,?,?,?,?,?,?)";
    $lcmd = $pcnx->prepare($lsSQL);

//    $lsCivilite = "H";
//    $lsHobbies = "1;2";
//    $lsNewsLetter = "1";
    // --- Obligatoirement une variable (Passage par reference)
//    $lcmd->bindParam(1, $lsCivilite, PDO::PARAM_STR);
    $lcmd->bindParam(1, $taData["civilite"], PDO::PARAM_STR);
    $lcmd->bindParam(2, $taData["nom"], PDO::PARAM_STR);
    $lcmd->bindParam(3, $taData["prenom"], PDO::PARAM_STR);
    $lcmd->bindParam(4, $taData["adresse"], PDO::PARAM_STR);
    $lcmd->bindParam(5, $taData["cp"], PDO::PARAM_STR);
    $lcmd->bindParam(6, $taData["email"], PDO::PARAM_STR);
    $lcmd->bindParam(7, $taData["mdp"], PDO::PARAM_STR);
    $lcmd->bindParam(8, $taData["cv"], PDO::PARAM_STR);
    $lcmd->bindParam(9, $taData["hobbies"], PDO::PARAM_STR);
    $lcmd->bindParam(10, $taData["newsletter"], PDO::PARAM_STR);
//    $lcmd->bindParam(9, $lsHobbies, PDO::PARAM_STR);
//    $lcmd->bindParam(10, $lsNewsLetter, PDO::PARAM_STR); 

    $lcmd->execute();

    $liCount = $lcmd->rowcount();
    if ($liCount == 1) {
        $lbOK = true;
        $pcnx->commit();
    }
    return $lbOK;
}

// CALLs
//$lcnx = getConnexion("../ressources/diaporama.ini");
$lsEMail = filter_input(INPUT_POST, "email");
$lsMDP = filter_input(INPUT_POST, "mdp");
//$lbOK = false;

if ($lsEMail != null && $lsMDP != null) {
    if (empty($lsEMail) || empty($lsMDP)) {
        $lsMessage = "Le serveur a r&eacute;pondu : Saisies obligatoires !";
//        $lbOK = false;
    } else {
        $lcnx = getConnexion("../ressources/diaporama.ini");
        $lbOK = inscription($lcnx, $_POST);
        if ($lbOK) {
            $lsMessage = "Inscription OK côté serveur";
        } else {
            $lsMessage = "Inscription KO côté serveur";
        }
        $lcnx = null;
    }
} else {
    $lsMessage = "Probl&egrave;me de remplissage côté serveur !!!";
}

echo $lsMessage;
?>


