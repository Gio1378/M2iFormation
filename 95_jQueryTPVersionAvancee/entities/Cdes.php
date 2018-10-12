<?php
/*
 * LE DTO DE LA TABLE [cdes] DE LA BD [cours]
 */
class Cdes {

	// ATTRIBUTS
	private $idCde;
	private $dateCde;
	private $idClient;

	// CONSTRUCTEUR
	function __construct($idCde = "",$dateCde = "",$idClient = "") {
		$this->idCde = $idCde;
		$this->dateCde = $dateCde;
		$this->idClient = $idClient;
	}

	// GETTERS AND SETTERS
	public function setIdCde($idCde) {
		$this->idCde = $idCde;
	}
	public function setDateCde($dateCde) {
		$this->dateCde = $dateCde;
	}
	public function setIdClient($idClient) {
		$this->idClient = $idClient;
	}
	public function getIdCde() {
		return $this->idCde;
	}
	public function getDateCde() {
		return $this->dateCde;
	}
	public function getIdClient() {
		return $this->idClient;
	}

} // / class Cdes
?>
