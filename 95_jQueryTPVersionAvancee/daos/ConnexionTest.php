<?php

/*
 * ConnexionTest.php
 */
//require_once 'Connexion.php';
//
//$lcnx = seConnecter("../../conf/cours.ini");
//
//echo "<br><pre>";
//var_dump($lcnx);
//echo "</pre><br>";
//
//seDeconnecter($lcnx);

require_once 'Connexion.php';

$objetConnexion = new Connexion();

$lcnx = $objetConnexion->seConnecter("../conf/bd.ini");

echo "<br><pre>";
var_dump($lcnx);
echo "</pre><br>";

$objetConnexion->seDeconnecter($lcnx);
?>
