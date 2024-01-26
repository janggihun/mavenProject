package com.project.projectFinal.kdgController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.projectFinal.service.ChampionService;

@Controller
public class KdgController {
	
	@Autowired
	ChampionService cs;
	
	
	@GetMapping("/kdg")
	public String kdg(Model model) {
		
		List<HashMap<String, String>> list = cs.champList();

		model.addAttribute("list", list);

		return "kdg/kdg";
		}
}
