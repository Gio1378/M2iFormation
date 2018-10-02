package view;

import java.awt.CardLayout;
import java.awt.Component;
import java.util.HashMap;
import java.util.Map;

import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.JPanel;

import graphicElements.AbsView;

@SuppressWarnings("serial")
public class CardsView extends JPanel {

	private static CardLayout layout = new CardLayout();

	public static final String GAME_VIEW_KEY = "game.view";
	public static final String HOME_VIEW_KEY = "home.view";
	public static final String SETTINGS_GAME_VIEW_KEY = "settingsGame.view";
	public static final String SCORE_VIEW_KEY = "score.view";
	public static final String ABOUT_VIEW_KEY = "about.view";

	private Map<AbsView, String> viewStringHash = new HashMap<AbsView, String>();

	public CardsView() {
		setLayout(layout);

	}

	public void add(Component comp, Object constraints) { // polymorphism de la procédure add
		super.add(comp, constraints);
		viewStringHash.put((AbsView) comp, (String) constraints);
	}

	public AbsView getView(String nameView) {
		for (Map.Entry<AbsView, String> entry : viewStringHash.entrySet()) {
			if (entry.getValue().equals(nameView))
				return entry.getKey();
		}
		return null;
	}

	public void show(AbsView view) {
		layout.show(this, viewStringHash.get(view));
	}

	public void showGameView() {
		layout.show(this, GAME_VIEW_KEY);
	}

	public void showHomeView() {
		layout.show(this, HOME_VIEW_KEY);
	}

	public void showSettingsGameView() {
		layout.show(this, SETTINGS_GAME_VIEW_KEY);
	}

	public void showScoreView() {
		layout.show(this, SCORE_VIEW_KEY);
	}

	public void showAboutView() {
		layout.show(this, ABOUT_VIEW_KEY);
	}

}
