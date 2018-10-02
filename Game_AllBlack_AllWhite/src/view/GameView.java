package view;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import globalSettings.Settings;
import graphicElements.AbsView;
import graphicElements.CVButton;
import graphicElements.Grid;

@SuppressWarnings("serial")
public class GameView extends AbsView{
	
	private CVButton reset;
	private CVButton back;
	private Grid grid ;
	private BorderLayout layout= new BorderLayout();
	
	public GameView(CardsView cardsView, int rows,int cols) {
		this.cardsView = cardsView ;			
		this.cardsView.add(this,CardsView.GAME_VIEW_KEY);
		
		grid = new Grid(rows,cols);
		
		getStyle();
	}

	public GameView(CardsView cardsView) {   //Identification de la class GameView au niveau de la class CardsView
		this.cardsView = cardsView ;			
		this.cardsView.add(this,CardsView.GAME_VIEW_KEY);
		
		grid = new Grid();
		
		getStyle();

	}
	
	
	public Grid getGrid() {
		return grid;
	}
	
	public void setGrid(int rows,int cols) {
		this.grid = new Grid(rows,cols);
	}

	public void getStyle() {
		
		reset = new CVButton("RESET");
		back = new CVButton(Settings.BT_HOME_TITLE);
		
		setLayout(layout);
		add(reset, BorderLayout.NORTH);
		add(grid, BorderLayout.CENTER);
		add(back, BorderLayout.SOUTH);
		addListner();
	}

	private void addListner() {
		reset.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				grid.reset();
				
			}
		});
		
		back.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {			
				cardsView.showHomeView();
				
			}
		});
	}

}
