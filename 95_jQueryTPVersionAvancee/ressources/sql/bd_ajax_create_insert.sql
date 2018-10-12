13DROP DATABASE IF EXISTS ajax;
CREATE DATABASE ajax DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE ajax;


CREATE TABLE ajax.pays (
id_pays VARCHAR(4) NOT NULL ,
nom_pays VARCHAR(50) NOT NULL,
PRIMARY KEY (id_pays)
) ENGINE = MYISAM ;



INSERT INTO ajax.pays (id_pays, nom_pays)
VALUES
('033', 'France'),
('039', 'Italie')
;



CREATE TABLE ajax.villes (
cp VARCHAR(5) NOT NULL ,
nom_ville VARCHAR(50) NOT NULL ,
id_pays VARCHAR(4) NOT NULL ,
PRIMARY KEY (cp)
) ENGINE = MYISAM ;



INSERT INTO ajax.villes (cp, nom_ville, id_pays)
VALUES 
('75000', 'Paris', '033'), 
('69000', 'Lyon', '033'),
('59000', 'Lille', '033'),
('13000', 'Marseille', '033'),
('99100', 'Rome', '039'),
('99200', 'Milan', '039')
;
