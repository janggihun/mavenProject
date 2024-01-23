package com.project.projectFinal.kjmcontroller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
	public String Noteinfo(Model model) {
		
		ArrayList<NoteDto> maillist= noteService.NoteInfo();
		model.addAttribute("maillist", maillist);
		
		return "Note";	
	}
	
	//쪽찌 자세히보기
	@GetMapping("/detail")
	public String detailNote(Model model,NoteDto noteDto) {
		NoteDto dlist = noteService.detailNote(noteDto);
		model.addAttribute("dlist", dlist);
		return "detail";
	}
	
	@PostMapping("/send")
	public String sendNote(NoteDto noteDto,HttpSession session) {
		String userId = (String) session.getAttribute("userId");
		noteDto.setUserId(userId);
		noteService.sendNote(noteDto);
		return "redirect:/Note";
	}
	
	@GetMapping("/delete")
	public String DeleteNote(@RequestParam("n_num")int num) {
			noteService.DeleteNote(num);
			return "redirect:/Note";
		
	}
}