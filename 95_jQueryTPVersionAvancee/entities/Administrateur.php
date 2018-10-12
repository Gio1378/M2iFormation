<?php
/*
 * LE DTO DE LA TABLE [administrateur] DE LA BD [cours]
 */
class Administrateur {

	// ATTRIBUTS
	private $identifiant;
	private $mdp;
	private $email;
	private $qualite;

	// CONSTRUCTEUR
	function __construct($identifiant = "",$mdp = "",$email = "",$qualite = "") {
		$this->identifiant = $identifiant;
		$this->mdp = $mdp;
		$this->email = $email;
		$this->qualite = $qualite;
	}

	// GETTERS AND SETTERS
	public function setIdentifiant($identifiant) {
		$this->identifiant = $identifiant;
	}
	public function setMdp($mdp) {
		$this->mdp = $mdp;
	}
	public function setEmail($email) {
		$this->email = $email;
	}
	public function setQualite($qualite) {
		$this->qualite = $qualite;
	}
	public function getIdentifiant() {
		return $this->identifiant;
	}
	public function getMdp() {
		return $this->mdp;
	}
	public function getEmail() {
		return $this->email;
	}
	public function getQualite() {
		return $this->qualite;
	}

} // / class Administrateur
?>
