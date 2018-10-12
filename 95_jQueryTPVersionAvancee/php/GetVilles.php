<?php

/*
 * GetVilles.php
 */

// Connexion
$lcnx = new PDO("mysql:host=localhost;dbname=cours", "root", "");
$lcnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$lcnx->exec("SET NAMES 'UTF8'");

// Exécution de la requête
$lrs = $lcnx->query("SELECT * FROM villes");
// Chargement de toutes les donnees
$t = $lrs->fetchAll(PDO::FETCH_ASSOC);
// Fermeture du curseur
$lrs->closeCursor();

$tJSON = json_encode($t);

echo $tJSON;

?>
