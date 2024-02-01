package com.project.projectFinal.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.ItemDto;
import com.project.projectFinal.dto.itemInfoDto;
import com.project.projectFinal.dto.itemToolTipDto;

@Mapper
public interface itemDao {
	
	public List<HashMap<String, ItemDto>> itemBuild(ItemDto iDto);

	public List<HashMap<String, ItemDto>> itemBuildperTier(ItemDto iDto);

	public List<itemToolTipDto> itemToolTip(int itemId);

	public List<HashMap<String, itemInfoDto>> itemInfo(itemInfoDto iIDto);

}
