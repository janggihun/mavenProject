package com.project.projectFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/member")
public class RestMemberController {

	@Autowired
	MemberService memberService;

	@PostMapping("/join/idCheck")
	public MemberDto joinIdCheck(MemberDto memberDto, Model model) {
		MemberDto mDto = memberService.joinIdCheck(memberDto);
		return mDto;
	}

	@PostMapping("/addRoulette")
	public MemberDto addRoulette(MemberDto memberDto, HttpSession httpSession) {
		String userId = (String) httpSession.getAttribute("userId");
		memberDto.setUserId(userId);
		return memberService.addRoulette(memberDto);

	}

	@PostMapping("/rouletteInfo")
	public MemberDto rouletteInfo(MemberDto memberDto, HttpSession httpSession) {
//		log.info("aaa");
		String userId = (String) httpSession.getAttribute("userId");
		memberDto.setUserId(userId);
		return memberService.rouletteInfo(memberDto);

	}
	@PostMapping("/minusRoulette")
	public MemberDto minusRoulette(MemberDto memberDto, HttpSession httpSession) {
//		log.info("aaa");
		String userId = (String) httpSession.getAttribute("userId");
		memberDto.setUserId(userId);
		return memberService.minusRoulette(memberDto);

	}
	

}
