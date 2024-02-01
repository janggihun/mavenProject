package com.project.projectFinal.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dto.RiotApiDto;
import com.project.projectFinal.dto.itemToolTipDto;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MainService {

	@Autowired
	WebClientService webClientServiceImpl;

	public List<String> puuId(String gameName, String tagLine) {
		
		List<RiotApiDto> iList = new LinkedList<>();

		String puuid = webClientServiceImpl.getPuuId(gameName, tagLine);
		List<String> gList = webClientServiceImpl.getgameid(puuid);

		return gList;

	}

	public ArrayList<HashMap<String, Object>> mainInfo(List<String> mList) {

		// 역직렬화 : 롤 리스트는 Stri 으로 받으며 json으로 들어오는데 그걸 다시 list로 변환해주는 것

		ArrayList<HashMap<String, Object>> lolList = new ArrayList<>();
		HashMap<String, Object> mMap = new HashMap<>();
		for (int i = 0; i < mList.size(); i++) {
			
			mMap.put("matches",webClientServiceImpl.getgameinfo(mList.get(i)));
			mMap.put("timeline",webClientServiceImpl.getgameTimeline(mList.get(i)));
			lolList.add(mMap);
		}
		return lolList;
	}

}
