<?php
/*
 * LE DTO DE LA TABLE [pays] DE LA BD [cours]
 */
class Pays {

	// ATTRIBUTS
	private $idPays;
	private $nomPays;

	// CONSTRUCTEUR
	function __construct($idPays = "",$nomPays = "") {
		$this->idPays = $idPays;
		$this->nomPays = $nomPays;
	}

	// GETTERS AND SETTERS
	public function setIdPays($idPays) {
		$this->idPays = $idPays;
	}
	public function setNomPays($nomPays) {
		$this->nomPays = $nomPays;
	}
	public function getIdPays() {
		return $this->idPays;
	}
	public function getNomPays() {
		return $this->nomPays;
	}

} // / class Pays
?>
