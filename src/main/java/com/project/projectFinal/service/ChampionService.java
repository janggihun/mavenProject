package com.project.projectFinal.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.ChampionDao;
import com.project.projectFinal.dto.ChampionImageDto;


@Service
public class ChampionService {

	@Autowired
	ChampionDao cd;

	public List<HashMap<String,String>> champList() {
		
		return cd.champList();
	
	}

	public List<HashMap<String, String>> searchChamp(ChampionImageDto cDto) {
		
		return cd.searchChamp(cDto);
		
	}


	public List<HashMap<String, String>> champLine(ChampionImageDto cDto) {

		if(cDto.getLine().equals("all")) {
			return cd.allChampLine(cDto);
		} else{
			return cd.champLine(cDto);
		}
		
	}


	public List<HashMap<String, String>> reChampList() {
		
		System.out.println("리챔리~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		return cd.reChampList();
		
	}

	
}
