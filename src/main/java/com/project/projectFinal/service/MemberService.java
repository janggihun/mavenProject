package com.project.projectFinal.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.dao.MemberDao;
import com.project.projectFinal.dto.KakaoDto;
import com.project.projectFinal.dto.MemberDto;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MemberService implements UserDetailsService {

	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	@Autowired
	MemberDao memberDao;

	@Transactional
	public void payDbSave(KakaoDto paymentDto) {

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

	public MemberDto joinIdCheck(MemberDto memberDto) { // 회원가입 시 아이디 중복채크
		return memberDao.joinIdCheck(memberDto);

	}

	public void logoutNow(String userId) {
		memberDao.logoutNow(userId);

	}

	// 로그인
	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		MemberDto memberDto = new MemberDto();
		memberDto.setUserId(userId);
		MemberDto mDto = memberDao.login(memberDto);
		if (mDto == null) {
			throw new UsernameNotFoundException("존재하지 않는 아이디 입니다.");
		}
		return new User(mDto.getUserId(), mDto.getUserPw(), Arrays.asList(new SimpleGrantedAuthority(mDto.getRole())));
//		return User.builder().username(mDto.getUserId()).password(mDto.getUserPw()).roles(mDto.getRole()).build();
	}

	// 회원가입
	@Transactional
	public boolean join(MemberDto memberDto) {

		if (memberDao.login(memberDto) != null) {
			return false;
		}
		MemberDto mDto = new MemberDto();
		mDto.setUserId(memberDto.getUserId());
		mDto.setUserPw(passwordEncoder.encode(memberDto.getUserPw()));
		mDto.setUserEmail(memberDto.getUserEmail());
		mDto.setRole("USER");

		memberDao.join(mDto);
		log.info("==={}", mDto);
		return true;
	}

	public ArrayList<HashMap<String, MemberDto>> memberTable() {

		return memberDao.memberTable();

	}
	//룰렛 횟수 저장
	@Transactional
	public MemberDto addRoulette(MemberDto memberDto) throws CustomException {

		
		MemberDto mDto =  memberDao.addRoulette(memberDto);
		if (memberDto.getUserId().equals("")) {
			throw new CustomException("비회원입니다.");
		}
//		if(mDto.getRouletteCount() > 4) {
//			throw new CustomException("수량초과입니다.");
//		}
		
		return mDto;

	}

	public MemberDto rouletteInfo(MemberDto memberDto) {
	
		return  memberDao.rouletteInfo(memberDto);
		
	}

	public MemberDto minusRoulette(MemberDto memberDto) {
		return  memberDao.minusRoulette(memberDto);
	}

	public boolean findId(MemberDto memberDto) {
		boolean findId = memberDao.findId(memberDto);
		if(findId) {
			return findId;
		}else {
			return false;
		}
		
	}
}
