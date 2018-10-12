<?php
/*
 * LE DTO DE LA TABLE [produits] DE LA BD [cours]
 */
class Produits {

	// ATTRIBUTS
	private $idProduit;
	private $designation;
	private $prix;
	private $qteStockee;
	private $photo;

	// CONSTRUCTEUR
	function __construct($idProduit = "",$designation = "",$prix = "",$qteStockee = "",$photo = "") {
		$this->idProduit = $idProduit;
		$this->designation = $designation;
		$this->prix = $prix;
		$this->qteStockee = $qteStockee;
		$this->photo = $photo;
	}

	// GETTERS AND SETTERS
	public function setIdProduit($idProduit) {
		$this->idProduit = $idProduit;
	}
	public function setDesignation($designation) {
		$this->designation = $designation;
	}
	public function setPrix($prix) {
		$this->prix = $prix;
	}
	public function setQteStockee($qteStockee) {
		$this->qteStockee = $qteStockee;
	}
	public function setPhoto($photo) {
		$this->photo = $photo;
	}
	public function getIdProduit() {
		return $this->idProduit;
	}
	public function getDesignation() {
		return $this->designation;
	}
	public function getPrix() {
		return $this->prix;
	}
	public function getQteStockee() {
		return $this->qteStockee;
	}
	public function getPhoto() {
		return $this->photo;
	}

} // / class Produits
?>
