<?php
    // --- VillesDelete.php

    $cp = filter_input(INPUT_POST, "cp");
    $lsMessage = "";

    try {
        $lcn = new PDO("mysql:host=localhost;dbname=ajax", "root", "");
        $lcn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $lcn->exec("SET NAMES 'UTF8'");

        $lsSQL = "DELETE FROM villes WHER cp = ?";
        $lcmd = $lcn->prepare($lsSQL);
        $lcmd->execute(array($cp));

        $lsMessage = $lcmd->rowcount() . " enregistrement(s) supprimé(s)";

        $lcn = null;
    }
    catch(PDOException $e) {
        $lsMessage = $e->getMessage();
    }
    echo $lsMessage;
?>
