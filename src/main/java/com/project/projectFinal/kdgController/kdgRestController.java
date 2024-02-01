package com.project.projectFinal.kdgController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.ChampionDto;
import com.project.projectFinal.dto.ItemDto;
import com.project.projectFinal.dto.itemInfoDto;
import com.project.projectFinal.service.ChampionService;
import com.project.projectFinal.service.MainService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class kdgRestController {

	@Autowired
	ChampionService cs;

	@PostMapping("/kdg/search")
	public List<HashMap<String, String>> search(ChampionDto cDto) {

		return cs.searchChamp(cDto);

	}

	@PostMapping("/kdg/position")
	public List<HashMap<String, String>> line(ChampionDto cDto) {

		return cs.champLine(cDto);

	}

	@PostMapping("/kdg/re")
	public List<HashMap<String, String>> reList() {

		return cs.reChampList();

	}

	@PostMapping("/kdg/itemBuild")
	public List<HashMap<String, ItemDto>> itemBuild(ItemDto iDto) {

		return cs.itemBuild(iDto);

	}

	@PostMapping("/kdg/itemBuildperTier")
	public List<HashMap<String, ItemDto>> itemBuildperTier(ItemDto iDto) {

		return cs.itemBuildperTier(iDto);

	}

	@PostMapping("/kdg/itemInfo")
	public List<itemInfoDto> itemInfo(itemInfoDto iIDto) {
		
		int itemId = iIDto.getItemId();
		return cs.itemInfo(itemId);

	}

}
