<!-- gtCreateInserts.php -->
<form method="get" action="" >
    Combien d'enregistrements ? <input type="text" name="tb_enr" value="100000" />
    <input type="submit" />
</form>

<?php
if(isSet($_GET["tb_enr"])) {

    $lsMessage = "OK, c'est fini";

    try {
        $lcn = new PDO("mysql:host=localhost;dbname=ajax", "root", "");
        $lcn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $lcn->exec("SET NAMES 'UTF8'");

        $lcn->exec("DROP TABLE IF EXISTS gt");

        $lsCreate = "CREATE TABLE IF NOT EXISTS gt(id int(5) default NULL,
        nom varchar(50) default NULL) ENGINE=MyISAM CHARACTER SET utf8 COLLATE utf8_general_ci";
        $lcn->exec($lsCreate);

        $lcmd = $lcn->prepare("INSERT INTO gt(id, nom) VALUES(?,?)");

        for($i=1; $i<=$_GET["tb_enr"]; $i++) {
            $lsNom = "Tintin" . (string)$i;
            $lcmd->execute(array($i, $lsNom));
        }
    } // fin du try
    catch(PDOException $e) {
        $lsMessage = $e->getMessage();
    }
    echo $lsMessage;
} // fin du if isSet()
?>
