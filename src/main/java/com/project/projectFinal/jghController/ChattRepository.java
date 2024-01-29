package com.project.projectFinal.jghController;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.projectFinal.dao.MsgDao;
import com.project.projectFinal.dto.DuoChattRoomDto;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.MsgDto;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class ChattRepository {
	@Autowired
	MsgDao msgDao;

	public void insertMsg(HashMap<String, String> map) {

		MsgDto msgDto = new MsgDto();
		msgDto.setRcnt(map.get("rcnt"));
		msgDto.setUserId(map.get("userId"));
		msgDto.setMsg(map.get("msg"));
		msgDao.insertMsg(msgDto);

	}

	public void roomUpdate(HashMap<String, String> map) {
		DuoSearchDto duoSearchDto = new DuoSearchDto();
		duoSearchDto.setUserId(map.get("userId"));
		if (map.get("userId").equals("비회원")) {
			duoSearchDto.setUserId("비회원");
		}

		duoSearchDto.setDuoPosition(map.get("duoPosition"));
		duoSearchDto.setMyPosition(map.get("myPosition"));
		duoSearchDto.setTier(map.get("tier"));
		duoSearchDto.setGameType(map.get("gameType"));
		duoSearchDto.setMemo(map.get("memo"));
		msgDao.roomUpdate(duoSearchDto);
		// savedb

	}

	public void connectRoom(HashMap<String, String> map) {
		
		DuoChattRoomDto duoChattRoomDto  = new DuoChattRoomDto();
		duoChattRoomDto.setRoomNum(map.get("roomNum"));
		duoChattRoomDto.setHostId(map.get("hostId"));
		duoChattRoomDto.setGuestId(map.get("guestId"));
		
		msgDao.connectRoom(duoChattRoomDto);
		
	}

}