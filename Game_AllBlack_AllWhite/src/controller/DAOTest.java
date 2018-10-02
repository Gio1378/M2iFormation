package controller;

import java.util.ArrayList;
import java.util.List;

import dao.GamerDAO;
import model.Gamer;

public class DAOTest {
	
	public static void main(String[] args) {
		
		int gamer1 = new GamerDAO().add(new Gamer("patinette")); 

		List<Gamer> gamerDao = new GamerDAO().findAll();
		
		for (Gamer gamer : gamerDao)
		System.out.println(gamer.getId()+" "+gamer.getPseudo()+" "+gamer.getCreatedAt());
		
	}

}
