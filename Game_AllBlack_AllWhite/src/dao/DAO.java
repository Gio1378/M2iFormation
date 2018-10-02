package dao;

import java.sql.Connection;
import java.util.List;

import globalSettings.ConnectionMySQL;

public abstract class DAO<O> {

	protected Connection connexion = ConnectionMySQL.getInstance();

	public abstract int add(O dto); // les fonctions abstraites n'ont pas de corps

	public abstract List<O> findAll();

	public abstract O findById(int id);

	public abstract int update(O dto);

	public abstract int delete(O dto);
}
