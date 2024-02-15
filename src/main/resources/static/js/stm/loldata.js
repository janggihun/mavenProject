/**
 * 
 */

$(document).ready(function() {


	mainStart()


})

function mainStart() {

	let gameName = $('#gameName').val()


	console.log(gameName) // 값이 안 넘어왔음
	if (gameName != '') {
		mainSearch(gameName)
	}
}
function mainSearch(gameName1) {
	var gameId = gameName1.split('#');
	let gameName = gameId[0] // 아이디
	let tagLine = gameId[1] // 태그
	data = { 'gameName': gameName, 'tagLine': tagLine }
	bbb(data)
}

//////////////////장기훈////



function gamebtn(i) {
	console.log(i)
	var gametable = document.getElementById("gametable" + i + "");
	gametable.style.display = ((gametable.style.display != 'none') ? 'none' : 'block');
	if((i+1) % 3 ==0){
	loadMore.style.top =((gametable.style.display != 'none') ? '80%' : '25%');
	}
	
}
function searchbtn() {
	searchbtn1()
}

function searchbtn1() {

	$('#newList').remove()
	let search = $('#search').val();
	var gameId = search.split('#');
	let gameName = gameId[0] // 아이디
	let tagLine = gameId[1] // 태그
	data = { 'gameName': gameName, 'tagLine': tagLine }
	bbb(data)
}


function aaa(data) { // data == 검색한 게임 아이디
	$.ajax({
		type: 'post',
		url: '/riot/game',

		success: function(res) {
			
			showGameTamble(res, data)
		}
	})
}

function bbb(data) {

	$.ajax({
		type: 'post',
		url: '/match/list',
		data: data,
		//		async: true,
		success: function(res) {
			console.log(res)
			if (res != '') {
				MList = [];
				for (let i = 0; i < res.length; i++) {
					Gamedata = {}; // 한게임당 데이터
					ingamedata = [];
					for (let j = 0; j < res[i]["info"]['participants'].length; j++) {
						mm = {}
						mm.riotIdGameName = res[i]["info"]['participants'][j]['riotIdGameName']//닉네임
						mm.riotIdTagline = res[i]["info"]['participants'][j]['riotIdTagline'] // 태그
						mm.summonerName = res[i]["info"]['participants'][j]['summonerName']
						mm.championName = res[i]["info"]['participants'][j]['championName']//챔피언 아이디
						mm.participantId = res[i]["info"]['participants'][j]['participantId'] // 플레이어 고유 인덱스
						//					mm.legendaryItemUsed = res[i]["info"]['participants'][j]['challenges']['legendaryItemUsed'] 
						//					mm.summoner1Id = res[i]["info"]['participants'][j]['summoner1Id']//스펠 D
						//					mm.summoner2Id = res[i]["info"]['participants'][j]['summoner2Id']//스펠 F 화면에 출력 가능할 떄 할 것
						mm.teamId = res[i]["info"]['participants'][j]['teamId']
						mm.win = res[i]["info"]['participants'][j]['win']
						mm.matchId = res[i]['metadata']['matchId'] // 매치 아이디
						mm.queueId = res[i]["info"]['queueId'] // 게임 모드
						mm.firstBloodKill = res[i]["info"]['participants'][j]['firstBloodKill']
						mm.kills = res[i]["info"]['participants'][j]['kills']
						mm.deaths = res[i]["info"]['participants'][j]['deaths']
						mm.assists = res[i]["info"]['participants'][j]['assists']
						mm.kda = (res[i]["info"]['participants'][j]['challenges']['kda']).toFixed(2)
						mm.lane = res[i]["info"]['participants'][j]['lane']
						mm.totalDamageDealtToChampions = res[i]["info"]['participants'][j]['totalDamageDealtToChampions']
						mm.totalDamageTaken = res[i]["info"]['participants'][j]['totalDamageTaken']
						mm.totalMinionsKilled = res[i]["info"]['participants'][j]['totalMinionsKilled'] // 미니언 킬
						mm.totalAllyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalAllyJungleMinionsKilled'] // 토탈 정글몹 킬
						mm.totalEnemyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalEnemyJungleMinionsKilled'] //상대 정글몹 킬
						mm.wardsKilled = res[i]["info"]['participants'][j]['wardsKilled'] // 와드 킬
						mm.wardsPlaced = res[i]["info"]['participants'][j]['wardsPlaced'] // 시야점수
						mm.gameStartTimestamp = res[i]["info"]['gameStartTimestamp']
						mm.gameEndTimestamp = res[i]["info"]['gameEndTimestamp']
						ingamedata.push(mm)
						Gamedata.info = ingamedata
					}
					ingameteam = [];
					bans = [];
					for (j = 0; j < 2; j++) {
						mm = {}
						mm.matchId = res[i]['metadata']['matchId']
						mm.teamId = res[i]["info"]['teams'][j]['teamId']
						mm.dragon = res[i]["info"]['teams'][j]['objectives']['dragon']['kills']
						mm.kills = res[i]["info"]['teams'][j]['objectives']['champion']['kills']
						for (k = 0; k < res[i]["info"]['teams'][j]['bans'].length; k++) {
							ss = {}
							ss.matchId = res[i]['metadata']['matchId']
							ss.teamId = res[i]["info"]['teams'][j]['teamId']
							ss.championId = res[i]["info"]['teams'][j]['bans'][k]['championId']
							bans.push(ss)
							Gamedata.bans = bans
						}
						if (Gamedata.bans == undefined) {

							Gamedata.bans = null
						}

						ingameteam.push(mm)
						Gamedata.teams = ingameteam
					}
					MList.push(Gamedata)
				}

				let temp = JSON.stringify(MList)
				data2 = { 'Mlist': temp }

				$.ajax({
					type: 'post',
					url: '/riot/api',
					data: data2,
					//					dataType: 'json',
					success: function(res) {
						console.log(res)
						aaa(data)

					}
				})

			} else {
				aaa(data)
			}

		}
	})
}

/*$("#getpuuid").on("click", function() {
	$('#newList').remove()
	let gameName = $('#gameName').val();
	let tagLine = $('#tagLine').val();
	data = { 'gameName': gameName, 'tagLine': tagLine }
	$.ajax({
		type: 'post',
		url: '/match/list',
		data: data,
		success: function(res) {
			console.log(res)
			if (res != []) {
				console.log("데이터 들어옴")
				MList = [];
				for (let i = 0; i < res.length; i++) {
					Gamedata = {}; // 한게임당 데이터
					ingamedata = [];
					for (let j = 0; j < res[i]["info"]['participants'].length; j++) {
						mm = {}
						mm.riotIdGameName = res[i]["info"]['participants'][j]['riotIdGameName']//닉네임
						mm.riotIdTagline = res[i]["info"]['participants'][j]['riotIdTagline'] // 태그
						mm.summonerName = res[i]["info"]['participants'][j]['summonerName']
						mm.championName = res[i]["info"]['participants'][j]['championName']//챔피언 아이디
	//					mm.legendaryItemUsed = res[i]["info"]['participants'][j]['challenges']['legendaryItemUsed']
	//					mm.summoner1Id = res[i]["info"]['participants'][j]['summoner1Id']//스펠 D
	//					mm.summoner2Id = res[i]["info"]['participants'][j]['summoner2Id']//스펠 F 화면에 출력 가능할 떄 할 것
						mm.teamId = res[i]["info"]['participants'][j]['teamId']
						mm.win = res[i]["info"]['participants'][j]['win']
						mm.matchId = res[i]['metadata']['matchId'] // 매치 아이디
						mm.queueId = res[i]["info"]['queueId'] // 게임 모드
						mm.firstBloodKill = res[i]["info"]['participants'][j]['firstBloodKill']
						mm.kills = res[i]["info"]['participants'][j]['kills']
						mm.deaths = res[i]["info"]['participants'][j]['deaths']
						mm.assists = res[i]["info"]['participants'][j]['assists']
						mm.kda = (res[i]["info"]['participants'][j]['challenges']['kda']).toFixed(2)
						mm.lane = res[i]["info"]['participants'][j]['lane']
						mm.totalDamageDealtToChampions = res[i]["info"]['participants'][j]['totalDamageDealtToChampions']
						mm.totalDamageTaken = res[i]["info"]['participants'][j]['totalDamageTaken']
						mm.totalMinionsKilled = res[i]["info"]['participants'][j]['totalMinionsKilled'] // 미니언 킬
						mm.totalAllyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalAllyJungleMinionsKilled'] // 토탈 정글몹 킬
						mm.totalEnemyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalEnemyJungleMinionsKilled'] //상대 정글몹 킬
						mm.wardsKilled = res[i]["info"]['participants'][j]['wardsKilled'] // 와드 킬
						mm.wardsPlaced = res[i]["info"]['participants'][j]['wardsPlaced'] // 시야점수
						mm.gameStartTimestamp = res[i]["info"]['gameStartTimestamp']
						mm.gameEndTimestamp = res[i]["info"]['gameEndTimestamp']
						ingamedata.push(mm)
						Gamedata.info = ingamedata
					}
					ingameteam = [];
					bans = [];
					for (j = 0; j < 2; j++) {
						mm = {}
						mm.matchId = res[i]['metadata']['matchId']
						mm.teamId = res[i]["info"]['teams'][j]['teamId']
						mm.dragon = res[i]["info"]['teams'][j]['objectives']['dragon']['kills']
						mm.kills = res[i]["info"]['teams'][j]['objectives']['champion']['kills']
						for (k = 0; k < res[i]["info"]['teams'][j]['bans'].length; k++) {
							ss = {}
							ss.matchId = res[i]['metadata']['matchId']
							ss.teamId = res[i]["info"]['teams'][j]['teamId']
							ss.championId = res[i]["info"]['teams'][j]['bans'][k]['championId']
							bans.push(ss)
							Gamedata.bans = bans
						}
						if (Gamedata.bans == undefined) {

							Gamedata.bans = null
						}

						ingameteam.push(mm)
						Gamedata.teams = ingameteam
					}
					MList.push(Gamedata)
				}
				let temp = JSON.stringify(MList)
				data2 = { 'Mlist': temp }

				$.ajax({
					type: 'post',
					url: '/riot/api',
					data: data2,
					dataType: 'json',
				})
			}


			$.ajax({
				type: 'post',
				url: '/riot/game',
				//				data: data,
				success: function(res) {
					showGameTamble(res)
				}
			})

			//			if(res != 언디파인드)

			//				success: function(res) {
			//					showGameTamble(res)
			//					console.log(res)
			//					for (let i = 0; i < res.length; i++) {
			//						console.log(res[i])
			//					}
			//				let str = ''
			//				str += "<div id = 'newList'>"
			//				str += "<input type='text' id='gameName' name='gameName' placeholder='아이디' value='게임모드 검색 들어갈 예정'>"
			//				str += "<input type='text' id='gameName' name='gameName' placeholder='아이디' value='챔피언 검색 들어갈 예정'>"
			//				for (let i = 0; i < res.length; i++) {
			//				str += "<div id='matchlist" + i + "' class='list'>"
			//				str += "<table align='center' border='1' width = '800'>"
			//				str += "<tr>"
			//
			//				str += "<th width = '150' rowspan='2' id='gameMode" + i + "'></th>"
			//
			//				for (let j in res[i]["info"]['participants']) {
			//					if (gameName == res[i]['info']['participants'][j]['riotIdGameName']) {
			//						str += "<th rowspan='3' colspan='2' width='114	'><img width='40' height='40'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/" + res[i]['info']['participants'][j]['championName'] + ".png'></th>"
			//					}
			//				}
			//				str += "<th rowspan='2' id = 'KDA" + i + "' width = '100'></th>" // k/d/a
			//				let mykill = ''
			//				for (let j in res[i]["info"]['participants']) {
			//					if (res[i]["info"]['participants'][j]['teamId'] == res[i]["info"]['teams'][0]['teamId']) {
			//
			//						mykill = "킬 관여: " + res[i]["info"]['teams'][0]['objectives']['champion']['kills']
			//
			//					} else if (res[i]["info"]['participants'][j]['teamId'] == res[i]["info"]['teams'][1]['teamId']) {
			//
			//						let totalkill = res[i]["info"]['teams'][1]['objectives']['champion']['kills']
			//						mykill = (((res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists']) / totalkill) * 100).toFixed(0) + "%"
			//					}
			//				}
			//				str += "<th>킬 관여율</th>"
			//				var timeStamp = Date.now(); // 현재시간
			//				//				var date = new Date(timeStamp);
			//				gameEndTimestamp = res[i]["info"]['gameEndTimestamp']; //게임 끝난 시간
			//
			//				loltime = (timeStamp - gameEndTimestamp) // 롤 시간
			//
			//				let day = Math.floor(loltime / 1000 / 60 / 60 / 24);
			//				let hour = Math.floor(loltime / 1000 / 60 / 60);
			//				let min = Math.floor(loltime / 1000 / 60);
			//
			//				var spentTime;
			//				if (day == 0 && hour == 0) {
			//					spentTime = min + "분 전";
			//				} else if (day == 0) {
			//					spentTime = hour + "시간 전";
			//				} else {
			//					spentTime = day + "일 전";
			//				}
			//				str += "<th rowspan='2' width = '150'>" + spentTime + "</th>"
			//				str += "<td rowspan='3'><button id='gamebtn" + i + "' onclick='gamebtn(" + i + ")'>더보기</button></td>"
			//				str += "</tr>"
			//				str += "<tr> <th>" + mykill + "</th></tr>"
			//				str += "<tr>"
			//				let team = ''
			//				let dragon = ''
			//				for (let j in res[i]["info"]['participants']) {
			//					if (gameName == res[i]["info"]['participants'][j]['riotIdGameName']) {
			//						if (res[i]["info"]['participants'][j]['win'] == true) {
			//							team = '승리'
			//						} else {
			//							team = '패배'
			//
			//						}
			//						if (res[i]["info"]['queueId'] != 450) {
			//							if (res[i]["info"]['participants'][j]['teamId'] == res[i]["info"]['teams'][0]['teamId']) {
			//								dragon = "드래곤 킬:" + res[i]["info"]['teams'][0]['objectives']['dragon']['kills']
			//							} else if (res[i]["info"]['participants'][j]['teamId'] == res[i]["info"]['teams'][1]['teamId']) {
			//								dragon = "드래곤 킬:" + res[i]["info"]['teams'][1]['objectives']['dragon']['kills']
			//							}
			//						}
			//					}
			//
			//				}
			//				str += "<td>" + team + "</th>"
			//				str += "<th id='KdaAverage" + i + "'>평균</th>"
			//				str += "<th width = '100'>" + dragon + "</th>"
			//				gameCreation = res[i]["info"]['gameCreation'];
			//				gameEndTimestamp = res[i]["info"]['gameEndTimestamp']; //게임 끝난 시간
			//				ingametime = (gameEndTimestamp - gameCreation) // 롤 시간
			//
			//				let ingamemin = Math.floor(ingametime / 1000 / 60);
			//				var ingamespentTime;
			//
			//				ingamespentTime = ingamemin + "분 게임";
			//
			//				str += "<th width = '100'>" + ingamespentTime + "</th>"
			//				str += "</tr>"
			//
			//				str += "<table align='center' border = '1'  id = 'gametable" + i + "' style='display: none'  width = '800'>"
			//
			//				str += "<th width = '150'>승리(팀컬러)</th><th width='95'>소환자 명</th><th width='92'>챔피언 명</th><th width='101'>k/d/a(kda)</th><th width='100'>입힌 피해량</th><th width='90'>받은 피해량</th><th width='60'>cs</th><tr></tr>"
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//				for (let j = 0; j < res[i]["info"]['participants'].length; j++) {
			//
			//					if (gameName == res[i]["info"]['participants'][j]['riotIdGameName']) {
			//						res[i]["info"]['participants'][j]['kills'] + "/" + res[i]["info"]['participants'][j]['deaths'] + "/" + res[i]["info"]['participants'][j]['assists']
			//					}
			//
			//
			//
			//
			//
			//					str += "<tr>"
			//					if (j == 0) {
			//						if (res[i]['info']['participants'][0]['win'] == true) { // 첫번째 팀의 승리패배
			//							team1 = '승리'
			//						} else {
			//							team1 = '패배'
			//						}
			//					}
			//					if (j == 5) {
			//						if (res[i]['info']['participants'][5]['win'] == true) {// 두번째 팀의 승리패배
			//							str += "<td id = 'team2' Colspan='7'>승리</td><tr></tr>"
			//						} else {
			//							str += "<td id = 'team2' Colspan='7'>패배</td><tr></tr>"
			//						}
			//					}
			//					riotIdGameName = res[i]["info"]['participants'][j]['riotIdGameName']
			//					str += "<td>" + riotIdGameName + "</td>"
			//
			//					if (res[i]["info"]['participants'][j]['teamId'] == 100) {
			//						str += "<td>레드팀</td>"
			//					} else {
			//						str += "<td>블루팀</td>"
			//					}
			//
			//					championName = res[i]["info"]['participants'][j]['championName']
			//					//					findchampionName(championName)
			//					str += "<td>" + championName + "</td>"
			//
			//					if (res[i]["info"]['gameMode'] == "ARAM") {
			//						str += "<td>칼바람</td>"
			//					} else {
			//						lane = res[i]["info"]['participants'][j]['lane']
			//						str += "<td>" + lane + "</td>"
			//					}
			//
			//
			//
			//					kills = res[i]["info"]['participants'][j]['kills']
			//					str += "<td>" + kills + "</td>"
			//
			//					deaths = res[i]["info"]['participants'][j]['deaths']
			//					str += "<td>" + deaths + "</td>"
			//
			//					assists = res[i]["info"]['participants'][j]['assists']
			//					str += "<td>" + assists + "</td>"
			//					str += "</tr>"
			//
			//				}
			//				str += "</div>"
			//				str += "</table>"
			//
			//
			//				str += "</div>"
			//			}
			//			str += "<br>"
			//			str += "</div>"
			//			$('#puuid').append(str)
			//			findUserGameMode(res)
			//			findUserKda(gameName, res)
			//			$('#team1').html(team1)
			//			$('#puuid').show();
			//
			//
			//
			//
			//
			//

		}
	})
	//			let str = ''
	//			let team1 = ''
	//			str += "<div id = 'newList'>"
	//			str += "<input type='text' id='gameName' name='gameName' placeholder='아이디' value='게임모드 검색 들어갈 예정'>"
	//			str += "<input type='text' id='gameName' name='gameName' placeholder='아이디' value='챔피언 검색 들어갈 예정'>"
	//			for (let i = 0; i < res.length; i++) {
	//				str += "<div id='matchlist" + i + "' class='list'>"
	//				str += "<table align='center' border='1' width = '800'>"
	//				str += "<tr>"
	//
	//				str += "<th width = '150' rowspan='2' id='gameMode" + i + "'></th>"
	//
	//				for (let j in res[i]["info"]['participants']) {
	//					if (gameName == res[i]['info']['participants'][j]['riotIdGameName']) {
	//						str += "<th rowspan='3' colspan='2' width='114	'><img width='40' height='40'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/" + res[i]['info']['participants'][j]['championName'] + ".png'></th>"
	//					}
	//				}
	//				str += "<th rowspan='2' id = 'KDA" + i + "' width = '100'></th>" // k/d/a
	//				let mykill = ''
	//				for (let j in res[i]["info"]['participants']) {
	//					if (res[i]["info"]['participants'][j]['teamId'] == res[i]["info"]['teams'][0]['teamId']) {
	//
	//						mykill = "킬 관여: " + res[i]["info"]['teams'][0]['objectives']['champion']['kills']
	//
	//					} else if (res[i]["info"]['participants'][j]['teamId'] == res[i]["info"]['teams'][1]['teamId']) {
	//
	//						let totalkill = res[i]["info"]['teams'][1]['objectives']['champion']['kills']
	//						mykill = (((res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists']) / totalkill) * 100).toFixed(0) + "%"
	//					}
	//				}
	//				str += "<th>킬 관여율</th>"
	//				var timeStamp = Date.now(); // 현재시간
	//				//				var date = new Date(timeStamp);
	//				gameEndTimestamp = res[i]["info"]['gameEndTimestamp']; //게임 끝난 시간
	//
	//				loltime = (timeStamp - gameEndTimestamp) // 롤 시간
	//
	//				let day = Math.floor(loltime / 1000 / 60 / 60 / 24);
	//				let hour = Math.floor(loltime / 1000 / 60 / 60);
	//				let min = Math.floor(loltime / 1000 / 60);
	//
	//				var spentTime;
	//				if (day == 0 && hour == 0) {
	//					spentTime = min + "분 전";
	//				} else if (day == 0) {
	//					spentTime = hour + "시간 전";
	//				} else {
	//					spentTime = day + "일 전";
	//				}
	//				str += "<th rowspan='2' width = '150'>" + spentTime + "</th>"
	//				str += "<td rowspan='3'><button id='gamebtn" + i + "' onclick='gamebtn(" + i + ")'>더보기</button></td>"
	//				str += "</tr>"
	//				str += "<tr> <th>" + mykill + "</th></tr>"
	//				str += "<tr>"
	//				let team = ''
	//				let dragon = ''
	//				for (let j in res[i]["info"]['participants']) {
	//					if (gameName == res[i]["info"]['participants'][j]['riotIdGameName']) {
	//						if (res[i]["info"]['participants'][j]['win'] == true) {
	//							team = '승리'
	//						} else {
	//							team = '패배'
	//
	//						}
	//						if (res[i]["info"]['queueId'] != 450) {
	//							if (res[i]["info"]['participants'][j]['teamId'] == res[i]["info"]['teams'][0]['teamId']) {
	//								dragon = "드래곤 킬:" + res[i]["info"]['teams'][0]['objectives']['dragon']['kills']
	//							} else if (res[i]["info"]['participants'][j]['teamId'] == res[i]["info"]['teams'][1]['teamId']) {
	//								dragon = "드래곤 킬:" + res[i]["info"]['teams'][1]['objectives']['dragon']['kills']
	//							}
	//						}
	//					}
	//
	//				}
	//				str += "<td>" + team + "</th>"
	//				str += "<th id='KdaAverage" + i + "'>평균</th>"
	//				str += "<th width = '100'>" + dragon + "</th>"
	//				gameCreation = res[i]["info"]['gameCreation'];
	//				gameEndTimestamp = res[i]["info"]['gameEndTimestamp']; //게임 끝난 시간
	//				ingametime = (gameEndTimestamp - gameCreation) // 롤 시간
	//
	//				let ingamemin = Math.floor(ingametime / 1000 / 60);
	//				var ingamespentTime;
	//
	//				ingamespentTime = ingamemin + "분 게임";
	//
	//				str += "<th width = '100'>" + ingamespentTime + "</th>"
	//				str += "</tr>"
	//
	//				str += "<table align='center' border = '1'  id = 'gametable" + i + "' style='display: none'  width = '800'>"
	//
	//				str += "<th width = '150'>승리(팀컬러)</th><th width='95'>소환자 명</th><th width='92'>챔피언 명</th><th width='101'>k/d/a(kda)</th><th width='100'>입힌 피해량</th><th width='90'>받은 피해량</th><th width='60'>cs</th><tr></tr>"
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//				for (let j = 0; j < res[i]["info"]['participants'].length; j++) {
	//
	//					if (gameName == res[i]["info"]['participants'][j]['riotIdGameName']) {
	//						res[i]["info"]['participants'][j]['kills'] + "/" + res[i]["info"]['participants'][j]['deaths'] + "/" + res[i]["info"]['participants'][j]['assists']
	//					}
	//
	//
	//
	//
	//
	//					str += "<tr>"
	//					if (j == 0) {
	//						if (res[i]['info']['participants'][0]['win'] == true) { // 첫번째 팀의 승리패배
	//							team1 = '승리'
	//						} else {
	//							team1 = '패배'
	//						}
	//					}
	//					if (j == 5) {
	//						if (res[i]['info']['participants'][5]['win'] == true) {// 두번째 팀의 승리패배
	//							str += "<td id = 'team2' Colspan='7'>승리</td><tr></tr>"
	//						} else {
	//							str += "<td id = 'team2' Colspan='7'>패배</td><tr></tr>"
	//						}
	//					}
	//					riotIdGameName = res[i]["info"]['participants'][j]['riotIdGameName']
	//					str += "<td>" + riotIdGameName + "</td>"
	//
	//					if (res[i]["info"]['participants'][j]['teamId'] == 100) {
	//						str += "<td>레드팀</td>"
	//					} else {
	//						str += "<td>블루팀</td>"
	//					}
	//
	//					championName = res[i]["info"]['participants'][j]['championName']
	//					//					findchampionName(championName)
	//					str += "<td>" + championName + "</td>"
	//
	//					if (res[i]["info"]['gameMode'] == "ARAM") {
	//						str += "<td>칼바람</td>"
	//					} else {
	//						lane = res[i]["info"]['participants'][j]['lane']
	//						str += "<td>" + lane + "</td>"
	//					}
	//
	//
	//
	//					kills = res[i]["info"]['participants'][j]['kills']
	//					str += "<td>" + kills + "</td>"
	//
	//					deaths = res[i]["info"]['participants'][j]['deaths']
	//					str += "<td>" + deaths + "</td>"
	//
	//					assists = res[i]["info"]['participants'][j]['assists']
	//					str += "<td>" + assists + "</td>"
	//					str += "</tr>"
	//
	//				}
	//				str += "</div>"
	//				str += "</table>"
	//
	//
	//				str += "</div>"
	//			}
	//			str += "<br>"
	//			str += "</div>"
	//			$('#puuid').append(str)
	//			findUserGameMode(res)
	//			findUserKda(gameName, res)
	//			$('#team1').html(team1)
	//			$('#puuid').show();
			}

		})

})*/
//function findUserGameMode(res) {
//
//	for (let i = 0; i < res.length; i++) {
//		var userGameMode = document.getElementById("gameMode" + i); // 게임모드
//		if (res[i]["info"]['queueId'] == 450) {
//			gameMode = "칼바람"
//		} else if (res[i]["info"]['queueId'] == 490) {
//			gameMode = "빠른대전"
//		} else if (res[i]["info"]['queueId'] == 420) {
//			gameMode = "솔로랭크"
//		} else if (res[i]["info"]['queueId'] == 440) {
//			gameMode = "자유랭크"
//		}
//		userGameMode.innerHTML = gameMode
//	}
//}


