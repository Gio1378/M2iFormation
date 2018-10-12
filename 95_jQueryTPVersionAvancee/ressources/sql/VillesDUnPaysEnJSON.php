<?php

/**
 * VillesDUnPaysEnJSON.php
 */
/*
 * Connexion a la BD
 */
try {
    $lcnx = new PDO("mysql:host=localhost;port=3306;dbname=ajax;", "root", "");
    $lcnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $lcnx->exec("SET NAMES 'UTF8'");
} catch (PDOException $e) {
    echo "Echec de l'exécution : " . $e->getMessage();
}


/*
 * Recuperation de l'attribut de requete
 */
$cp = filter_input(INPUT_GET, "cp");

try {
    $lsSelect = "SELECT * FROM villes WHERE cp = ?";
    $lrs = $lcnx->prepare($lsSelect);
    $lrs->execute(array($cp));
    $lrs->setFetchMode(PDO::FETCH_NUM);
    $enr = $lrs->fetch();

//    header("Content-Type: application/json; charset=UTF-8");

    $tVille = array();

    if ($enr[1] === null) {
        /*
         * DU JSON
         */
        $tVille["cp"] = "";
        $tVille["nomVille"] = "Introuvable";
        $tVille["idPays"] = "";
    } else {
        $tVille["cp"] = $enr[0];
        $tVille["nomVille"] = $enr[1];
        $tVille["idPays"] = $enr[2];
    }

    $lrs->closeCursor();
} catch (PDOException $e) {
    $tVille["cp"] = "";
    $tVille["nomVille"] = $e->getMessage();
    $tVille["idPays"] = "";
}

// Transforme les donnees PHP (un tableau associatif)
// en donnees JSON (un objet JSON)
// C'est ce qui renvoye a l'appelant en l'occurrence le code AJAX

echo json_encode($tVille);

?>
