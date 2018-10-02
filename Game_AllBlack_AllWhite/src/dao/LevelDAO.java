package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Level;

public class LevelDAO extends DAO<Level> {

	public static final String COLUMN_ID = "id_level";
	public static final String COLUMN_LIBELLE = "libelle";
	public static final String COLUMN_NB_L = "nbL";
	public static final String COLUMN_NB_C = "nbC";
	public static final String COLUMN_CREATED_AT = "created_at";
	public static final String TABLE_NAME = "gamer";

	@Override
	public int add(Level dto) {

		int liAffect = 0;

		try {

			String requete = "INSERT INTO " + TABLE_NAME + "(" + COLUMN_LIBELLE + ") VALUES(?)";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setString(1, dto.getLibelle());

			liAffect = prepare.executeUpdate();

			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

	@Override
	public List<Level> findAll() {

		Level level;

		List<Level> allLevel = new ArrayList<Level>();

		try {
			ResultSet result = this.connexion.createStatement().executeQuery("SELECT * FROM " + TABLE_NAME);

			while (result.next()) {

				allLevel.add(level = new Level(result));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return allLevel;
	}

	@Override
	public Level findById(int id) {

		Level level = new Level();

		try {

			PreparedStatement prepare = this.connexion
					.prepareStatement("SELECT * FROM" + TABLE_NAME + "WHERE" + COLUMN_ID + " = ?");

			ResultSet result = prepare.executeQuery();

			if (result.first())
				level = new Level(result);

			result.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return level;

	}

	@Override
	public int update(Level dto) {

		int liAffect = 0;

		try {

			String requete = "UPDATE " + TABLE_NAME + " SET (" + COLUMN_LIBELLE + " = ?, " + COLUMN_NB_L + " = ?,"
					+ COLUMN_NB_C + " = ?) WHERE " + COLUMN_ID + " = ?";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setString(1, dto.getLibelle());
			prepare.setInt(2, dto.getNbL());
			prepare.setInt(3, dto.getNbC());
			prepare.setInt(4, dto.getId());

			liAffect = prepare.executeUpdate();

			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

	@Override
	public int delete(Level dto) {

		int liAffect = 0;

		try {

			String requete = "DELETE FROM " + TABLE_NAME + "WHERE " + COLUMN_ID + " = ?";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setInt(1, dto.getId());

			liAffect = prepare.executeUpdate();

			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}
}
