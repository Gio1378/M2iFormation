package utilities;

import globalSettings.Settings;
import graphicElements.Grid;

public interface Rules {

	public void apply();

	public default boolean isDone(Grid grid) {

		for (int i = 0; i < grid.getGridBoxes().length; i++) {
			for (int j = 0; j < grid.getGridBoxes()[0].length; j++) {
				if (grid.getBoxIJ(i, j).getBackground().equals(Settings.STARTING_COLOR)) {
					return false;
				}
			}
		}
		return true;
	}

}
