package com.project.projectFinal.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.JhlChampDao;
import com.project.projectFinal.dto.JhlChampDto;

@Service
public class JhlChampService {

	@Autowired
	JhlChampDao champDao;

	public List<HashMap<String, String>> champListImg1() {

		return champDao.champListImg1();
	}

	public List<HashMap<String, String>> champSearch(JhlChampDto champDto) {
	
		return champDao.champSearch(champDto);
	}



}
