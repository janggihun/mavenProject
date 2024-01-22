package com.project.projectFinal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.JangShopException;
import com.project.projectFinal.dao.ShopDao;
import com.project.projectFinal.dto.MemberDto;

@Service
public class ShopService {

	@Autowired
	ShopDao shopDao;

	public MemberDto firstPointInfo() {

		return shopDao.firstPointInfo();

	}

	public MemberDto myPointCheck(MemberDto memberDto) {
		
		return shopDao.findByID(memberDto);
	}
	@Transactional
	public MemberDto plusPoint100(MemberDto memberDto) {

		int result = shopDao.plusPoint100(memberDto); // 업데이트 성공시 1

		MemberDto mDto = shopDao.findByID(memberDto);

		// 이하 트랜잭션 조건
		if (result == 0) {
			// 업데이트가 실패
			throw new JangShopException("회원만 이용 가능합니다.");
		} else if (mDto.getUserId() == null) {
			// 아이디가 없는 인경우(비회원)
			throw new JangShopException("로그인 후에 가능합니다.");
		} else {

			return mDto;
		}

	}

	@Transactional
	public MemberDto sendPoint(MemberDto memberDto) {

		int plusRerult = shopDao.plusPoint(memberDto); // update +친구포인트
		int minusRerult = shopDao.minusPoint(memberDto); // update -내포인트

		int nowLogin = shopDao.sendPoint1(memberDto); // 현재 로그인 중인지?

		int findFriendId = shopDao.sendPoint2(memberDto); // 친구 아이디가 있는지?

		MemberDto mDto = shopDao.findByID(memberDto); //현재 금액이 마이너스인지 확인
		// 소지 금액 : 보낼금액 차이
		//나 자신한테 보내는경우
		// 보내는금액이 마이너스인지 확인
		if (plusRerult == 0 || minusRerult == 0 || nowLogin == 0 || findFriendId == 0 
				|| mDto.getUserPoint() < 0 || memberDto.getFriendPoint() < 0
				|| memberDto.getFriendId().equals(memberDto.getUserId())) {
			throw new JangShopException("보내기 중 오류발생, 트랜잭션발동");

		}

		return mDto;
	}


}
