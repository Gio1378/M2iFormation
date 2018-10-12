<?php
    // --- VillesDUnPays.php

    $id = filter_input(INPUT_GET, "id");

    $lsContenu = "";

    try {
        $lcn = new PDO("mysql:host=localhost;dbname=ajax", "root", "");
        $lcn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $lcn->exec("SET NAMES 'UTF8'");

        $lsSQL = "SELECT cp, nom_ville FROM villes WHERE id_pays = ?";
        $lrs = $lcn->prepare($lsSQL);
        $lrs->execute(array($id));

        foreach($lrs as $enr) {
            $lsContenu .= "$enr[0];$enr[1]\n";
        }

        if($lsContenu != "") {
            $lsContenu = substr($lsContenu, 0, -1);
        }

        $lcn = null;
    }
    catch(PDOException $e) {
        $lsContenu = $e->getMessage();
    }

    echo $lsContenu;
?>
