
//let cnt = 0;
$(document).ready(function() {


	mainStart()


})
let cnt = 0;
function mainStart() {

	let gameName = $('#gameName').val()


	console.log(gameName) // 값이 안 넘어왔음
	if (gameName != '') {
		mainSearch(gameName)
	}
}
function mainSearch(gameName1) {
	cnt++
	console.log(cnt)
	var gameId = gameName1.split('#');
	let gameName = gameId[0] // 아이디
	let tagLine = gameId[1] // 태그
	let matchCnt = cnt
	data = { 'gameName': gameName, 'tagLine': tagLine , 'matchCnt':matchCnt}
	bbb(data)
}

//////////////////장기훈////



function gamebtn(i) {
	console.log(i)
	var gametable = document.getElementById("gametable" + i + "");
	gametable.style.display = ((gametable.style.display != 'none') ? 'none' : 'block');
	if ((i + 1) % 3 == 0) {
		loadMore.style.top = ((gametable.style.display != 'none') ? '80%' : '25%');
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
//	data = { 'gameName': gameName, 'tagLine': tagLine }
	location.href= '/stm/'+gameName+'/'+tagLine
//	bbb(data)
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
	console.log(data)
	$.ajax({
		type: 'post',
		url: '/match/list',
		data: data,
		//		async: true,
		success: function(res) {
			
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
						mm.summonerLevel = res[i]["info"]['participants'][j]['summonerLevel']
						mm.profileIcon = res[i]["info"]['participants'][j]['profileIcon']
						mm.championName = res[i]["info"]['participants'][j]['championName']//챔피언 아이디
						mm.participantId = res[i]["info"]['participants'][j]['participantId'] // 플레이어 고유 인덱스
						mm.summoner1Id = res[i]["info"]['participants'][j]['summoner1Id']//스펠 D
						mm.summoner2Id = res[i]["info"]['participants'][j]['summoner2Id']//스펠 F 화면에 출력 가능할 떄 할 것
						mm.teamId = res[i]["info"]['participants'][j]['teamId']
						mm.win = res[i]["info"]['participants'][j]['win']
						mm.matchId = res[i]['metadata']['matchId'] // 매치 아이디
						mm.queueId = res[i]["info"]['queueId'] // 게임 모드
						mm.firstBloodKill = res[i]["info"]['participants'][j]['firstBloodKill']
						mm.kills = res[i]["info"]['participants'][j]['kills']
						mm.deaths = res[i]["info"]['participants'][j]['deaths']
						mm.assists = res[i]["info"]['participants'][j]['assists']
						//						mm.kda = res[i]["info"]['participants'][j]['challenges']['kda'] // 우르프는 challenges가 없음 ㅋㅋㅋ
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
						mm.item0 = res[i]["info"]['participants'][j]['item0']
						mm.item1 = res[i]["info"]['participants'][j]['item1']
						mm.item2 = res[i]["info"]['participants'][j]['item2']
						mm.item3 = res[i]["info"]['participants'][j]['item3']
						mm.item4 = res[i]["info"]['participants'][j]['item4']
						mm.item5 = res[i]["info"]['participants'][j]['item5']
						ingamedata.push(mm)






						//							ss.matchId = res[i]['metadata']['matchId']
						//							ss.participantId = res[i]["info"]['participants'][j]['participantId']
						//							ingameitem.push(ss)

						//						Gamedata.item = ingameitem
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
				console.log(MList)
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



