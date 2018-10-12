SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
CREATE DATABASE IF NOT EXISTS diaporama DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE diaporama;

DROP TABLE IF EXISTS abonne;
CREATE TABLE IF NOT EXISTS abonne (
  id_abonne int(11) NOT NULL AUTO_INCREMENT,
  civilite varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  nom varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  prenom varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  adresse varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  cp varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  email varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  mdp varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  cv varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  hobbies varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  newsletter tinyint(1) NOT NULL,
  PRIMARY KEY (id_abonne)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS photo;
CREATE TABLE IF NOT EXISTS photo (
  id_photo int(11) NOT NULL AUTO_INCREMENT,
  photo varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  id_abonne int(11) NOT NULL,
  PRIMARY KEY (id_photo),
  KEY id_abonne (id_abonne)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


ALTER TABLE photo
  ADD CONSTRAINT photo_ibfk_1 FOREIGN KEY (id_abonne) REFERENCES abonne (id_abonne) ON DELETE CASCADE ON UPDATE CASCADE;

## Insertion d'une ligne

INSERT INTO `abonne` (`id_abonne`, `civilite`, `nom`, `prenom`, `adresse`, `cp`, `email`, `mdp`, `cv`, `hobbies`, `newsletter`) VALUES(1, 'H', 'Tintin', 'Reporter', 'rue de la Paix', '75001', 'tintin@free.fr', 'mdp123', 'Reporter ...', NULL, 0);