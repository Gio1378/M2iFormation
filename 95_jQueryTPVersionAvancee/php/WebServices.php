<?php

/*
  WebServices.php
 */

/**
 *
 */
function selectAll() {

    $t = array();

    try {
        $lcnx = new PDO("mysql:host=localhost;port=3306;dbname=cours;", "root", "");
        $lcnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $lcnx->exec("SET NAMES 'UTF8'");

        $lsSelect = "SELECT * FROM produits";
        $lrs = $lcnx->query($lsSelect);

        $t = $lrs->fetchAll(PDO::FETCH_ASSOC);

        $lrs->closeCursor();
    } catch (PDOException $e) {
        $t ["Erreur"] = "Echec de l'exécution : " . $e->getMessage();
    }

    $tJSON = json_encode($t);

    return $tJSON;
}

/**
 *
 * @param type $categorie
 */
function selectByCategory($categorie) {
    $t = array();

    try {
        $lcnx = new PDO("mysql:host=localhost;port=3306;dbname=cours;", "root", "");
        $lcnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $lcnx->exec("SET NAMES 'UTF8'");

        $lsSelect = "SELECT * FROM produits WHERE categorie = ?";
        $lrs = $lcnx->prepare($lsSelect);
        $lrs->execute(array($categorie));

        $t = $lrs->fetchAll(PDO::FETCH_ASSOC);

        $lrs->closeCursor();
    } catch (PDOException $e) {
        $t ["Erreur"] = "Echec de l'exécution : " . $e->getMessage();
    }

    $tJSON = json_encode($t);

    return $tJSON;
}

$categorie = filter_input(INPUT_GET, "categorie");
$r = "";
if ($categorie == "") {
    $r = selectAll();
}
if ($categorie != "") {
    $r = selectByCategory($categorie);
}

// http://localhost/jQueryTP/php/WebServices.php?categorie=
// http://localhost/jQueryTP/php/WebServices.php?categorie=eaux
// http://localhost/jQueryTP/php/WebServices.php?categorie=vins
// etc ...

echo "<pre>";
var_dump($r);
echo "</pre>";
?>
