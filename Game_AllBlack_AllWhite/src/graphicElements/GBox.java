package graphicElements;

import javax.swing.JButton;

import globalSettings.Settings;

@SuppressWarnings("serial")
public class GBox extends JButton {

	private int i;
	private int j;

	public GBox() {
	}

	public GBox(int i, int j) {
		this.i = i;
		this.j = j;
		setBackground(Settings.STARTING_COLOR);
		setOpaque(true);
		setVisible(true);
		setBorderPainted(true);
		setBorder(Settings.STARTING_LINE_COLOR);

	}

	public int getI() {
		return i;
	}

	public void setI(int i) {
		this.i = i;
	}

	public int getJ() {
		return j;
	}

	public void setJ(int j) {
		this.j = j;
	}

	public void changeColor() {

		if (getBackground().equals(Settings.STARTING_COLOR)) {
			setBackground(Settings.TERMINAL_COLOR);
			setBorder(Settings.TERMINAL_LINE_COLOR);
		} else {
			setBackground(Settings.STARTING_COLOR);
			setBorder(Settings.STARTING_LINE_COLOR);
		}
	}

}
