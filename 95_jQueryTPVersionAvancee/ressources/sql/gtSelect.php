<?php
    // --- gtSelect.php
    header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");

    try {
        $lcn = new PDO("mysql:host=localhost;dbname=ajax", "root", "");
        $lcn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $lcn->exec("SET NAMES 'UTF8'");

        // --- gt(id, nom)
        $lsSQL = "SELECT nom FROM gt";

        $lrs = $lcn->query($lsSQL);
        foreach($lrs as $enr) {
            echo $enr[0] . "<br/>";
        }
    } // fin du try
    catch(PDOException $e) {
        $lsContenu = $e->getMessage();
    }
?>
