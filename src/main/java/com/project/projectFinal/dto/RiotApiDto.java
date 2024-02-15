package com.project.projectFinal.dto;

import java.util.List;

import org.json.simple.JSONObject;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RiotApiDto {

	private String puuid;
	private String gameName; // 라이엇 아이디
	private String tagLine; // 라이엇 태그
	private JSONObject matches;
	private JSONObject timeline;

	private List<RiotApiDto> gameId;
	private List<String> matchId; // 매치 아이디

	// 송태민 추가
	private String riotIdGameName;
	private String gameMode;
	private int matchCnt;
	//장기훈추가
	private String matchIdjustOne;
	private Integer matchIdCnt;
}
