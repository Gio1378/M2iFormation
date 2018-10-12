<?php

require_once '../daos/Connexion.php';
require_once '../entities/Villes.php';
require_once '../daos/VillesDAO.php';

$objetConnexion = new Connexion();
$pdo = $objetConnexion->seConnecter("../conf/bd.ini");
$liste = array();
try {
    $tObjets = VillesDAO::selectAll($pdo);

    for ($i = 0; $i < count($tObjets); $i++) {
        $tRecord = array();
        $tRecord["cp"] = $tObjets[$i]->getCp();
        $tRecord["nomVille"] = $tObjets[$i]->getNomVille();
        $liste[] = $tRecord;
    }
} catch (Exception $exc) {
    //echo $exc->getTraceAsString();
    $tRecord = array();
    $tRecord["cp"] = "-1";
    $tRecord["nomVille"] = $exc->getTraceAsString();
    $liste[] = $tRecord;
}

$objetConnexion->seDeconnecter($pdo);

$json = json_encode($liste);

echo $json;

?>
