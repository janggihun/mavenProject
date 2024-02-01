package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class itemInfoDto {
	
	private String tier;
	private int itemId;
	private int itemNum;
	
	private String itemPickChamp1;
	private int itemPickCnt1;
	private String itemPickChamp2;
	private int itemPickCnt2;
	private String itemPickChamp3;
	private int itemPickCnt3;
	private String itemPickChamp4;
	private int itemPickCnt4;
	private String itemPickChamp5;
	private int itemPickCnt5;
	
	private int itemCnt;
	private int allItemCnt;
	private int itemWinCnt;
	
	private String line1;
	private int lineCnt1;
	private String line2;
	private int lineCnt2;
	private String line3;
	private int lineCnt3;
	private String line4;
	private int lineCnt4;
	private String line5;
	private int lineCnt5;
	
	private int lineAllCnt;

}
