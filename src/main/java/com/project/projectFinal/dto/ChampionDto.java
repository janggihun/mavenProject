package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChampionDto {
	
	private int championid;
	private String champion_name_kr;
	private String champion_name;
	
	private String searchChamp;
	
}
