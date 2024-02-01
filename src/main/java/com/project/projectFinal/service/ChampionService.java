package com.project.projectFinal.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.ChampionDao;
import com.project.projectFinal.dto.ChampionDto;
import com.project.projectFinal.dto.ItemDto;
import com.project.projectFinal.dto.itemToolTipDto;


@Service
public class ChampionService {

	@Autowired
	ChampionDao cd;

	public List<HashMap<String,String>> champList() {
		
		return cd.champList();
	
	}

	public List<HashMap<String, String>> searchChamp(ChampionDto cDto) {
		
		return cd.searchChamp(cDto);
		
	}


	public List<HashMap<String, String>> champLine(ChampionDto cDto) {
		
		return cd.champLine(cDto);
		
	}


	public List<HashMap<String, String>> reChampList() {
		
		return cd.reChampList();
		
	}

	
}
