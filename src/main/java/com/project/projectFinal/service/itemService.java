package com.project.projectFinal.service;

import java.io.Console;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.itemDao;
import com.project.projectFinal.dto.ItemDto;
import com.project.projectFinal.dto.itemInfoDto;
import com.project.projectFinal.dto.itemToolTipDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class itemService {
	
	@Autowired
	itemDao id;
	
	public List<HashMap<String, ItemDto>> itemBuild(ItemDto iDto) {
		
		return id.itemBuild(iDto);
		
	}

	public List<HashMap<String, ItemDto>> itemBuildperTier(ItemDto iDto) {
		
		return id.itemBuildperTier(iDto);
		
	}

	public List<itemToolTipDto> itemToolTip(int itemId) {
		
		return id.itemToolTip(itemId);
		
	}

	
}
