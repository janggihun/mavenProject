package com.project.projectFinal.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JhlChampDto {
	// 새로운 db 만들 예정
	private int championid;
	private String champion_name_kr;
	private String champion_name;
	private String champion_name_cons;
	private String line;
}
