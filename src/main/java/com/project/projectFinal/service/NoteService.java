package com.project.projectFinal.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.dao.NoteDao;
import com.project.projectFinal.dto.NoteDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NoteService {
	@Autowired
	NoteDao noteDao;

	public ArrayList<NoteDto> NoteInfo() {

		ArrayList<NoteDto> maillist = noteDao.NoteInfo();
		return maillist;
	}

	public void sendNote(NoteDto noteDto) {
		noteDao.sendNote(noteDto);

	}

	public void DeleteNote(int num) {
		noteDao.DeleteNote(num);
	}

	public NoteDto detailNote(NoteDto noteDto) {
		
		return noteDao.detailNote(noteDto);
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

}
