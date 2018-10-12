<?php
    // --- VillesSelect.php
    $lsContenu = "";

    try {
        $lcn = new PDO("mysql:host=localhost;dbname=ajax", "root", "");
        $lcn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $lcn->exec("SET NAMES 'UTF8'");

        $lsSQL = "SELECT cp, nom_ville FROM villes";
        $lrs = $lcn->prepare($lsSQL);
        $lrs->execute();

        foreach($lrs as $enr) {
            $lsContenu .= "$enr[0];$enr[1]\n";
        }
        $lsContenu = substr($lsContenu, 0, -1);

        $lcn = null;
    }
    catch(PDOException $e) {
        $lsContenu = $e->getMessage();
    }

    echo $lsContenu;
?>
