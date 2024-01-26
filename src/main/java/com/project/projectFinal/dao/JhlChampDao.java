package com.project.projectFinal.dao;


import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.JhlChampDto;

@Mapper
public interface JhlChampDao {

	public List<HashMap<String, String>> champListImg1();

	public List<HashMap<String, String>> champSearch(JhlChampDto champDto);

	

	

}
