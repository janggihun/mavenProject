
package com.project.projectFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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

		return "main";
	}

	@GetMapping("/main")
	public String main(HttpSession session, MemberDto memberDto, Model model) {
		if (session.getAttribute("userId") != null) {
			String userId = (String) session.getAttribute("userId");
			memberDto.setUserId(userId) ;
			MemberDto mDto = memberService.main(memberDto);
			model.addAttribute("mDto", mDto);
		}
		return "main";
	}

	@GetMapping("/pay")
	public String pay() {

		return "payment";
	}

	@GetMapping("/logout")
	public String logout(HttpSession session, RedirectAttributes redirectAttributes) {
		session.invalidate();
		redirectAttributes.addFlashAttribute("msg", "로그아웃되었습니다.");
		return "redirect:/";
	}

	// 동기처리시
//	@PostMapping("/main/info") //소환사 이름검색 << 추후 이걸로 로그인 대신받기도 가능 
//	public String mainInfo(PostDto postDto, Model model) {
//		log.info("gameName :{}",postDto);
//		
//		try {
//			List<String> mList = mainService.puuId(postDto.getGameName(), postDto.getTagLine());
//			
//			List<Object> dataList = mainService.mainInfo(mList);
//			model.addAttribute("dataList",dataList);
//			model.addAttribute("gamName",postDto.getGameName());
//		}catch (Exception e) {
//
//			model.addAttribute("msg", "조회 결과가 0건 입니다.");
//		}	
//			
//		return "info";
//	}

	@GetMapping("/shop")
	public String shop() {

		return "shop";
	}


	@GetMapping("/kyt")
	public String go3() {

		return "kyt/kyt";
	}

	@GetMapping("/stm")
	public String go5() {

		return "stm/stm";
	}

	@GetMapping("/jhl")
	public String go6() {

		return "jhl/jhl";
	}
}

