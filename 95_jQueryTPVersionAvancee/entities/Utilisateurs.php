<?php
/*
 * LE DTO DE LA TABLE [utilisateurs] DE LA BD [cours]
 */
class Utilisateurs {

	// ATTRIBUTS
	private $pseudo;
	private $mdp;
	private $email;
	private $qualite;

	// CONSTRUCTEUR
	function __construct($pseudo = "",$mdp = "",$email = "",$qualite = "") {
		$this->pseudo = $pseudo;
		$this->mdp = $mdp;
		$this->email = $email;
		$this->qualite = $qualite;
	}

	// GETTERS AND SETTERS
	public function setPseudo($pseudo) {
		$this->pseudo = $pseudo;
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
	public function getPseudo() {
		return $this->pseudo;
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

} // / class Utilisateurs
?>
