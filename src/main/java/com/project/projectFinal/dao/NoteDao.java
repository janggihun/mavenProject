package com.project.projectFinal.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.NoteDto;

@Mapper
public interface NoteDao {

	ArrayList<NoteDto> NoteInfo(NoteDto noteDto);

	int sendNote(NoteDto noteDto);

	void DeleteNote(int num);

	ArrayList<NoteDto> selectNoteById(String sendId);

	int mailsend(NoteDto noteDto);

	int findId(NoteDto noteDto);

//	int findMsg(NoteDto noteDto);

}
