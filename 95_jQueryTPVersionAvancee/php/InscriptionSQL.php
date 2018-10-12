<?php

/*
 * InscriptionSQL.php
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

    try {
        $pcnx->beginTransaction();

//    $lsSQL = "INSERT INTO abonne(civilite,nom,prenom,adresse,cp,email,mdp,cv,hobbies,newsletter) VALUES(?,?,?,?,?,?,?,?,?,?)";
        $lsSQL = "INSERT INTO utilisateurs(pseudo, email, mdp, qualite) VALUES(?,?,?,?)";
        $lcmd = $pcnx->prepare($lsSQL);

////    $lsCivilite = "H";
////    $lsHobbies = "1;2";
////    $lsNewsLetter = "1";
//    // --- Obligatoirement une variable (Passage par reference)
////    $lcmd->bindParam(1, $lsCivilite, PDO::PARAM_STR);
//    $lcmd->bindParam(1, $taData["civilite"], PDO::PARAM_STR);
//    $lcmd->bindParam(2, $taData["nom"], PDO::PARAM_STR);
//    $lcmd->bindParam(3, $taData["prenom"], PDO::PARAM_STR);
//    $lcmd->bindParam(4, $taData["adresse"], PDO::PARAM_STR);
//    $lcmd->bindParam(5, $taData["cp"], PDO::PARAM_STR);
//    $lcmd->bindParam(6, $taData["email"], PDO::PARAM_STR);
//    $lcmd->bindParam(7, $taData["mdp"], PDO::PARAM_STR);
//    $lcmd->bindParam(8, $taData["cv"], PDO::PARAM_STR);
//    $lcmd->bindParam(9, $taData["hobbies"], PDO::PARAM_STR);
//    $lcmd->bindParam(10, $taData["newsletter"], PDO::PARAM_STR);
////    $lcmd->bindParam(9, $lsHobbies, PDO::PARAM_STR);
////    $lcmd->bindParam(10, $lsNewsLetter, PDO::PARAM_STR);
        $lcmd->bindParam(1, $taData["pseudo"]);
        $lcmd->bindParam(2, $taData["email"]);
        $lcmd->bindParam(3, $taData["mdp"]);
        $lcmd->bindParam(4, $taData["qualite"]);

        $lcmd->execute();

        $liCount = $lcmd->rowcount();
        if ($liCount == 1) {
            $lbOK = true;
            $pcnx->commit();
        }
    } catch (Exception $ex) {
    }
    return $lbOK;
}

// CALLs
//$lcnx = getConnexion("../ressources/diaporama.ini");
//$nom = filter_input(INPUT_POST, "nom");
//$prenom = filter_input(INPUT_POST, "prenom");
$pseudo = filter_input(INPUT_POST, "pseudo");
$email = filter_input(INPUT_POST, "email");
$mdp = filter_input(INPUT_POST, "mdp");
$qualite = "FO";
//$lbOK = false;

if ($email != null && $mdp != null && $pseudo != null) {
    if (empty($email) || empty($mdp || empty($pseudo))) {
        $lsMessage = "Le serveur a r&eacute;pondu : Saisies obligatoires !";
//        $lbOK = false;
    } else {
        $lcnx = getConnexion("../conf/bd.ini"); // 
        $taData = array();
        $taData["pseudo"] = $pseudo;
        $taData["email"] = $email;
        $taData["mdp"] = $mdp;
        $taData["qualite"] = $qualite;

        $lbOK = inscription($lcnx, $taData);
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

$taMessage = array();
$taMessage["message"] = $lsMessage;
echo json_encode($taMessage);
?>


