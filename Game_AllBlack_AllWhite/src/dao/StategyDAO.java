package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import model.Strategy;
import utilities.CrossRules;
import utilities.SimpleRules;

public class StategyDAO extends DAO<Strategy> {

	public static final String COLUMN_ID = "id_strategy";
	public static final String COLUMN_TITRE = "titre";
	public static final String COLUMN_DESCRIPTION = "description";
	public static final String TABLE_NAME = "strategy";

	@Override
	public int add(Strategy dto) {

		int liAffect = 0;

		try {

			String requete = "INSERT INTO " + TABLE_NAME + " (" + COLUMN_TITRE + ", " + COLUMN_DESCRIPTION
					+ ") VALUES(?,?)";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setString(1, dto.getTitre());
			prepare.setString(2, dto.getDescription());

			liAffect = prepare.executeUpdate();

			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

	@Override
	public List<Strategy> findAll() {

		return null;
	}

	@Override
	public Strategy findById(int id) {

		Strategy strategy = null;

		try {
			PreparedStatement prepare = this.connexion
					.prepareStatement("SELECT * FROM " + TABLE_NAME + " WHERE" + COLUMN_ID + " = ?");
			prepare.setInt(1, id);

			ResultSet result = prepare.executeQuery();

			if (result.first())
				strategy = id == 1 ? new SimpleRules() : new CrossRules();

			result.close();
			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return strategy;

	}

	@Override
	public int update(Strategy dto) {

		int liAffect = 0;

		try {

			String requete = "UPDATE " + TABLE_NAME + " SET " + COLUMN_TITRE + " = ?, " + COLUMN_DESCRIPTION
					+ " = ? WHERE " + COLUMN_ID + " = ?";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setString(1, dto.getTitre());
			prepare.setString(2, dto.getDescription());
			prepare.setInt(3, dto.getId());

			liAffect = prepare.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

	@Override
	public int delete(Strategy dto) {

		int liAffect = 0;

		try {

			String requete = "DELETE FROM " + TABLE_NAME + " WHERE " + COLUMN_ID + " = ?";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setInt(1, dto.getId());

			liAffect = prepare.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}
}
