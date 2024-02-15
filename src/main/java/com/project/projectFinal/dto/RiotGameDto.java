package com.project.projectFinal.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RiotGameDto {
	private String matchId; // 매치아이디
	private String championName; // 챔피언 이름
	private String riotIdGameName; // 플레이어 아이디
	private String riotIdTagline;// 챔피언 태그
	private int championId; // 챔피언 고유 넘버
	private int teamId; // 팀 아이디
	private boolean firstBloodKill; // 퍼스트 블러드
	private int kills; // 킬
	private int assists; // 어시스트
	private int deaths; // 데스
	private String kda; // kda
	private String gameEndTimestamp; // 게임 끝난 시간
	private String gameStartTimestamp;// 게임 시작 시간
	private String lane; // 라인
//	private List<Integer> legendaryItemUsed; // 사용 리스트 아이템
	private int queueId; // 게임 모드
	private boolean win; // 승패
	private int dragon; // 드래곤
	private int totalAllyJungleMinionsKilled; // 모든 정글 몹 킬
	private int totalDamageDealtToChampions; // 가한 피해량
	private int totalDamageTaken; // 받은 피해량 
	private int totalEnemyJungleMinionsKilled; // 상대 정글 몹 킬
	private int totalMinionsKilled; // 미니언 킬
	private int wardsKilled; // 와드 킬
	private int wardsPlaced; // 시야 점수
	private List<String> matchList;
	private String summonerName;
	private String champion_name_kr;
	private int participantId;
}
