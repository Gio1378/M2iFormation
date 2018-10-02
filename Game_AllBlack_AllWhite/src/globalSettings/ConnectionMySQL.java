package globalSettings;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public abstract class ConnectionMySQL implements ConnectionBD {

	private static Connection instance = null;

	private static final String host = ":3306";

	private static final String dataBaseName = "";

	// Options de connections, par exemple, le Time Zone
	private static final String optionsConnection = "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC ";

	// L'url complète de connexion
	private static final String url = "jdbc:mysql:" + "//" + host + "/" + dataBaseName + optionsConnection;

	// Identifiants de connexion à la base de données
	private static final String user = "";
	private static final String password = "";

	private ConnectionMySQL() {
	}

	public static Connection getInstance() {

		if (instance == null) {

			synchronized (instance) {

				try {

					Class.forName("com.mysql.cj.jdbc.Driver");
					// L’objet connexion qui nous permet de communiquer avec la base de données.
					instance = DriverManager.getConnection(url, user, password);
					System.out.println("Connexion effective !");

				} catch (Exception e) {
					e.printStackTrace();
				}

			}
		}

		return instance;

	}

	public static void closeInstance() {

		try {
			instance.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
