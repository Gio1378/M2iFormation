<?php

/*
 * InscriptionJSON.php
 */

$lsEmail = filter_input(INPUT_POST, "email");
$lsPseudo = filter_input(INPUT_POST, "pseudo");
$lsMDP = filter_input(INPUT_POST, "mdp");
$lsNom = filter_input(INPUT_POST, "nom");
$lsPrenom = filter_input(INPUT_POST, "prenom");
$lsQualite = "FO";

if ($lsEmail != null && $lsMDP != null && $lsPseudo != null) {
    if (empty($lsEmail) || empty($lsMDP || empty($lsPseudo))) {
        $lsMessage = "Le serveur a r&eacute;pondu : Saisies obligatoires !";
//        $lbOK = false;
    } else {
        $tUtilisateur = array();
        $tUtilisateur["pseudo"] = $lsPseudo;
        $tUtilisateur["nom"] = $lsNom;
        $tUtilisateur["prenom"] = $lsPrenom;
        $tUtilisateur["email"] = $lsEmail;
        $tUtilisateur["mdp"] = $lsMDP;
        $tUtilisateur["qualite"] = "FO";

        $contenu = file_get_contents("../ressources/json/utilisateurs.json");
        $tUtilisateurs = json_decode($contenu, true);

        $tUtilisateurs[] = $tUtilisateur;

        $chaineJSON = json_encode($tUtilisateurs);

        /*
         * TODO : Gestion d'erreur
         */
        $r = file_put_contents("../ressources/json/utilisateurs.json", $chaineJSON);

        if ($r === false) {
            $lsMessage = "Inscription ratée";
        } else {
            $lsMessage = "Inscription réussie";
        }


//        if ($lbOK) {
//            $lsMessage = "Inscription OK côté serveur";
//        } else {
//            $lsMessage = "Inscription KO côté serveur";
//        }
    }
} else {
    $lsMessage = "Probl&egrave;me de remplissage côté serveur !!!";
}

$taMessage = array();
$taMessage["message"] = $lsMessage;
echo json_encode($taMessage);
?>
