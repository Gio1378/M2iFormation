package graphicElements;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;

import globalSettings.Settings;

@SuppressWarnings("serial")
public class CVButton extends JButton {

	private AbsView view;

	public CVButton(String title) {

		setText(title);
		getStyle();
	}

	public CVButton(String title, AbsView view) {
		this.view = view;
		setText(title);
		getStyle();
		addListener();
	}

	public void getStyle() {

		setBackground(Color.DARK_GRAY);
		setForeground(Color.GREEN);
		setFont(new Font(getFont().getFontName(), Font.ITALIC, 16));
		setOpaque(true);
		setVisible(true);
		setBorderPainted(true);
		setBorder(Settings.STARTING_LINE_COLOR);
	}

	public void addListener() {
		addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				view.cardsView.show(view);

			}
		});
	}

	public void changeColor() {

		if (getBackground().equals(Color.DARK_GRAY))
			setBackground(Settings.STARTING_COLOR);
		else
			setBackground(Color.DARK_GRAY);
	}

	public void changeColor(CVButton source) {

		if (source.getBackground().equals(Settings.STARTING_COLOR))
			setBackground(Color.DARK_GRAY);
	}
}
