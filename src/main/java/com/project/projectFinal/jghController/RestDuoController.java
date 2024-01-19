package com.project.projectFinal.jghController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestDuoController {

	@Autowired
	MemberService memberService;

	@PostMapping("/saveDb")
	public DuoSearchDto saveDb(DuoSearchDto duoSearchDto) {
		if (duoSearchDto.getUserId() == "") {

			duoSearchDto.setUserId("비회원");
		}
//		log.info("==========={}",duoSearchDto);

		return memberService.saveDbDuo(duoSearchDto);
	}

	@PostMapping("/deleteById")
	public boolean deleteById(DuoSearchDto duoSearchDto, HttpSession session) {

		if (memberService.infoDuoT(duoSearchDto).getUserId().equals(session.getAttribute("userId"))) {

			memberService.deleteDuo(duoSearchDto);
			return true;
		} else {
			return false;

		}
	}

	@PostMapping("/comparedcnt")
	public DuoSearchDto comparedcnt(DuoSearchDto duoSearchDto) {

		log.info("=={}", duoSearchDto);

		return memberService.comparedcnt(duoSearchDto);

	}
}
