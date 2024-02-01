package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {
	
	//tier, matchId, team, win, line, myChampName, enemyChampName, itemId1, itemId2, itemId3
	
	private String tier;
	private int matchId;
	private String team;
	private String win;
	private String line;
	private String myChampName;
	private String enemyChampName;

	private int itemId1;
	private int itemId2;
	private int itemId3;
	
//	===================================== (아이템 픽률) 구
	
//	private int myItemWinCount;
//	private int itemPickCount;
//	private int itemPickAllCount;
//	private double myItemPickRate;
	
//	===================================== (아이템 픽률) 신
	
	private int myBuildPickCount;
	private int myBuildwinCount;
	
	
//	===================================== (챔피언 승률)
	
//	private double myChampWinRate;
//	private int myChampWinCount;
//	private int enemyChampWinCount;
//	private int myChampPickCount;
	
	
}
