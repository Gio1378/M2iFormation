package view;

import graphicElements.AbsView;

@SuppressWarnings("serial")
public class AboutView extends AbsView{

	public AboutView(CardsView cardsView) { //Identification de la class GameView au niveau de la class CardsView
		this.cardsView = cardsView ;			
		this.cardsView.add(this,CardsView.ABOUT_VIEW_KEY);
	}
}

