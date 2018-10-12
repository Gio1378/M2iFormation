<?php

/*
 * CatalogueCTRL.php
 */

require_once '../daos/Connexion.php';
require_once '../entities/Produits.php';
require_once '../daos/ProduitsDAO.php';

$objetConnexion = new Connexion();
$pdo = $objetConnexion->seConnecter("../conf/bd.ini");
$liste = array();
try {
    $tObjets = ProduitsDAO::selectAll($pdo);//Appel statique d'une fonction statique à comparer à une instanciation

    for ($i = 0; $i < count($tObjets); $i++) {
        $tRecord = array();
        $tRecord["idProduit"] = $tObjets[$i]->getIdProduit();
        $tRecord["designation"] = $tObjets[$i]->getDesignation();
        $tRecord["prix"] = $tObjets[$i]->getPrix();
        $tRecord["photo"] = $tObjets[$i]->getPhoto();
        $liste[] = $tRecord;
    }
} catch (Exception $exc) {
    //echo $exc->getTraceAsString();
    $tRecord = array();
    $tRecord["idProduit"] = "-1";
    $tRecord["designation"] = $exc->getTraceAsString();
    $tRecord["prix"] = "";
    $tRecord["photo"] = "";
    $liste[] = $tRecord;
}

$objetConnexion->seDeconnecter($pdo);

$json = json_encode($liste);

echo $json;
?>
