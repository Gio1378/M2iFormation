<?php

/*
 * InscriptionCTRL.php
 */

require_once '../daos/Connexion.php';
require_once '../daos/Transaxion.php';
require_once '../entities/Utilisateurs.php';
require_once '../daos/UtilisateursDAO.php';

$objetConnexion = new Connexion();
$pdo = $objetConnexion->seConnecter("../conf/bd.ini");
$objetTransaxion = new Transaxion();
$objetTransaxion->initialiser($pdo);

// http://localhost/jQueryTPVersionAvancee/controls/InscriptionCTRL.php?pseudo=p&mdp=b

$pseudo = filter_input(INPUT_POST, "pseudo");
$mdp = filter_input(INPUT_POST, "mdp");
$email = filter_input(INPUT_POST, "email");
$qualite = "FO";

$tRecord = array();
$objet = new Utilisateurs($pseudo, $mdp, $email, $qualite);// instanciation
$message = UtilisateursDAO::insert($pdo, $objet);
if ($message == 1) {
    $objetTransaxion->valider($pdo);
}
$tRecord["message"] = $message;
$objetConnexion->seDeconnecter($pdo);

$json = json_encode($tRecord);

echo $json;
?>
