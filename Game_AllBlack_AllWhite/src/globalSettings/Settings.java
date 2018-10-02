package globalSettings;

import java.awt.Color;
import java.awt.Dimension;

import javax.swing.border.LineBorder;

public class Settings {

	public static final String GAME_TITLE = "All BLACK & All GREEN";
	public static final String BT_GAME_TITLE = "Nouvelle Partie";
	public static final String BT_SETTING_GAME_TITLE = "Paramètres";
	public static final String BT_SCORE_TITLE = "Meilleurs scores";
	public static final String BT_ABOUT_TITLE = "À propos";
	public static final String BT_HOME_TITLE = "PRECEDENT";
	public static final int DEFAULT_NUMBER_OF_ROWS = 5;
	public static final int MEDIUM_NUMBER_OF_ROWS = 7;
	public static final int HARD_NUMBER_OF_ROWS = 9;
	public static final int DEFAULT_NUMBER_OF_COLUMNS = 5;
	public static final int MEDIUM_NUMBER_OF_COLUMNS = 7;
	public static final int HARD_NUMBER_OF_COLUMNS = 9;
	public static final Dimension DEFAULT_WINDOW_DIM = new Dimension(800, 600);
	public static final Color STARTING_COLOR = Color.BLACK;
	public static final Color TERMINAL_COLOR = Color.GREEN;
	public static final LineBorder STARTING_LINE_COLOR = new LineBorder(Color.GREEN);
	public static final LineBorder TERMINAL_LINE_COLOR = new LineBorder(Color.BLACK);

}
