<?php

/*
 * TransaxionTest.php
 */

require_once 'Connexion.php';
require_once 'Transaxion.php';

try {

    $objetConnexion = new Connexion();
    $objetTransaxion = new Transaxion();

    $lcnx = $objetConnexion->seConnecter("cours.ini");

    $objetTransaxion->initialiser($lcnx);

//    echo "<hr>INSERT<hr>";
//    $lsSQL = "INSERT INTO pays(id_pays, nom_pays) VALUES(?,?)";
//    $id = "SR";
//    $nom = "Serbie";
//
//    $lcmd = $lcnx->prepare($lsSQL);
//    $lcmd->bindParam(1, $id, PDO::PARAM_STR);
//    $lcmd->bindParam(2, $nom, PDO::PARAM_STR);
//    $lcmd->execute();
//
//    $lbOK = $objetTransaxion->valider($lcnx);
//    echo $lbOK;
    
    echo "<hr>DELETE<hr>";
    $lsSQL = "DELETE FROM pays WHERE id_pays = ?";
    $id = "SR";

    $lcmd = $lcnx->prepare($lsSQL);
    $lcmd->bindParam(1, $id, PDO::PARAM_STR);
    $lcmd->execute();

    $lbOK = $objetTransaxion->valider($lcnx);
    echo $lbOK;
    
    
    
} catch (PDOException $exc) {
    echo $exc->getMessage();
    $objetTransaxion->annuler($lcnx);
}

$objetConnexion->seDeconnecter($lcnx);
?>
