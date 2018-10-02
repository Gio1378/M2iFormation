package graphicElements;

import java.awt.GridLayout;

import javax.swing.JPanel;

import globalSettings.Settings;

@SuppressWarnings("serial")
public class Grid extends JPanel {

	public static int gridCountClick;
	public static long start;
	private GridLayout layout;
	private GBox[][] gridBoxes;

	public Grid() {

		layout = new GridLayout(Settings.DEFAULT_NUMBER_OF_ROWS, Settings.DEFAULT_NUMBER_OF_COLUMNS);
		gridBoxes = new GBox[Settings.DEFAULT_NUMBER_OF_ROWS][Settings.DEFAULT_NUMBER_OF_COLUMNS];
		gridInit();
		start = System.currentTimeMillis();
	}

	public Grid(int rows, int columns) {

		layout = new GridLayout(rows, columns);
		gridBoxes = new GBox[rows][columns];
		gridInit();
		start = System.currentTimeMillis();
	}

	public GBox[][] getGridBoxes() {

		return gridBoxes;
	}

	public GBox getBoxIJ(int i, int j) {

		return gridBoxes[i][j];
	}

	public GBox getLeftBox(GBox source) {
		GBox left = null;
		if (source.getJ() - 1 >= 0)
			left = gridBoxes[source.getI()][source.getJ() - 1];

		return left;
	}

	public GBox getTOPBox(GBox source) {
		GBox top = null;
		if (source.getI() - 1 >= 0)
			top = gridBoxes[source.getI() - 1][source.getJ()];

		return top;
	}

	public GBox getBottomBox(GBox source) {
		GBox bottom = null;
		if (source.getI() + 1 < gridBoxes.length)
			bottom = gridBoxes[source.getI() + 1][source.getJ()];

		return bottom;
	}

	public GBox getRightBox(GBox source) {
		GBox right = null;
		if (source.getJ() + 1 < gridBoxes[0].length)
			right = gridBoxes[source.getI()][source.getJ() + 1];

		return right;
	}

	public void reset() {
		gridCountClick = 0;
		start = 0;
		for (int i = 0; i < gridBoxes.length; i++) {
			for (int j = 0; j < gridBoxes[0].length; j++) {
				gridBoxes[i][j].setBackground(Settings.STARTING_COLOR);
				gridBoxes[i][j].setBorder(Settings.STARTING_LINE_COLOR);
			}
		}
		start = System.currentTimeMillis();
	}

	public void gridInit() {

		setLayout(layout);
		for (int i = 0; i < gridBoxes.length; i++) {
			for (int j = 0; j < gridBoxes[0].length; j++) {
				GBox buttonBox = new GBox(i, j);
				gridBoxes[i][j] = buttonBox;
				add(buttonBox);
			}
		}
	}

}