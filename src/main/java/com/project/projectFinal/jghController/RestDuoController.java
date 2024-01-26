package com.project.projectFinal.jghController;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.service.DuoService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestDuoController {

	@Autowired
	DuoService duoService;

	@PostMapping("/duostartinfo")
	public ArrayList<HashMap<String, DuoSearchDto>> duostartinfo() {

		return duoService.duostartinfo();
	}

	@PostMapping("/saveDb")
	public DuoSearchDto saveDb(DuoSearchDto duoSearchDto) {
		if (duoSearchDto.getUserId() == "") {

			duoSearchDto.setUserId("비회원");
		}

		return duoService.saveDbDuo(duoSearchDto);
	}

	@PostMapping("/deleteById")
	public boolean deleteById(DuoSearchDto duoSearchDto, HttpSession session) {

		if (duoService.infoDuoT(duoSearchDto).getUserId().equals(session.getAttribute("userId"))) {

			duoService.deleteDuo(duoSearchDto);
			return true;
		} else {
			return false;

		}
	}

	@PostMapping("/comparedcnt")
	public DuoSearchDto comparedcnt() {

		return duoService.comparedcnt();

	}

	@PostMapping("/duoInfo")
	public DuoSearchDto duoInfo(DuoSearchDto duoSearchDto) {

		return duoService.duoInfo(duoSearchDto);

	}

	@PostMapping("/nowlogin")
	public int nowlogin(DuoSearchDto duoSearchDto) {
		log.info("========={}", duoSearchDto);
		return duoService.nowlogin(duoSearchDto);

	}
	
	
	

}
