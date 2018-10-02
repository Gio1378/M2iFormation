package view;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.GridLayout;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingConstants;

import globalSettings.Settings;
import graphicElements.AbsView;
import graphicElements.CVButton;

@SuppressWarnings("serial")
public class HomeView extends AbsView{

	private JLabel jlTitle;
	
	private CVButton jbGame, jbSettingsGame, jbScore,jbAbout;
	
	private BorderLayout layout= new BorderLayout();
	
	
	public HomeView(CardsView cardsView) { //Identification de la class homeView au niveau de la class CardsView
		this.cardsView = cardsView ;			
		this.cardsView.add(this,CardsView.HOME_VIEW_KEY);
		
		
		jlTitle = new JLabel(Settings.GAME_TITLE) ;
		jlTitle.setForeground(Color.GREEN);
		jlTitle.setFont(new Font(jlTitle.getFont().getFontName(), Font.BOLD,30));
		jlTitle.setHorizontalAlignment(SwingConstants.CENTER);
		jlTitle.setVerticalAlignment(SwingConstants.CENTER);
		
		setLayout(layout);
		
		GridLayout layoutMenu = new GridLayout(4, 1, 0, 20); //rows, cols , hgap, vgap
		
		JPanel center = new JPanel(layoutMenu);
		
		jbGame = new CVButton(Settings.BT_GAME_TITLE,cardsView.getView(CardsView.GAME_VIEW_KEY));
		jbSettingsGame = new CVButton(Settings.BT_SETTING_GAME_TITLE,cardsView.getView(CardsView.SETTINGS_GAME_VIEW_KEY));
		jbScore = new CVButton(Settings.BT_SCORE_TITLE,cardsView.getView(CardsView.SCORE_VIEW_KEY));
		jbAbout = new CVButton(Settings.BT_ABOUT_TITLE,cardsView.getView(CardsView.ABOUT_VIEW_KEY));
		
		center.add(jbGame) ;
		center.add(jbSettingsGame);
		center.add(jbScore);
		center.add(jbAbout);
		
		add(jlTitle, BorderLayout.NORTH) ;
		add(center,BorderLayout.CENTER) ;
		
	}
	


}
