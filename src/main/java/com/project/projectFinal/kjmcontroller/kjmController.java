package com.project.projectFinal.kjmcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.projectFinal.service.ItemService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller

public class kjmController {
	@Autowired
	ItemService itemService;
	
	@GetMapping("/kjm")
	public String kjm(){
		return "kjm/kjm";
	}
	
	@GetMapping("/kjm1")
	public String kjm1(){
		return "kjm/kjm1";
	}
	
	@GetMapping("/kjm2")
	public String kjm2(){
		return "kjm/kjm2";
	}
	
	@GetMapping("/kjm3")
	public String kjm3(){
		return "kjm/kjm3";
	}
	
	@GetMapping("/kjm4")
	public String kjm4(){
		return "kjm/kjm4";
	}
	
//	@PostMapping("/")
	
}
