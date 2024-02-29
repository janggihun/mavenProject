package com.project.projectFinal.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.dao.NoteDao;
import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.dto.NoteDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NoteService {
	@Autowired
	NoteDao noteDao;

	public ArrayList<NoteDto> NoteInfo(MemberDto memberDto) {

		ArrayList<NoteDto> maillist = noteDao.NoteInfo(memberDto);
		return maillist;
	}

	public void sendNote(NoteDto noteDto) {
		noteDao.sendNote(noteDto);

	}

	public void DeleteNote(int num) {
		noteDao.DeleteNote(num);
	}


	public ArrayList<NoteDto> selectNoteById(String sendId) {
		ArrayList<NoteDto> select = noteDao.selectNoteById(sendId);
		return select;
	}

	@Transactional
	public int mailsend(NoteDto noteDto) {

		int result = noteDao.mailsend(noteDto);

		int result1 = noteDao.findId(noteDto);
		
//		int result2 = noteDao.findMsg(noteDto);

		
		if (result == 0 || result1 == 0) {
			throw new CustomException("메일전송 실패");
		} else {

			return result;
		}

	}

	public ArrayList<NoteDto> inqMain(String userId) {
		
		return noteDao.inqMain(userId);
	}

	public ArrayList<NoteDto> adminInq(MemberDto memberDto) {
		// TODO Auto-generated method stub
		ArrayList<NoteDto> inqlist = noteDao.adminInq(memberDto);
//		log.info("========문의 서비스{}",inqlist);
		return inqlist;
	}


	public int sendToallMembers(MemberDto memberDto, NoteDto noteDto) {
		int result = noteDao.sendToallMembers(memberDto, noteDto);
		return result;
	}

	public int inqAnswer(NoteDto noteDto) {
		int result = noteDao.inqAnswer(noteDto);
		return result;
	}

	public NoteDto inqDetailView(NoteDto noteDto) {
		NoteDto dInq = noteDao.inqDetailView(noteDto);
		return dInq;
	}

	public ArrayList<NoteDto> eventMessage(String userId) {
		
		return noteDao.eventMessage(userId);
	}


}
