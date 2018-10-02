package model;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Level {

	private int id;

	private String libelle;

	private int nbL;

	private int nbC;

	public Level() {

	}

	public Level(String libelle, int nbL, int nbC) {
		this.libelle = libelle;
		this.nbL = nbL;
		this.nbC = nbC;
	}

	public Level(ResultSet result) {
		try {
			id = result.getInt("id");
			libelle = result.getString("libelle");
			nbL = result.getInt("nbL");
			nbC = result.getInt("nbC");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public int getNbL() {
		return nbL;
	}

	public void setNbL(int nbL) {
		this.nbL = nbL;
	}

	public int getNbC() {
		return nbC;
	}

	public void setNbC(int nbC) {
		this.nbC = nbC;
	}

	public int getId() {
		return id;
	}

}
