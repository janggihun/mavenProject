package com.project.projectFinal.service;

import java.time.Instant;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.project.projectFinal.dto.RiotApiDto;
import com.project.projectFinal.dto.itemInfoDto;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class WebClientService {

	private String api_key = "RGAPI-e674eb69-7d34-41d9-adfb-e43ad16950ca";

	public String getPuuId(String lolId, String tagId) {

		String url = "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + lolId + "/" + tagId
				+ "?api_key=" + api_key;
		// webClient 기본 설정
		WebClient webClient = WebClient.builder().baseUrl(url).build();

		// api 요청 >> 맵인경우
//		Map<String, Object> response = webClient.get()
//				.uri(uriBuilder -> uriBuilder
//				.build())
//				.retrieve()
//				.bodyToMono(Map.class)
//				.block();
		RiotApiDto response = webClient.get().uri(uriBuilder -> uriBuilder.build()).retrieve().bodyToMono(RiotApiDto.class)
				.block();
		// 결과 확인
//		log.info(response.toString());
		return response.getPuuid();

	}

	public List<String> getgameid(String puuid) {

		String count = "2"; // 가지고 올 경기 수 << 추후에 늘리기

		String url = "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count="
				+ count + "&api_key=" + api_key;
		// webClient 기본 설정
		WebClient webClient = WebClient.builder().baseUrl(url).build();

		List<String> response = webClient.get().uri(uriBuilder -> uriBuilder.build()).retrieve().bodyToMono(List.class)
				.block();
		// 결과 확인
//		log.info(response.toString());
		return response;
	}

	public Map getgameinfo(String matchId) { // 매치id를 통해서 데이터를 받음

		String url = "https://asia.api.riotgames.com/lol/match/v5/matches/" + matchId + "?api_key=" + api_key;
		// webClient 기본 설정

		WebClient webClient = WebClient.builder().baseUrl(url).build();

		Map response = webClient.get() // 맵으로 받으면 됨
				.uri(uriBuilder -> uriBuilder.build()).retrieve().bodyToMono(Map.class).block();
//
//		JSONObject parser = new JSONObject(checkTime(response)); // 받은 데이터를 json화 시킴
//
//		return parser;
		
		return response;

	}

	public Map getgameTimeline(String matchId) {

		String url = "https://asia.api.riotgames.com/lol/match/v5/matches/" + matchId + "/timeline?api_key=" + api_key;

		WebClient webClient = WebClient.builder()
				.codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(30 * 1024 * 1024)).baseUrl(url)
				.build();

		Map response = webClient.get() // 맵으로 받으면 됨
				.uri(uriBuilder -> uriBuilder

						.build())
				.retrieve().bodyToMono(Map.class).block();

//		JSONObject parser = new JSONObject(response); // 받은 데이터를 json화 시킴
//
//		return parser;
		return response;

	}

// 타임 스탬프를 통해서 몇일전 게임인지 찾는 구문
	public Map checkTime(Map response) {

		Map<String, Object> gameEndTimestamp = (Map<String, Object>) response.get("info");
		String gameEndTimestamp1 = gameEndTimestamp.get("gameEndTimestamp") + "";
		Instant current = Instant.now();
		long epochSecond = current.getEpochSecond() * 1000;
		long time = epochSecond - Long.parseLong(gameEndTimestamp1);

		int day = (int) Math.floor(time / 1000 / 60 / 60 / 24);
		int hour = (int) Math.floor(time / 1000 / 60 / 60);
		int min = (int) Math.floor(time / 1000 / 60);
		String spentTime;
		if (day == 0 && hour == 0) {
			spentTime = min + "분 전 게임입니다.";
		} else if (day == 0) {
			spentTime = hour + "시간 전 게임입니다.";
		} else {
			spentTime = day + "일 전 게임입니다.";
		}
		response.put("timeCheck", spentTime);
		return response;
	}

}