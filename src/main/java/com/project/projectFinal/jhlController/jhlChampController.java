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
public class jhlChampController {

	@Autowired
	JhlChampService champService;

	@GetMapping("/jhl")
	public String jhl(Model model) {
		List<HashMap<String, String>> champListImg1 = champService.champListImg1();
		model.addAttribute("champListImg1", champListImg1);

		List<HashMap<String, String>> champListImg2 = champService.champListImg2();
		model.addAttribute("champListImg2", champListImg2);

		List<HashMap<String, String>> champListImg3 = champService.champListImg3();
		model.addAttribute("champListImg3", champListImg3);
		
		List<HashMap<String, String>> champListImg4 = champService.champListImg4();
		model.addAttribute("champListImg4", champListImg4);

		List<HashMap<String, String>> champListImg5 = champService.champListImg5();
		model.addAttribute("champListImg5", champListImg5);

		List<HashMap<String, String>> champListImg6 = champService.champListImg6();
		model.addAttribute("champListImg6", champListImg6);

		List<HashMap<String, String>> champListImg7 = champService.champListImg7();
		model.addAttribute("champListImg7", champListImg7);

		List<HashMap<String, String>> champListImg8 = champService.champListImg8();
		model.addAttribute("champListImg8", champListImg8);

		List<HashMap<String, String>> champListImg9 = champService.champListImg9();
		model.addAttribute("champListImg9", champListImg9);

		List<HashMap<String, String>> champListImg10 = champService.champListImg10();
		model.addAttribute("champListImg10", champListImg10);

		List<HashMap<String, String>> champListImg11 = champService.champListImg11();
		model.addAttribute("champListImg11", champListImg11);

		List<HashMap<String, String>> champListImg12 = champService.champListImg12();
		model.addAttribute("champListImg12", champListImg12);

		List<HashMap<String, String>> champListImg13 = champService.champListImg13();
		model.addAttribute("champListImg13", champListImg13);

		List<HashMap<String, String>> champListImg14 = champService.champListImg14();
		model.addAttribute("champListImg14", champListImg14);
		return "jhl/jhl";
	}
}
