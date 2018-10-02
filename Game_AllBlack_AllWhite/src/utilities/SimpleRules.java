package utilities;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JOptionPane;

import controller.ScoreController;
import graphicElements.GBox;
import graphicElements.Grid;
import model.Strategy;
import view.MainFrame;

public class SimpleRules extends Strategy {

	private Grid grid;
	private double gridTime;

	public SimpleRules(Grid grid) {
		this.grid = grid;
		MainFrame.cache.putStrategylId(1);
	}

	public SimpleRules() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void apply() {
		for (int i = 0; i < grid.getGridBoxes().length; i++) {
			for (int j = 0; j < grid.getGridBoxes()[0].length; j++) {
				grid.getBoxIJ(i, j).addActionListener(new RulesSimpleListener());
			}
		}
	}

	class RulesSimpleListener implements ActionListener {

		@Override
		public void actionPerformed(ActionEvent e) {

			Grid.gridCountClick++;

			GBox source = (GBox) e.getSource();
			source.changeColor();

			GBox top = grid.getTOPBox(source);
			if (top != null)
				top.changeColor();

			GBox bottom = grid.getBottomBox(source);
			if (bottom != null)
				bottom.changeColor();

			GBox left = grid.getLeftBox(source);
			if (left != null)
				left.changeColor();

			GBox right = grid.getRightBox(source);
			if (right != null)
				right.changeColor();

			if (isDone(grid)) {
				gridTime = (System.currentTimeMillis() - Grid.start);
				if (JOptionPane.showConfirmDialog(null, "Vous avez gagné !, voulez-vous sauvegarder votre résultat",
						"Bravo!", JOptionPane.YES_NO_OPTION) == JOptionPane.YES_OPTION) {
					ScoreController.addNewScore(gridTime);
				}

				grid.reset();
			}
		}

	}

}
