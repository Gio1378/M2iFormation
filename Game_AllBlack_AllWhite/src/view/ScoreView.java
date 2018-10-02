package view;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.ScrollPane;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.SwingConstants;

import controller.ScoreController;
import globalSettings.Settings;
import graphicElements.AbsView;
import graphicElements.CVButton;

@SuppressWarnings("serial")
public class ScoreView extends AbsView{
	
	private JLabel jlTitle;
	private CVButton back;
	
	private BorderLayout layout= new BorderLayout();
	
	public ScoreView(CardsView cardsView) {
		this.cardsView = cardsView;			
		this.cardsView.add(this,CardsView.SCORE_VIEW_KEY);
		getStyle();
	}

	public void getStyle() {
		
		jlTitle = new JLabel(Settings.BT_SCORE_TITLE) ;
		jlTitle.setForeground(Color.GREEN);
		jlTitle.setFont(new Font(jlTitle.getFont().getFontName(), Font.BOLD,30));
		jlTitle.setHorizontalAlignment(SwingConstants.CENTER);
		jlTitle.setVerticalAlignment(SwingConstants.CENTER);
		
		setLayout(layout);
		
		Object[] dataList = ScoreController.getAllScores();
		Object [] columnNames = ScoreController.getHeadScores();
		
		Object[][] data = new String[columnNames.length][];
		
		for (int i = 0; i < data.length; i++) {
			
			data[i] = (Object[]) dataList[i];
		}
		
 		JPanel center = new JPanel();
		JTable scoreTable = new JTable(data,columnNames);
		
		JScrollPane scrollPane = new JScrollPane(scoreTable);
		scoreTable.setFillsViewportHeight(true);
		scoreTable.setBackground(Settings.STARTING_COLOR);
		scoreTable.setSelectionBackground(Settings.TERMINAL_COLOR);
		
		center.add(scrollPane);
		
		back = new CVButton(Settings.BT_HOME_TITLE);
		
		
		add(jlTitle, BorderLayout.NORTH);
		add(center, BorderLayout.CENTER);
		add(back, BorderLayout.SOUTH);
	}
}
