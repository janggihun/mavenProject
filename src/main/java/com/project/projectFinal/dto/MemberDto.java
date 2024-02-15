package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto {

	private String userId;
	private String userPw;
	private String userEmail;
	private int userPoint;
	private int loginNow; // 현재 로그인 확인용
	private	int rouletteCount;

	private String role;

	@Builder
	public MemberDto(String userId, String userPw, String role) {
		this.userId = userId;
		this.userPw = userPw;
		this.role = role;

	}

}
