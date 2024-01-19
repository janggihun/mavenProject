package com.project.projectFinal.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.ChampionDto;
import com.project.projectFinal.dto.ItemDto;

@Mapper
public interface ChampionDao {

	public List<HashMap<String,String>> champList();

	public List<HashMap<String,String>> searchChamp(ChampionDto cDto);

	public List<HashMap<String,ItemDto>> item(ItemDto iDto);

	public List<HashMap<String, String>> champLine(ChampionDto cDto);

}
