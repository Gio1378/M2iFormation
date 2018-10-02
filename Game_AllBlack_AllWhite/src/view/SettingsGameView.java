package view;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.GroupLayout;
import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.LayoutStyle;
import javax.swing.SwingConstants;

import globalSettings.Settings;
import graphicElements.AbsView;
import graphicElements.CVButton;
import graphicElements.ImagePanel;
import utilities.Rules;
import utilities.SimpleRules;

@SuppressWarnings("serial")
public class SettingsGameView extends AbsView {

	private BorderLayout layout = new BorderLayout();
	private CVButton back, easy, medium, hard, alternativeMode;
	private GameView gameView;

	public SettingsGameView() {
		getStyle();
	}

	public SettingsGameView(CardsView cardsView) { // Identification de la class SettingsView au niveau de la class
													// CardsView
		this.cardsView = cardsView;
		this.cardsView.add(this, CardsView.SETTINGS_GAME_VIEW_KEY);
		getStyle();
	}

	/**
	 * 
	 * 
	 */
	private void getStyle() {
		JLabel jlTitle = new JLabel(Settings.BT_SETTING_GAME_TITLE);
		jlTitle.setForeground(Color.GREEN);
		jlTitle.setFont(new Font(jlTitle.getFont().getFontName(), Font.BOLD, 20));
		jlTitle.setHorizontalAlignment(SwingConstants.CENTER);
		jlTitle.setVerticalAlignment(SwingConstants.CENTER);

		back = new CVButton(Settings.BT_HOME_TITLE);

		easy = new CVButton("Facile");
		easy.setBackground(Settings.STARTING_COLOR);

		medium = new CVButton("Moyen");
		hard = new CVButton("Difficile");
		alternativeMode = new CVButton("Mode Alternatif");

		JPanel center = new JPanel();

		GroupLayout centerLayout = new GroupLayout(center); // Double association du GroupLayout à un panel (1)

		setLayout(layout);

		center.setLayout(centerLayout); // Double association du GroupLayout à un panel (2)

		centerLayout.setAutoCreateContainerGaps(true);
		centerLayout.setAutoCreateGaps(true);

		centerLayout.setHorizontalGroup(centerLayout.createParallelGroup(GroupLayout.Alignment.CENTER)
				.addGroup(centerLayout.createSequentialGroup()
						.addPreferredGap(LayoutStyle.ComponentPlacement.RELATED, GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
						.addComponent(easy, GroupLayout.PREFERRED_SIZE, 150, GroupLayout.PREFERRED_SIZE)
						.addPreferredGap(LayoutStyle.ComponentPlacement.RELATED, GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
						.addComponent(medium, GroupLayout.PREFERRED_SIZE, 150, GroupLayout.PREFERRED_SIZE)
						.addPreferredGap(LayoutStyle.ComponentPlacement.RELATED, GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
						.addComponent(hard, GroupLayout.PREFERRED_SIZE, 150, GroupLayout.PREFERRED_SIZE)
						.addPreferredGap(LayoutStyle.ComponentPlacement.RELATED, GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
				.addComponent(alternativeMode, GroupLayout.PREFERRED_SIZE, 450, GroupLayout.PREFERRED_SIZE)

		);
		
		centerLayout.setVerticalGroup(centerLayout.createSequentialGroup().addContainerGap(100, 100)
				.addGroup(centerLayout.createParallelGroup(GroupLayout.Alignment.LEADING)
						.addComponent(easy, GroupLayout.PREFERRED_SIZE, 80, GroupLayout.PREFERRED_SIZE)
						.addComponent(medium, GroupLayout.PREFERRED_SIZE, 80, GroupLayout.PREFERRED_SIZE)
						.addComponent(hard, GroupLayout.PREFERRED_SIZE, 80, GroupLayout.PREFERRED_SIZE))
				.addContainerGap(100, 100)
				.addComponent(alternativeMode, GroupLayout.PREFERRED_SIZE, 80, GroupLayout.PREFERRED_SIZE)

		);

		add(jlTitle, BorderLayout.NORTH);
		add(center, BorderLayout.CENTER);
		add(back, BorderLayout.SOUTH);
		addListner();
	}

	/**
	 * 
	 */
	private void addListner() {
		back.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {

				if (easy.getBackground().equals(Settings.STARTING_COLOR)
						|| medium.getBackground().equals(Settings.STARTING_COLOR)
						|| hard.getBackground().equals(Settings.STARTING_COLOR)) {
					Rules simpleRules = new SimpleRules(gameView.getGrid());
					simpleRules.apply();

					cardsView.showHomeView();
				} else
					JOptionPane.showMessageDialog(null, "Veuillez renseigner un niveau de Difficulté !",
							"Niveau de Difficulté", JOptionPane.WARNING_MESSAGE);
			}
		});

		easy.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				CVButton source = (CVButton) e.getSource();
				source.changeColor();
				gameView = new GameView(cardsView, Settings.DEFAULT_NUMBER_OF_ROWS, Settings.DEFAULT_NUMBER_OF_COLUMNS);

				if (medium != null)
					medium.changeColor(source);
				if (hard != null)
					hard.changeColor(source);
			}
		});

		medium.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				CVButton source = (CVButton) e.getSource();
				source.changeColor();
				gameView = new GameView(cardsView, Settings.MEDIUM_NUMBER_OF_ROWS, Settings.MEDIUM_NUMBER_OF_COLUMNS);

				if (easy != null)
					easy.changeColor(source);
				if (hard != null)
					hard.changeColor(source);
			}
		});

		hard.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				CVButton source = (CVButton) e.getSource();
				source.changeColor();
				gameView = new GameView(cardsView, Settings.HARD_NUMBER_OF_ROWS, Settings.HARD_NUMBER_OF_COLUMNS);

				if (easy != null)
					easy.changeColor(source);
				if (medium != null)
					medium.changeColor(source);
			}
		});
		alternativeMode.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				CVButton source = (CVButton) e.getSource();
				source.changeColor();
			}
		});
	}

}
