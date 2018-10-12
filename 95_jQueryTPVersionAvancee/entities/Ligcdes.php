<?php
/*
 * LE DTO DE LA TABLE [ligcdes] DE LA BD [cours]
 */
class Ligcdes {

	// ATTRIBUTS
	private $idCde;
	private $idProduit;
	private $qte;

	// CONSTRUCTEUR
	function __construct($idCde = "",$idProduit = "",$qte = "") {
		$this->idCde = $idCde;
		$this->idProduit = $idProduit;
		$this->qte = $qte;
	}

	// GETTERS AND SETTERS
	public function setIdCde($idCde) {
		$this->idCde = $idCde;
	}
	public function setIdProduit($idProduit) {
		$this->idProduit = $idProduit;
	}
	public function setQte($qte) {
		$this->qte = $qte;
	}
	public function getIdCde() {
		return $this->idCde;
	}
	public function getIdProduit() {
		return $this->idProduit;
	}
	public function getQte() {
		return $this->qte;
	}

} // / class Ligcdes
?>
