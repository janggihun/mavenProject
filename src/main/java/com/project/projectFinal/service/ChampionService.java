package com.project.projectFinal.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.ChampionDao;
import com.project.projectFinal.dto.ChampionDto;
import com.project.projectFinal.dto.ItemDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
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

	public List<HashMap<String, ItemDto>> test(ItemDto iDto) {
		
		return cd.test(iDto);
		
	}

	public List<HashMap<String, ItemDto>> test2(ItemDto iDto) {

		return cd.test2(iDto);
		
	}

	public List<HashMap<String, String>> reChampList() {
		
		return cd.reChampList();
		
	}

	public List<HashMap<String, ItemDto>> test3(ItemDto iDto) {
		
		return cd.test3(iDto);
		
	}

	public int cntPickItem(int itemId, String myChampName) {
		
		return cd.cntPickItem(itemId,myChampName);
		
	}

	
}
