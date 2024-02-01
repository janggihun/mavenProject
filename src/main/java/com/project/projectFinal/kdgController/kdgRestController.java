package com.project.projectFinal.kdgController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.ChampionDto;
import com.project.projectFinal.dto.ItemDto;
import com.project.projectFinal.dto.itemInfoDto;
import com.project.projectFinal.dto.itemToolTipDto;
import com.project.projectFinal.service.ChampionService;
import com.project.projectFinal.service.MainService;
import com.project.projectFinal.service.itemService;

import lombok.extern.slf4j.Slf4j;
import retrofit2.http.POST;

@Slf4j
@RestController
public class kdgRestController {

	@Autowired
	ChampionService cs;
	
	@Autowired
	itemService is;

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

		return is.itemBuild(iDto);

	}

	@PostMapping("/kdg/itemBuildperTier")
	public List<HashMap<String, ItemDto>> itemBuildperTier(ItemDto iDto) {

		return is.itemBuildperTier(iDto);

	}

	@PostMapping("/kdg/itemInfo")
	public List<itemToolTipDto> itemToolTip(itemToolTipDto iTTDto) {
		
		int itemId = iTTDto.getItemId();
		return is.itemToolTip(itemId);

	}
	
	@PostMapping("/kdg/test")
	public void info() {
		
		
		
	}
	


}
