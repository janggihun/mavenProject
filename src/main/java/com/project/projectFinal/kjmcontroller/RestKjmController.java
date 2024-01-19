package com.project.projectFinal.kjmcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dao.MemberDao;
import com.project.projectFinal.dto.MemberDto;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestController
public class RestKjmController {
	
	
	@Autowired
	MemberDao memberDao;

	
	@PostMapping("/test/ajax")
	public String ajaxtest(MemberDto memberDto) {
		int result = memberDao.ajaxtest(memberDto);
		
		if(result == 1) {
			
			return "중복입니다.";
		}else {
			
			return "사용 가능한 아이디입니다.";
		}
	
		
	}
	
}
