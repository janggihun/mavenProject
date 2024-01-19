package com.project.projectFinal.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDto {

	private int pCnt;
	private String userId;
	private int userCash;
	private int userPoint;
	private Date pDate ;
	private String pg;
}
