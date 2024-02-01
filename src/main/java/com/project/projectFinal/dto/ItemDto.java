package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {
	
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
	
	private int myBuildPickCount;
	private int myBuildwinCount;
	
	
}
