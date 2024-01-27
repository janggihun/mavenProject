package com.project.projectFinal.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;

@Component
@Log4j2
@Slf4j
public class ChatHandler extends TextWebSocketHandler {
	private List<WebSocketSession> sessionList = new ArrayList<WebSocketSession>();

	// 메세지 보내기
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		log.info("#ChattingHandler, handleMessage");
		log.info(session.getId() + ": " + message);

		for (WebSocketSession s : sessionList) {
			s.sendMessage(new TextMessage(session.getPrincipal().getName() + ":" + message.getPayload()));
		}
	}

	// connection established
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		log.info("#ChattingHandler, afterConnectionEstablished");
		log.info("===",session.getAcceptedProtocol());
		sessionList.add(session);

		log.info(session.getPrincipal().getName() + "님이 입장하셨습니다.");
	}

	// connection closed
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		log.info("#ChattingHandler, afterConnectionClosed");

		sessionList.remove(session);

		log.info(session.getPrincipal().getName() + "님이 퇴장하셨습니다.");
	}

}