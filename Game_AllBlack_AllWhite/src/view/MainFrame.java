package view;

import java.awt.BorderLayout;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.border.Border;

import globalSettings.Settings;
import globalSettings.SystemCache;
import model.Strategy;
import utilities.SimpleRules;

@SuppressWarnings("serial")
public class MainFrame extends JFrame {

	private BorderLayout layout = new BorderLayout();
	private static CardsView cardsView = new CardsView();
	private SettingsGameView settingsGame = new SettingsGameView(cardsView);
	private GameView gameView = new GameView(cardsView);
	private static ScoreView scoreView;
	private AboutView aboutView = new AboutView(cardsView);
	private HomeView homeView = new HomeView(cardsView);
	public static SystemCache cache = new SystemCache();

	private Strategy simpleRules;

	public MainFrame() {

		JLabel JLBackground = new JLabel();

		JLBackground.setIcon(new ImageIcon("images/IMG_0109.jpg"));

		setLayout(layout);
		JLBackground.setLayout(new BorderLayout());

		setTitle(Settings.GAME_TITLE);
		setPreferredSize(Settings.DEFAULT_WINDOW_DIM);

		simpleRules = new SimpleRules(gameView.getGrid());
		simpleRules.apply();

		Border padding = BorderFactory.createEmptyBorder(10, 10, 10, 10);
		cardsView.setBorder(padding);

		setDefaultCloseOperation(EXIT_ON_CLOSE);

		setContentPane(JLBackground);

		cardsView.showHomeView();

		getContentPane().add(cardsView);
		pack();
		setVisible(true);

	}

	public static void updateScore() {
		scoreView = new ScoreView(cardsView);
	}
}
