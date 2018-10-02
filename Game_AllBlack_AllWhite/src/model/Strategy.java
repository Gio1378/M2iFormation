package model;

import utilities.Rules;

public abstract class Strategy implements Rules {

	private int id;

	private String titre;

	private String description;

	public Strategy() {

	}

	protected Strategy(String titre, String description) {
		this.titre = titre;
		this.description = description;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getId() {
		return id;
	}

}
