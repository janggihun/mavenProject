package com.project.projectFinal.kdgController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.ChampionDto;
import com.project.projectFinal.dto.ItemDto;
import com.project.projectFinal.service.ChampionService;

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

	@PostMapping("/kdg/test")
	public HashMap<String, Object> itemTest(ItemDto IDto) {
		

		HashMap<String, Object> DMap = new HashMap<>();

		List<HashMap<String, ItemDto>> iList = cs.test2(IDto);
		DMap.put("iList", iList);
		
		List<Integer> cntList = new ArrayList<>();
		for (int j = 0; j < iList.size(); j++) {
			String a = String.valueOf(iList.get(j).get("itemId")) ;
			int itemId = Integer.parseInt(a);
			int itemPickAllCount = cs.cntPickItem(itemId,IDto.getMyChampName());
			cntList.add(itemPickAllCount);
		}
		DMap.put("cntList", cntList);
		
		List<HashMap<String, ItemDto>> cList = cs.test(IDto);
		DMap.put("cList", cList);

		List<HashMap<String, ItemDto>> wList = cs.test3(IDto);
		DMap.put("wList", wList);

		log.info("=============== iList : {}", iList);
		log.info("=============== wList : {}", wList);

		return DMap;
	}

	@PostMapping("/kdg/re")
	public List<HashMap<String, String>> reList() {

		return cs.reChampList();

	}

}
