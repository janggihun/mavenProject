package com.project.projectFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/member")
public class MemberController {

	@Autowired
	MemberService memberService;

	@GetMapping("/login")
	public String login(HttpServletRequest req) {
		
		return "aMain/loginFrm";
	}

	@GetMapping("/join")
	public String join() {

		return "aMain/joinFrm";
	}
	
	@PostMapping("/join")
	public String join(MemberDto memberDto) {
		log.info("=={}",memberDto);
		if (memberService.join(memberDto)) {

			return "redirect:/member/login";
		} else {

			return "redirect:/member/join";
		}
		
	}
	@PostMapping("/member/findId")
	public String findId(MemberDto memberDto,RedirectAttributes redirectAttributes) {
		log.info("===={}",memberDto);
		boolean findId = memberService.findId(memberDto);
		if(findId) {
			redirectAttributes.addFlashAttribute("msg","아이디는"+memberDto.getUserId()+"입니다.");
			return "redirect:/aMain/findId";
		}else {
			redirectAttributes.addFlashAttribute("msg", "찾을수없는정보입니다.");
			return "redirect:/aMain/findId";
		}
//		return "aMain/findId";
	}

}
