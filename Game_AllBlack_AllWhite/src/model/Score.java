package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

import dao.GamerDAO;

public class Score {

	private int id;

	private double time;

	private int nbClick;

	private Gamer gamer;

	private int level;

	private int strategy;

	private Timestamp createdAt = new Timestamp(System.currentTimeMillis());

	public Score() {
		time = 0;
		nbClick = 0;
		gamer = null;
		level = 1;
		strategy = 1;
		createdAt = new Timestamp(System.currentTimeMillis());

	}

	public Score(double time, int nbClick, Gamer gamer, int level, int strategy, Timestamp createdAt) {

		this.time = time;
		this.nbClick = nbClick;
		this.gamer = gamer;
		this.level = level;
		this.strategy = strategy;
		this.createdAt = createdAt;
	}

	public Score(ResultSet result) {
		try {
			id = result.getInt("id");
			time = result.getDouble("duree_seconde");
			nbClick = result.getInt("nbClick");
			gamer = new GamerDAO().findById(result.getInt("id"));
			level = result.getInt("id_level");
			strategy = result.getInt("id_strategy");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public int getId() {
		return id;
	}

	public double getTime() {
		return time;
	}

	public void setTime(double time) {
		this.time = time;
	}

	public int getNbClick() {
		return nbClick;
	}

	public void setNbClick(int nbClick) {
		this.nbClick = nbClick;
	}

	public Gamer getGamer() {
		return gamer;
	}

	public void setGamer(Gamer gamer) {
		this.gamer = gamer;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public int getStrategy() {
		return strategy;
	}

	public void setStrategy(int strategy) {
		this.strategy = strategy;
	}

	public Timestamp getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}

}
