package com.project.projectFinal.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.PostDto;
import com.project.projectFinal.service.MainService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestMainController {
	@Autowired
	MainService mainService;

	// 비동기처리시
	@PostMapping("/main/info") // 소환사 이름검색 << 추후 이걸로 로그인 대신받기도 가능
	public ArrayList<HashMap<String, Object>> mainInfo(PostDto postDto, Model model) {
		log.info("gameName :{}", postDto);
		HashMap<String, Object> mMap = new HashMap<>();
		try {
			List<String> mList = mainService.puuId(postDto.getGameName(), postDto.getTagLine());
			log.info("mList :{}",mList);
			if(mList == null) {
				throw new Exception();
			}
			return mainService.mainInfo(mList);
		} catch (Exception e) {

			return null;
		}

	}

}
