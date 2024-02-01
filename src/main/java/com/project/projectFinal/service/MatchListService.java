package com.project.projectFinal.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.RiotGameDao;
import com.project.projectFinal.dto.RiotApiDto;
import com.project.projectFinal.dto.RiotGameDto;

@Service
public class MatchListService {
	@Autowired
	WebMatchListService webmatchListService;
	@Autowired
	RiotGameDao riotGameDao;
	public String puuId(RiotApiDto userListDto) {
		String puuid = webmatchListService.getpuuId(userListDto.getGameName(), userListDto.getTagLine());
		  return puuid;
	}

	public List<String> MatchList(String puuid) {
		
		
		List<String>  MList = webmatchListService.MatchList(puuid);
		
		
		return MList;
		
		
	}

	public List<Map> gamedate(List<String> matchList) {
		List<Map> MList = new ArrayList<>();
		for(int i=0; i<matchList.size(); i++) {
			Map gMap = webmatchListService.gamedate(matchList.get(i));
			MList.add(gMap);
		}
		return MList;
	}

	public void RiotGameInfo(Map<String, RiotGameDto> rMap) {
		riotGameDao.RiotGameInfo(rMap);
	}

	public void RiotGameTeams(Map<String, RiotGameDto> rMap) {
		riotGameDao.RiotGameTeams(rMap);
		
	}

	public void RiotGameBans(Map<String, RiotGameDto> rMap) {
		riotGameDao.RiotGameBans(rMap);
		
	}

	public List<HashMap<String, RiotGameDto>> RiotGameInfoSelect(String matchId) {
		return riotGameDao.RiotGameInfoSelect(matchId);
	}

	public List<HashMap<String, RiotGameDto>> RiotGameTeamsSelect(String matchId) {
		return riotGameDao.RiotGameTeamsSelect(matchId);
		
	}

	public List<HashMap<String, RiotGameDto>> RiotGameBansSelect(String matchId) {
		return riotGameDao.RiotGameBansSelect(matchId);
		
	}

	public List<String> DBRiotGameMatchSelect(String gameName) {
		 return riotGameDao.DBRiotGameMatchSelect(gameName);
		
	}

	public List<Map> DbriotGameData(List<String> matchList) {
		List<Map> MList = new ArrayList<>();
		for(int i=0; i<matchList.size(); i++) {
			Map gMap = riotGameDao.DbriotGameData(matchList.get(i));
			MList.add(gMap);
		}
		System.out.println(MList);
		return MList;
	}

	public int getMatchId(String matchId) {
		int riotcount = riotGameDao.getMatchId(matchId);
		return riotcount;
	}


	
}