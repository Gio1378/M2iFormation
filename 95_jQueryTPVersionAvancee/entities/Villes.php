<?php
/*
 * LE DTO DE LA TABLE [villes] DE LA BD [cours]
 */
class Villes {

	// ATTRIBUTS
	private $cp;
	private $nomVille;
	private $site;
	private $photo;
	private $idPays;

	// CONSTRUCTEUR
	function __construct($cp = "",$nomVille = "",$site = "",$photo = "",$idPays = "") {
		$this->cp = $cp;
		$this->nomVille = $nomVille;
		$this->site = $site;
		$this->photo = $photo;
		$this->idPays = $idPays;
	}

	// GETTERS AND SETTERS
	public function setCp($cp) {
		$this->cp = $cp;
	}
	public function setNomVille($nomVille) {
		$this->nomVille = $nomVille;
	}
	public function setSite($site) {
		$this->site = $site;
	}
	public function setPhoto($photo) {
		$this->photo = $photo;
	}
	public function setIdPays($idPays) {
		$this->idPays = $idPays;
	}
	public function getCp() {
		return $this->cp;
	}
	public function getNomVille() {
		return $this->nomVille;
	}
	public function getSite() {
		return $this->site;
	}
	public function getPhoto() {
		return $this->photo;
	}
	public function getIdPays() {
		return $this->idPays;
	}

} // / class Villes
?>
