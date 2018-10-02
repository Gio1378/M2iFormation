package dao;

import java.sql.Array;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Gamer;
import model.Score;

public class ScoreDAO extends DAO<Score> {

	private static final String COLUMN_ID = "id_score";
	private static final String COLUMN_TIME_S = "duree_seconde";
	private static final String COLUMN_NB_CLICK = "nbclique";
	private static final String COLUMN_ID_GAMER = "id_gamer";
	private static final String COLUMN_ID_LEVEL = "id_level";
	private static final String COLUMN_ID_STRATEGY = "id_strategy";
	public static final String TABLE_NAME = "score";

	public DAO<Gamer> gamerDAO = new GamerDAO();

	@Override
	public int add(Score dto) {

		int liAffect = 0;

		try {

			String requete = "INSERT INTO score (" + COLUMN_TIME_S + " ," + COLUMN_NB_CLICK + " ," + COLUMN_ID_GAMER
					+ " ," + COLUMN_ID_LEVEL + " ," + COLUMN_ID_STRATEGY + ") VALUES(?,?,?,?,?)";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setDouble(1, dto.getTime());
			prepare.setInt(2, dto.getNbClick());
			prepare.setInt(3, dto.getGamer().getId());
			prepare.setInt(4, dto.getLevel());
			prepare.setInt(5, dto.getStrategy());

			liAffect = prepare.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

	@Override
	public List<Score> findAll() {

		Score score = null;

		List<Score> scores = new ArrayList<Score>();

		try {
			ResultSet result = this.connexion.createStatement().executeQuery("SELECT * FROM " + TABLE_NAME);

			while (result.next()) {

				scores.add(score = new Score(result));
			}
			
			result.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return scores;
	}
	
	public Object[] findHeads(){
		
		List<String> heads = new ArrayList<String>();
		try {
			ResultSet result = this.connexion.createStatement().executeQuery("SELECT * FROM " + TABLE_NAME);
		ResultSetMetaData resultMeta = result.getMetaData();
		
		for (int i = 1; i < resultMeta.getColumnCount(); i++)
			heads.add(resultMeta.getColumnName(i));
		
		result.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		return heads.toArray();
	}

	@Override
	public Score findById(int id) {

		Score score = null;

		try {
			PreparedStatement prepare = this.connexion
					.prepareStatement("SELECT * FROM " + TABLE_NAME + " WHERE" + COLUMN_ID + " = ?");
			prepare.setInt(1, id);

			ResultSet result = prepare.executeQuery();

			if (result.first())
				score = new Score(result);

			result.close();
			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return score;

	}

	@Override
	public int update(Score dto) {

		int liAffect = 0;

		try {

			String requete = "UPDATE score SET " + COLUMN_TIME_S + " = ?," + COLUMN_NB_CLICK + " = ?," + COLUMN_ID_GAMER
					+ " = ?," + COLUMN_ID_LEVEL + " = ?," + COLUMN_ID_STRATEGY + " = ? WHERE" + COLUMN_ID + " = ?";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setDouble(1, dto.getTime());
			prepare.setInt(2, dto.getNbClick());
			prepare.setInt(3, dto.getGamer().getId());
			prepare.setInt(4, dto.getLevel());
			prepare.setInt(5, dto.getStrategy());

			liAffect = prepare.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

	@Override
	public int delete(Score dto) {

		int liAffect = 0;

		try {

			String requete = "DELETE FROM " + TABLE_NAME + " WHERE" + COLUMN_ID + " = ?";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setInt(1, dto.getId());

			liAffect = prepare.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

}
