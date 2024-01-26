package com.project.projectFinal.jghController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.projectFinal.service.DuoService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class DuoController {

	@Autowired
	DuoService duoService;

	@GetMapping("/jgh")
	public String duoInfo(Model model) {

		model.addAttribute("dList", duoService.duoInfo());

		return "jgh/jgh";
	}

}
