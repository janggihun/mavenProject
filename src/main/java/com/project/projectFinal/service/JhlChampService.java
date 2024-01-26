package com.project.projectFinal.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.JhlChampDao;

@Service
public class JhlChampService {

	@Autowired
	JhlChampDao champDao;

	public List<HashMap<String, String>> champListImg1() {

		return champDao.ChampListImg1();
	}

	public List<HashMap<String, String>> champListImg2() {

		return champDao.ChampListImg2();
	}

	public List<HashMap<String, String>> champListImg3() {

		return champDao.ChampListImg3();
	}

	public List<HashMap<String, String>> champListImg4() {

		return champDao.ChampListImg4();
	}

	public List<HashMap<String, String>> champListImg5() {

		return champDao.ChampListImg5();
	}

	public List<HashMap<String, String>> champListImg6() {

		return champDao.ChampListImg6();
	}

	public List<HashMap<String, String>> champListImg7() {

		return champDao.ChampListImg7();
	}

	public List<HashMap<String, String>> champListImg8() {

		return champDao.ChampListImg8();
	}

	public List<HashMap<String, String>> champListImg9() {

		return champDao.ChampListImg9();
	}

	public List<HashMap<String, String>> champListImg10() {

		return champDao.ChampListImg10();
	}

	public List<HashMap<String, String>> champListImg11() {

		return champDao.ChampListImg11();
	}

	public List<HashMap<String, String>> champListImg12() {

		return champDao.ChampListImg12();
	}

	public List<HashMap<String, String>> champListImg13() {

		return champDao.ChampListImg13();
	}

	public List<HashMap<String, String>> champListImg14() {

		return champDao.ChampListImg14();
	}

}
