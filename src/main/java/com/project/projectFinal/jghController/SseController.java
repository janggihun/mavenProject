package com.project.projectFinal.jghController;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.sseConfig.SseEmitters;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController

public class SseController {
	@Autowired
	SseEmitters sseEmitters;

	public SseController(SseEmitters sseEmitters) {
		this.sseEmitters = sseEmitters;
	}

	@SuppressWarnings("finally")
	@GetMapping(value = "/jgh", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	public ResponseEntity<SseEmitter> connect(HttpSession session) {
		SseEmitter emitter = new SseEmitter(300_000L);

		sseEmitters.add(emitter);
		try {
			emitter.send(SseEmitter.event().name("connect").data("connected!").reconnectTime(3000L));

		} catch (IOException e) {

			throw new CustomException("시작에러");
		} finally {

			return ResponseEntity.ok(emitter);
		}
	}	

	@PostMapping("/jgh")
	public ResponseEntity<Void> count() {
		sseEmitters.count();
		return ResponseEntity.ok().build();
	}
}