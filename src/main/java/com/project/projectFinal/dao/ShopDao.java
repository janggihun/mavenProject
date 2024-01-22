package com.project.projectFinal.dao;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.MemberDto;

@Mapper
public interface ShopDao {

	MemberDto firstPointInfo();

	int plusPoint100(MemberDto memberDto);

	MemberDto findByID(MemberDto memberDto);

	int sendPoint1(MemberDto memberDto);

	int sendPoint2(MemberDto memberDto);

	int plusPoint(MemberDto memberDto);

	int minusPoint(MemberDto memberDto);


}
