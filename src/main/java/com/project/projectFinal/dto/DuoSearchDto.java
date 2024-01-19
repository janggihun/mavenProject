package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DuoSearchDto {
	
	private int dcnt;
	private String winLose;
	private String userId;
	private String myPosition;
	private String tier;
	private String duoPosition;
	
	private String gameType;
	private String memo;
	private String date;
	

}
