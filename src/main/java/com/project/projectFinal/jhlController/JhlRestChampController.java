package com.project.projectFinal.jhlController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.JhlChampDto;
import com.project.projectFinal.service.JhlChampService;


@RestController
public class JhlRestChampController {
	
	@Autowired
	JhlChampService champService;
	
	@PostMapping("/champSearch")
	public List<HashMap<String, String>> champSearch(JhlChampDto champDto) {
		return champService.champSearch(champDto);
	}
		
}
