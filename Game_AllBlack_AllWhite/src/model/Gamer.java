package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

public class Gamer {

	private int id;

	private String pseudo;

	private Timestamp createdAt = new Timestamp(System.currentTimeMillis());

	public Gamer() {

	}

	public Gamer(String pseudo, Timestamp createdAt) {
		this.pseudo = pseudo;
		this.createdAt = createdAt;
	}

	public Gamer(ResultSet result) {
		try {
			id = result.getInt("id");
			pseudo = result.getString("presudo");
			createdAt = result.getTimestamp("created_at");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public Gamer(int id) {
		this.id = id;

	}

	public Gamer(String pseudo) {
		this.pseudo = pseudo;
	}

	public int getId() {
		return id;
	}

	public String getPseudo() {
		return pseudo;
	}

	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}

	public Timestamp getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}

}
