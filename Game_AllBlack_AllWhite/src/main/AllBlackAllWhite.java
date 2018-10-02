package main;

import view.MainFrame;

public class AllBlackAllWhite {

	public static void main(String[] args) {

		javax.swing.SwingUtilities.invokeLater(new Runnable() {
			public void run() {
				new MainFrame();
			}

		});
	}

}
