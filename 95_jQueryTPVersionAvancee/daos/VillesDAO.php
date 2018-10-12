<?php

/*
  VillesDAO.php
 */
/*
  LE DAO de la table [villes] de la BD [cours]
 */
require_once '../entities/Villes.php';

class VillesDAO {

    public static function selectAll(PDO $pdo) {
        $liste = array();
        try {
            $sql = 'SELECT * FROM cours.villes';
            $lrs = $pdo->query($sql);
            $lrs->setFetchMode(PDO::FETCH_ASSOC);
            while ($enr = $lrs->fetch()) {
                $objet = new Villes($enr['cp'], $enr['nom_ville'], $enr['site'], $enr['photo'], $enr['id_pays']);
                $liste[] = $objet;
            }
        } catch (PDOException $e) {
            $objet = null;
            $liste[] = $objet;
        }
        return $liste;
    }

    public static function selectOne(PDO $pdo, $id) {
        try {
            $sql = 'SELECT * FROM cours.villes WHERE cp = ?';
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $id);
            $lrs = $lcmd->execute();
            $enr = $lcmd->fetch(PDO::FETCH_ASSOC);
            $objet = new Villes();
            $objet->setCp($enr['cp']);
            $objet->setNomVille($enr['nom_ville']);
            $objet->setSite($enr['site']);
            $objet->setPhoto($enr['photo']);
            $objet->setIdPays($enr['id_pays']);
        } catch (PDOException $e) {
            $objet = null;
        }
        return $objet;
    }

    public static function delete(PDO $pdo, $objet) {
        $liAffectes = 0;
        try {
            $sql = "DELETE FROM cours.villes WHERE cp = ?";
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $objet->getCp());
            $lcmd->execute();
            $liAffectes = $lcmd->rowcount();
        } catch (PDOException $e) {
            $liAffectes = -1;
        }
        return $liAffectes;
    }

    public static function insert(PDO $pdo, $objet) {
        $liAffectes = 0;
        try {
            $sql = "INSERT INTO cours.villes(cp,nom_ville,site,photo,id_pays) VALUES(?,?,?,?,?)";
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $objet->getCp());
            $lcmd->bindValue(2, $objet->getNomVille());
            $lcmd->bindValue(3, $objet->getSite());
            $lcmd->bindValue(4, $objet->getPhoto());
            $lcmd->bindValue(5, $objet->getIdPays());

            $lcmd->execute();
            $liAffectes = $lcmd->rowcount();
        } catch (PDOException $e) {
            $liAffectes = -1;
        }
        return $liAffectes;
    }

    public static function update(PDO $pdo, $objet) {
        $liAffectes = 0;
        try {
            $sql = "UPDATE cours.villes SET nom_ville=?,site=?,photo=?,id_pays=? WHERE cp=?";
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $objet->getNomVille());
            $lcmd->bindValue(2, $objet->getSite());
            $lcmd->bindValue(3, $objet->getPhoto());
            $lcmd->bindValue(4, $objet->getIdPays());
            $lcmd->bindValue(5, $objet->getCp());

            $lcmd->execute();
            $liAffectes = $lcmd->rowcount();
        } catch (PDOException $e) {
            $liAffectes = -1;
        }
        return $liAffectes;
    }

}

?>
