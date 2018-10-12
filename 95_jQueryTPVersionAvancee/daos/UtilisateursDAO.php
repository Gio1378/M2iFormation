<?php

/*
  UtilisateursDAO.php
 */
/*
  LE DAO de la table [utilisateurs] de la BD [cours]
 */
require_once '../entities/Utilisateurs.php';

class UtilisateursDAO {

    public static function selectAll(PDO $pdo) {
        $liste = array();
        try {
            $sql = 'SELECT * FROM cours.utilisateurs';
            $lrs = $pdo->query($sql);
            $lrs->setFetchMode(PDO::FETCH_ASSOC);
            while ($enr = $lrs->fetch()) {
                $objet = new Utilisateurs($enr['pseudo'], $enr['mdp'], $enr['email'], $enr['qualite']);
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
            $sql = 'SELECT * FROM cours.utilisateurs WHERE pseudo = ?';
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $id);
            $lrs = $lcmd->execute();
            $enr = $lcmd->fetch(PDO::FETCH_ASSOC);
            $objet = new Utilisateurs();
            $objet->setPseudo($enr['pseudo']);
            $objet->setMdp($enr['mdp']);
            $objet->setEmail($enr['email']);
            $objet->setQualite($enr['qualite']);
        } catch (PDOException $e) {
            $objet = null;
        }
        return $objet;
    }
    
    public static function selectOneByPseudoAndMdp(PDO $pdo, $pseudo, $mdp) {
        try {
            $sql = 'SELECT * FROM cours.utilisateurs WHERE pseudo = ? AND mdp = ?';
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $pseudo);
            $lcmd->bindValue(2, $mdp);
            $lrs = $lcmd->execute();
            $enr = $lcmd->fetch(PDO::FETCH_ASSOC);
            $objet = new Utilisateurs();
            $objet->setPseudo($enr['pseudo']);
            $objet->setMdp($enr['mdp']);
            $objet->setEmail($enr['email']);
            $objet->setQualite($enr['qualite']);
        } catch (PDOException $e) {
            //$objet = null;
            $objet = new Utilisateurs();
            $objet->setPseudo("-1");
            $objet->setMdp($e->getMessage());
            $objet->setEmail("");
            $objet->setQualite("");
        }
        return $objet;
    }

    public static function delete(PDO $pdo, $objet) {
        $liAffectes = 0;
        try {
            $sql = "DELETE FROM cours.utilisateurs WHERE pseudo = ?";
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $objet->getPseudo());
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
            $sql = "INSERT INTO cours.utilisateurs(pseudo,mdp,email,qualite) VALUES(?,?,?,?)";
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $objet->getPseudo());
            $lcmd->bindValue(2, $objet->getMdp());
            $lcmd->bindValue(3, $objet->getEmail());
            $lcmd->bindValue(4, $objet->getQualite());

            $lcmd->execute();
            $liAffectes = $lcmd->rowcount();
        } catch (PDOException $e) {
            $liAffectes = $e->getMessage();
        }
        return $liAffectes;
    }

    public static function update(PDO $pdo, $objet) {
        $liAffectes = 0;
        try {
            $sql = "UPDATE cours.utilisateurs SET mdp=?,email=?,qualite=? WHERE pseudo=?";
            $lcmd = $pdo->prepare($sql);
            $lcmd->bindValue(1, $objet->getMdp());
            $lcmd->bindValue(2, $objet->getEmail());
            $lcmd->bindValue(3, $objet->getQualite());
            $lcmd->bindValue(4, $objet->getPseudo());

            $lcmd->execute();
            $liAffectes = $lcmd->rowcount();
        } catch (PDOException $e) {
            $liAffectes = -1;
        }
        return $liAffectes;
    }

}

?>
