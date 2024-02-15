package com.project.projectFinal.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.ChampionImageDto;

@Mapper
public interface ChampionDao {

	public List<HashMap<String,String>> champList();

	public List<HashMap<String,String>> searchChamp(ChampionImageDto cDto);

	public List<HashMap<String, String>> champLine(ChampionImageDto cDto);
	
	public List<HashMap<String, String>> reChampList();

	public List<HashMap<String, String>> allChampLine(ChampionImageDto cDto);

}
