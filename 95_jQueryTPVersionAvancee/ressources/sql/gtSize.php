<?php
    // --- gtSize.php
    // --- Calcul de la taille en octets de la table gt
    // --- taille = nb enr * (longueur moyenne de ID + longueur moyenne de nom)
    try {
        $lcn = new PDO("mysql:host=localhost;dbname=ajax", "root", "");
        $lcn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $lcn->exec("SET NAMES 'UTF8'");

        // --- gt(id, nom)

        // --- Nombre d'enregistrements (100 000)
        $lsSQL = "SELECT COUNT(*) FROM gt";
        $lrs   = $lcn->query($lsSQL);
        $enr   = $lrs->fetch();
        $count = $enr[0];

        // --- Longueur moyenne de l'ID (environ 5)
        $lsSQL = "SELECT AVG(LENGTH(id)) from gt";
        $lrs   = $lcn->query($lsSQL);
        $enr   = $lrs->fetch();
        $lnID  = $enr[0];

        // --- Longueur moyenne du nom (environ 11)
        $lsSQL = "SELECT AVG(LENGTH(nom)) from gt";
        $lrs   = $lcn->query($lsSQL);
        $enr   = $lrs->fetch();
        $lnNom = $enr[0];

        $taille = $count * ($lnID + $lnNom);
    }
    catch(PDOException $e) {
        $lsContenu = $e->getMessage();
    }
    echo $taille;
?>
