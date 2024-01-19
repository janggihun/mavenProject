package com.project.projectFinal.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.dao.MemberDao;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.dto.PaymentDto;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MemberService {

	@Autowired
	MemberDao memberDao;

	public MemberDto login(MemberDto memberDto) throws CustomException {

		MemberDto mDto = memberDao.login(memberDto);
		HashMap<String, String> mMap = new HashMap<>();
		if (mDto != null) {
			return mDto;
		} else {

			throw new CustomException("아이디 혹은 비밀번호가 틀렸습니다.");
		}

	}

	@Transactional
	public MemberDto join(MemberDto memberDto) {

		if (memberDao.find(memberDto) == 1) {
			throw new CustomException("아이디가 중복되었습니다.");
		}
		if (memberDao.join(memberDto) == 1) {

			if (memberDto.getUserId().equals("") || memberDto.getUserPw().equals("")) {

				throw new CustomException("아이디 혹은 비밀번호가 공백입니다.");
			}

		}

		return memberDto;
	}

	@Transactional
	public void payDbSave(PaymentDto paymentDto) {

		int result1 = memberDao.payDbSave(paymentDto);

		int result2 = memberDao.updatePoint(paymentDto);

		if (result1 == 0) {
			throw new CustomException("paymentT 결제 db에러");
		} else if (result2 == 0) {
			throw new CustomException("memberT 포인트 db에러");
		}

	}

	public MemberDto main(MemberDto memberDto) {

		return memberDao.main(memberDto);

	}

	@Transactional
	public DuoSearchDto saveDbDuo(DuoSearchDto duoSearchDto) {

		DuoSearchDto dDto = memberDao.saveDbDuo(duoSearchDto);

		if (dDto != null) {
			return dDto;

		} else {

			throw new CustomException("duo등록 실패");
		}

	}

	public ArrayList<HashMap<String, DuoSearchDto>> duoInfo() {

		return memberDao.duoInfo();
	}

	public DuoSearchDto infoDuoT(DuoSearchDto duoSearchDto) {
		return memberDao.infoDuoT(duoSearchDto);
	}

	public void deleteDuo(DuoSearchDto duoSearchDto) {
		memberDao.deleteDuo(duoSearchDto);

	}

	public DuoSearchDto comparedcnt(DuoSearchDto duoSearchDto) {

		return memberDao.comparedcnt(duoSearchDto);

	}

}
