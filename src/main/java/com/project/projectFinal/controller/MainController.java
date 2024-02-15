
package com.project.projectFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class MainController {

	@Autowired
	MemberService memberService;

	@GetMapping("/")
	public String index() {

		return "newMain";
	}

	@GetMapping("/new")
	public String mainNew() {

		return "newMain";
	}

	@GetMapping("/main")
	public String main(HttpSession session, MemberDto memberDto, Model model) {
		if (session.getAttribute("userId") != null) {
			String userId = (String) session.getAttribute("userId");

			memberDto.setUserId(userId);

			MemberDto mDto = memberService.main(memberDto);
			model.addAttribute("mDto", mDto);
		}
		return "main";
	}

//	@GetMapping("/pay")
//	public String pay() {
//
//		return "payment";
//	}

//	@GetMapping("/shop")
//	public String shop() {
//
//		return "shop";
//	}

	@GetMapping(value = { "/stm/{gameName}/{tagLine}", "/stm" })
	public String searchRiotGameId(@PathVariable(required = false) String gameName,
			@PathVariable(required = false) String tagLine, Model model) {
		log.info("=={}", gameName);

		model.addAttribute("gameName", gameName + "#" + tagLine);

		return "stm/stmmain";
	}



	
}
