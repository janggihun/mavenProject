package com.project.projectFinal.jhlController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.projectFinal.service.JhlChampService;

//import com.project.projectFinal.service.JhlChampService;

@Controller
public class JhlChampController {

	@Autowired
	JhlChampService champService;

	@GetMapping("/jhl")
	public String jhl(Model model) {
		List<HashMap<String, String>> champListImg1 = champService.champListImg1();
		model.addAttribute("champListImg1", champListImg1);
		return "jhl/jhl";
	}
}
