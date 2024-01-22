package com.project.projectFinal.jghController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.ShopService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestShopController {

	@Autowired
	ShopService shopService;

	@PostMapping("/firstPointInfo")
	public MemberDto firstPointInfo() {

		return shopService.firstPointInfo();
	}

	@PostMapping("/myPointCheck")
	public MemberDto myPointCheck(MemberDto memberDto,HttpSession session) {
		String userId = (String) session.getAttribute("userId");
		memberDto.setUserId(userId);
		return shopService.myPointCheck(memberDto);
	}

	@PostMapping("/plusPoint100")
	public MemberDto plusPoint100(MemberDto memberDto, HttpSession session) {
		String userId = (String) session.getAttribute("userId");
		memberDto.setUserId(userId);

		MemberDto mDto = shopService.plusPoint100(memberDto);
		log.info("==={}", mDto);
		return mDto;

	}

	@PostMapping("/sendPoint")
	public MemberDto sendPoint(MemberDto memberDto, HttpSession session) {
		String userId = (String) session.getAttribute("userId");
		memberDto.setUserId(userId);

		return shopService.sendPoint(memberDto);

	}

}
