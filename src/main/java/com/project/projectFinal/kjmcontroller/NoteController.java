package com.project.projectFinal.kjmcontroller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.dto.NoteDto;
import com.project.projectFinal.service.NoteService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NoteController {
	@Autowired
	NoteService noteService;
	//쪽지함
	@GetMapping("/Note")
	public String Noteinfo(Model model, HttpSession session, NoteDto noteDto) {
		String userId = (String) session.getAttribute("userId");
		noteDto.setUserId(userId);
		ArrayList<NoteDto> maillist= noteService.NoteInfo(noteDto);
		model.addAttribute("maillist", maillist);
		return "kjm/Note";	
	}
	
	
	@PostMapping("/send")
	public String sendNote(NoteDto noteDto,HttpSession session,MemberDto memberDto) {
		String userId = (String) session.getAttribute("userId");
		memberDto.setUserId(userId);
		noteService.sendNote(noteDto);
		return "redirect:/Note";
	}
	
	@GetMapping("/delete")
	public String DeleteNote(@RequestParam("n_num")int num) {
			noteService.DeleteNote(num);
			return "redirect:/Note";
		
	}
}
