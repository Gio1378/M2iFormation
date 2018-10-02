package globalSettings;

import java.util.prefs.Preferences;

public class SystemCache {

	private static Preferences prefs;

	public static final String PSEUDO_KEY = "pseudo_gamer";
	public static final String ID_KEY = "id_gamer";
	public static final String STRATEGY_KEY = "id_strategy";
	public static final String LEVEL_KEY = "id_level";

	public SystemCache() {

		prefs = Preferences.userRoot().node(this.getClass().getName());
	}

	public void putGamerPseudo(String pseudo) {

		prefs.put(PSEUDO_KEY, pseudo);

	}

	public void putGamerId(int id) {

		prefs.putInt(ID_KEY, id);
	}

	public int getGamerId() {
		return prefs.getInt(ID_KEY, 1);
	}

	public void putLevelId(int id) {
		prefs.putInt(LEVEL_KEY, 1);
	}

	public int getLevelId() {
		return prefs.getInt(LEVEL_KEY, 1);
	}

	public void putStrategylId(int id) {
		prefs.putInt(STRATEGY_KEY, 1);
	}

	public int getStrategyId() {
		return prefs.getInt(STRATEGY_KEY, 1);
	}

}
