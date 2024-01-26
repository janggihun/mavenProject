package com.project.projectFinal.sseConfig;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class SseEmitters {

	private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

	public SseEmitter add(SseEmitter emitter) {
		log.info("sse만들러옴");
	
	
		this.emitters.add(emitter);

		emitter.onCompletion(() -> {

			this.emitters.remove(emitter); // 만료되면 리스트에서 삭제
		});
		emitter.onTimeout(() -> {

			emitter.complete();
		});
		emitter.onError(null);
		return emitter;
	}

	public void count() {

		String count = "전달받음";
		emitters.forEach(emitter -> {
			try {
				emitter.send(SseEmitter.event().name("makeroom").data(count));
			} catch (IOException e) {
				// 새로고침을 해도 오류가 나지 않으며 재실행 처리를 해줌
				this.emitters.remove(emitter); // 만료되면 리스트에서 삭제
				SseEmitter emitter1 = new SseEmitter(5 * 60 * 1000L);
				this.emitters.add(emitter1);
			}
		});
	}

	public void infoAll(String infoMember) {

		emitters.forEach(emitter -> {
			try {
				emitter.send(SseEmitter.event().name("infoAll").data(infoMember));

			} catch (IOException e) {
				// 새로고침을 해도 오류가 나지 않으며 재실행 처리를 해줌
				this.emitters.remove(emitter); // 만료되면 리스트에서 삭제
				SseEmitter emitter1 = new SseEmitter(5 * 60 * 1000L);
				this.emitters.add(emitter1);
			}
		});
	}

	public void add1() {
		// TODO Auto-generated method stub

	}

}