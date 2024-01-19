package com.project.projectFinal.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.dto.PaymentDto;

@Mapper
public interface MemberDao {



	MemberDto login(MemberDto memberDto);

	int join(MemberDto memberDto);

	int find(MemberDto memberDto);

	int payDbSave(PaymentDto paymentDto);

	MemberDto main(MemberDto memberDto);

	int updatePoint(PaymentDto paymentDto);

	DuoSearchDto saveDbDuo(DuoSearchDto duoSearchDto);

	ArrayList<HashMap<String, DuoSearchDto>> duoInfo();

	DuoSearchDto infoDuoT(DuoSearchDto duoSearchDto);

	void deleteDuo(DuoSearchDto duoSearchDto);

	DuoSearchDto comparedcnt(DuoSearchDto duoSearchDto);

	int ajaxtest(MemberDto memberDto);


}
