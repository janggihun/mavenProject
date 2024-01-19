package com.project.projectFinal.jghController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.projectFinal.service.MemberService;

@Controller
public class DuoController {

	@Autowired
	MemberService memberService;
	
	@GetMapping("/jgh")
	public String duoInfo(Model model) {

		model.addAttribute("dList", memberService.duoInfo());
	
		return "jgh/jgh";
	}
	
}
