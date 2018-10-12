<?php

/*
  ProduitsDAO.php
 */
/*
  LE DAO de la table [produits] de la BD [cours]
 */
require_once '../entities/Produits.php';

class ProduitsDAO {

    public static function selectAll(PDO $pdo) {
        $liste = array();
        try {
            $sql = 'SELECT * FROM cours.produits';
            $lrs = $pdo->query($sql);
            $lrs->setFetchMode(PDO::FETCH_ASSOC);
            while ($enr = $lrs->fetch()) {
                $objet = new Produits($enr['id_produit'], $enr['designation'], $enr['prix'], $enr['qte_stockee'], $enr['photo']);
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
            $sql = 'SELECT * FROM cours.produits WHERE id_produit = ?';
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $id);
            $lrs = $lcmd->execute();
            $enr = $lcmd->fetch(PDO::FETCH_ASSOC);
            $objet = new Produits();
            $objet->setIdProduit($enr['id_produit']);
            $objet->setDesignation($enr['designation']);
            $objet->setPrix($enr['prix']);
            $objet->setQteStockee($enr['qte_stockee']);
            $objet->setPhoto($enr['photo']);
        } catch (PDOException $e) {
            $objet = null;
        }
        return $objet;
    }

    public static function delete(PDO $pdo, $objet) {
        $liAffectes = 0;
        try {
            $sql = "DELETE FROM cours.produits WHERE id_produit = ?";
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $objet->getIdProduit());
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
            $sql = "INSERT INTO cours.produits(id_produit,designation,prix,qte_stockee,photo) VALUES(?,?,?,?,?)";
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $objet->getIdProduit());
            $lcmd->bindValue(2, $objet->getDesignation());
            $lcmd->bindValue(3, $objet->getPrix());
            $lcmd->bindValue(4, $objet->getQteStockee());
            $lcmd->bindValue(5, $objet->getPhoto());

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
            $sql = "UPDATE cours.produits SET designation=?,prix=?,qte_stockee=?,photo=? WHERE id_produit=?";
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $objet->getDesignation());
            $lcmd->bindValue(2, $objet->getPrix());
            $lcmd->bindValue(3, $objet->getQteStockee());
            $lcmd->bindValue(4, $objet->getPhoto());
            $lcmd->bindValue(5, $objet->getId_produit());

            $lcmd->execute();
            $liAffectes = $lcmd->rowcount();
        } catch (PDOException $e) {
            $liAffectes = -1;
        }
        return $liAffectes;
    }

}

?>
