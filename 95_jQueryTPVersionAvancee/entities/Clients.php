<?php
/*
 * LE DTO DE LA TABLE [clients] DE LA BD [cours]
 */
class Clients {

	// ATTRIBUTS
	private $idClient;
	private $nom;
	private $prenom;
	private $adresse;
	private $dateNaissance;
	private $cp;

	// CONSTRUCTEUR
	function __construct($idClient = "",$nom = "",$prenom = "",$adresse = "",$dateNaissance = "",$cp = "") {
		$this->idClient = $idClient;
		$this->nom = $nom;
		$this->prenom = $prenom;
		$this->adresse = $adresse;
		$this->dateNaissance = $dateNaissance;
		$this->cp = $cp;
	}

	// GETTERS AND SETTERS
	public function setIdClient($idClient) {
		$this->idClient = $idClient;
	}
	public function setNom($nom) {
		$this->nom = $nom;
	}
	public function setPrenom($prenom) {
		$this->prenom = $prenom;
	}
	public function setAdresse($adresse) {
		$this->adresse = $adresse;
	}
	public function setDateNaissance($dateNaissance) {
		$this->dateNaissance = $dateNaissance;
	}
	public function setCp($cp) {
		$this->cp = $cp;
	}
	public function getIdClient() {
		return $this->idClient;
	}
	public function getNom() {
		return $this->nom;
	}
	public function getPrenom() {
		return $this->prenom;
	}
	public function getAdresse() {
		return $this->adresse;
	}
	public function getDateNaissance() {
		return $this->dateNaissance;
	}
	public function getCp() {
		return $this->cp;
	}

} // / class Clients
?>
