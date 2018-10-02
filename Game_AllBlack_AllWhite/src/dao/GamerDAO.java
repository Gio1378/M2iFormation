package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Gamer;

public class GamerDAO extends DAO<Gamer> {

	public static final String COLUMN_ID = "id_gamer";
	public static final String COLUMN_PSEUDO = "pseudo";
	public static final String COLUMN_CREATED_AT = "created_at";
	public static final String TABLE_NAME = "gamer";

	public GamerDAO() {

	}

	@Override
	public int add(Gamer dto) {

		String requete = "INSERT INTO" + TABLE_NAME + "(" + COLUMN_PSEUDO + ") VALUES(?)";
		int liAffect = 0;

		if (exists(dto.getPseudo())) {

			return liAffect = -1;
		}

		try {

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setString(1, dto.getPseudo());

			liAffect = prepare.executeUpdate();

			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

	@Override
	public List<Gamer> findAll() {

		Gamer gamer;

		List<Gamer> gamers = new ArrayList<Gamer>();

		try {
			ResultSet result = this.connexion.createStatement().executeQuery("SELECT * FROM + " + TABLE_NAME);

			while (result.next()) {

				gamers.add(gamer = new Gamer(result));
			}

			result.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return gamers;
	}

	@Override
	public Gamer findById(int id) {

		Gamer gamers = new Gamer();

		try {
			PreparedStatement prepare = this.connexion
					.prepareStatement("SELECT * FROM " + TABLE_NAME + "WHERE" + COLUMN_ID + " = ?");
			prepare.setInt(1, id);

			ResultSet result = prepare.executeQuery();

			if (result.first())
				gamers = new Gamer(result);

			result.close();
			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return gamers;

	}

	@Override
	public int update(Gamer dto) {

		int liAffect = 0;

		try {

			String requete = "UPDATE" + TABLE_NAME + "SET " + COLUMN_PSEUDO + "= ? WHERE" + COLUMN_ID + " = ?";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setString(1, dto.getPseudo());
			prepare.setInt(2, dto.getId());

			liAffect = prepare.executeUpdate();

			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

	public Gamer findByPseudo(int pseudo) {

		Gamer gamers = new Gamer();

		try {
			PreparedStatement prepare = this.connexion
					.prepareStatement("SELECT * FROM " + TABLE_NAME + "WHERE" + COLUMN_PSEUDO + " = ?");
			prepare.setInt(1, pseudo);

			ResultSet result = prepare.executeQuery();

			if (result.first())
				gamers = new Gamer(result);

			result.close();
			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return gamers;

	}

	@Override
	public int delete(Gamer dto) {

		int liAffect = 0;

		try {

			String requete = "DELETE FROM" + TABLE_NAME + " WHERE" + COLUMN_ID + "= ?";

			PreparedStatement prepare = this.connexion.prepareStatement(requete);

			prepare.setInt(1, dto.getId());

			liAffect = prepare.executeUpdate();

			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return liAffect;
	}

	private boolean exists(String pseudo) {

		boolean res = false;
		try {
			PreparedStatement prepare = this.connexion
					.prepareStatement("SELECT * FROM " + TABLE_NAME + "WHERE" + COLUMN_PSEUDO + " = ?");
			prepare.setString(1, pseudo);

			ResultSet result = prepare.executeQuery();

			res = result.first();

			result.close();
			prepare.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return res;

	}
}
