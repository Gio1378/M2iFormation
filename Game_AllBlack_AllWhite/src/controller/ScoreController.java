package controller;

import java.sql.Timestamp;
import java.util.List;

import dao.DAO;
import dao.GamerDAO;
import dao.ScoreDAO;
import dao.StategyDAO;
import graphicElements.Grid;
import model.Gamer;
import model.Level;
import model.Score;
import model.Strategy;
import view.MainFrame;

public class ScoreController extends Controller {

	private static DAO<Score> scoreDAO = new ScoreDAO();
	private static DAO<Strategy> strategyDAO = new StategyDAO();
	private static DAO<Gamer> gamerDAO = new GamerDAO();

	public static void addNewScore(Double time) {

		Score score = new Score(time, Grid.gridCountClick, gamerDAO.findById(MainFrame.cache.getGamerId()),
				MainFrame.cache.getLevelId(), MainFrame.cache.getStrategyId(),
				new Timestamp(System.currentTimeMillis()));
		scoreDAO.add(score);
		MainFrame.updateScore();
	}

	public static Object[] getAllScores() {
		
		Object[] data = scoreDAO.findAll().toArray();
		
		return data;
	}
	
	public static Object[] getHeadScores(){
		
		return  ((ScoreDAO) scoreDAO).findHeads();
	}

}
