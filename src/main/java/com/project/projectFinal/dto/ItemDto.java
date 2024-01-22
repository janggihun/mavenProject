package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {

	private int match_id;
	private int participant_id;
	
	private String myChampName;
	private String enemyChampName;
	
	private String line;
	private String team;
	private String win;
	private String tier;
	
	private int item_id;
	private String name;
	private int cnt;
	
//	===================================== (아이템 픽률)
	
	private int myItemWinCount;
	private int itemPickCount;
	private int itemPickAllCount;
	private double myItemPickRate;
	
	
//	===================================== (챔피언 승률)
	
	private double myChampWinRate;
	private int myChampWinCount;
	private int enemyChampWinCount;
	private int myChampPickCount;
	
	
}
