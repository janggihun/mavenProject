/**
 * 
 */

$(document).ready(function() {
	console.log("New Client Join")
	$('#loadMore').hide()

	//url에 있는 파라미터 값으로 게임 아이디 태그 잡음
	let pathname = window.location.pathname

	dName = decodeURI(pathname)
	//	console.log(dName);

	let replaced_str = dName.replace("/stm", '');// 기본 로컬호스트삭제
	let replaced_str1 = replaced_str.replace("%20", ''); //사이띄기 삭제
	var gameId = replaced_str1.split('/'); // 배열로 변경
	let gameName = gameId[1] // 아이디
	let tagLine = gameId[2] // 태그



	console.log("|GameId : " + gameName + "|-" + "|Tag : " + tagLine + "|");
	///////////////////////////////
	window.scrollTo(0, 0); //스크롤 상단위치 들어오자마자
	document.getElementById('search-home').value = ''


	logolodingImg()
	mainStart()

	//					`<img width=300 height=300 src='/img/tier/.png>`



	setTimeout(function() {
		
		aastr = `<img width=300 height=300 src='/img/tier/${tier}.png'	 alt='티어' onerror='this.src="/img/tier/gold.png"' />`


		$('.imimim').html(aastr)
		

	}, 2000);
	setTimeout(function() {
		aastr = "<img width=300 height=300 src='/img/effect/ef1.gif' alt='티어이펙트''>"

		$('.imimim').html(aastr)

	}, 1800);
	setTimeout(function() {
		aastr = "<img width=300 height=300 src='/img/effect/ef2.gif' alt='티어이펙트''>"

		$('.imimim').html(aastr)

	}, 1500);
	//		setTimeout(function() {
	//			aastr = "<img width=300 height=300 src='/img/effect/starEffect.gif' alt='티어이펙트''>"
	//	
	//			$('.imimim').append(aastr)
	//	
	//		}, 2000);


	int = 4;
	let timerId = setInterval(() => {

		int--;
		document.getElementById('loadMore').value = int + "초 뒤에 가능합니다."

	}, 1000);
	setTimeout(() => {

		clearInterval(timerId);
		document.getElementById('loadMore').disabled = false;
		document.getElementById('loadMore').value = "더보기";

	}, 4000);

})




function logolodingImg() {

	let gameName1 = $('#gameName').val()
	var gameId = gameName1.split('#');
	let gameName = gameId[0]
	//	console.log(gameName)
	data3 = { 'gameName': gameName }
	$.ajax({
		type: 'post',
		url: '/lane/prefer',
		data: data3,
		success: function(res) {
			//			console.log(res)
			LaneChart(res)

		}
	})

}

function showgraph(win, lose) {

	winLoseList = [win, lose]
	winLoseListKor = ["승리", "패배"]

	Chart.pluginService.register({
		beforeDraw: function(chart) {
			if (chart.config.options.elements.center) {
				// Get ctx from string
				var ctx = chart.chart.ctx;

				// Get options from the center object in options
				var centerConfig = chart.config.options.elements.center;
				var fontStyle = centerConfig.fontStyle || 'Arial';
				var txt = centerConfig.text;
				var color = centerConfig.color || 'rgba(53, 32, 132, 1)';
				var maxFontSize = centerConfig.maxFontSize || 75;
				var sidePadding = centerConfig.sidePadding || 20;
				var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
				// Start with a base font of 30px
				ctx.font = "30px " + fontStyle;

				// Get the width of the string and also the width of the element minus 10 to give it 5px side padding
				var stringWidth = ctx.measureText(txt).width;
				var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

				// Find out how much the font can grow in width.
				var widthRatio = elementWidth / stringWidth;
				var newFontSize = Math.floor(30 * widthRatio);
				var elementHeight = (chart.innerRadius * 2);

				// Pick a new font size so it will not be larger than the height of label.
				var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
				var minFontSize = centerConfig.minFontSize;
				var lineHeight = centerConfig.lineHeight || 25;
				var wrapText = false;

				if (minFontSize === undefined) {
					minFontSize = 20;
				}

				if (minFontSize && fontSizeToUse < minFontSize) {
					fontSizeToUse = minFontSize;
					wrapText = true;
				}

				// Set font settings to draw it correctly.
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
				var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
				ctx.font = fontSizeToUse + "px " + fontStyle;
				ctx.fillStyle = color;

				if (!wrapText) {
					ctx.fillText(txt, centerX, centerY);
					return;
				}

				var words = txt.split(' ');
				var line = '';
				var lines = [];

				// Break words up into multiple lines if necessary
				for (var n = 0; n < words.length; n++) {
					var testLine = line + words[n] + ' ';
					var metrics = ctx.measureText(testLine);
					var testWidth = metrics.width;
					if (testWidth > elementWidth && n > 0) {
						lines.push(line);
						line = words[n] + ' ';
					} else {
						line = testLine;
					}
				}

				// Move the center up depending on line height and number of lines
				centerY -= (lines.length / 2) * lineHeight;

				for (var n = 0; n < lines.length; n++) {
					ctx.fillText(lines[n], centerX, centerY);
					centerY += lineHeight;
				}
				//Draw text in center
				ctx.fillText(line, centerX, centerY);
			}
		}
	});


	var config = {
		type: 'doughnut',
		data: {
			labels: winLoseListKor,
			datasets: [{
				data: winLoseList, //<<<<데이터 들어가는곳

				backgroundColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(255, 99, 132, 1)'


				], borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(255, 99, 132, 1)',

				]
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false, //x축 반으로 줄임
			cutoutPercentage: 80,
			elements: {
				center: {
					text: winLoseList[0] + "win", // <<여기가 가운데 글씨들어가는곳
					color: 'white', // Default is #000000
					fontStyle: 'Arial', // Default is Arial
					sidePadding: 20, // Default is 20 (as a percentage)
					minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
					lineHeight: 10 // Default is 25 (in px), used for when text wraps


				}
			}
		}
	};

	var ctx = document.getElementById("donutChart").getContext("2d");
	var myChart = new Chart(ctx, config);
}

let cnt = 0;
$('#searchBoom').on("click", function() {

	let gameName = $('#search-home').val();
	if (gameName.length < 1) {
		alert("빈칸을 작성해 주세요")
		return false
	}

	var result = gameName.search('#');
	if (result == -1) {
		tagLine = "KR1"
		location.href = '/stm/' + gameName + "/" + tagLine
	} else {

		var gameId = gameName.split('#');
		let gameName1 = gameId[0] // 아이디
		let tagLine = gameId[1] // 태그
		location.href = '/stm/' + gameName1 + "/" + tagLine
	}

})







function mainStart() {

	let gameName = $('#gameName').val()

	if (gameName != '') {
		mainSearch(gameName)
	}

}
function mainSearch(gameName1) {
	cnt++;
	var gameId = gameName1.split('#');
	gameName = gameId[0] // 아이디
	tagLine = gameId[1] // 태그
	matchCnt = cnt;
	data = { 'gameName': gameName, 'tagLine': tagLine, 'matchCnt': matchCnt }
	bbb(data)

}
function dbCheckInfo(res1) {


}

function aiCheckTroll(res1) {
	//		console.log(res1)
	let queue = ''
	console.log("ai판독중...")
	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/ai/dataToAi',
		data: JSON.stringify(res1),
		success: function(res) {
			//			console.log(res)

			if (res.queueId == 420) {

				$.ajax({
					contentType: 'application/json',
					type: 'post',
					url: '/ai/trollcheck420',
					//					async: false,
					data: JSON.stringify(res),
					success: function(infoData) {

						//						console.log(infoData)
						matchId = infoData['matchId']
						participantId = infoData['participantId']
						tier = infoData['tier']
						key = infoData['key']
						length = infoData['length']
						accuracy = infoData['accuracy']
						rankingS = infoData['rankingS']
						if (tier == 'Tier' || key == 'error' || key == '에러' || length < 5 || accuracy < 0.7) {
							//에러 or 정확도 낮는 데이터 제외
							$('#' + matchId + participantId).html("평균");


						} else if (rankingS > 0) {
							//							console.log("0")
							userLevelKoList = ["평범", "고수", "초고수", "전설", "영웅", "신"]
							userTier = infoData.tier
							if (rankingS > 5) {

								rankingS = 5
							}


							userLevel = userLevelKoList[rankingS]

							//							console.log(userLevel)


							str = `<div class = checkFlagStamp>
											
											<div class="stampGosu">
												<center>
												<span tooltip="${userTier} 구간 한정">
													${userLevel}
												</span>
												</center>
											</div>
									
								  </div>`

							$('#' + matchId + participantId).html(str);
							//							if (rankingS >= 5) {
							//
							////								$('#' + matchId + participantId).css("color", "red")
							//							}

						}
						//ai판결시작
						else if (res.win == 1) { // 게임 : 승리 
							//							console.log("1")

							if (key == '패') { //인공지능 지표 : 패

								win = 'AI판결 : 팀빨로 승리해습니다.'

								str = '<div class = checkFlagStamp><div class="stampLose"><span tooltip="' + win + '">팀빨...</span></div></div>'

								$('#' + matchId + participantId).html(str);
							} else {
								$('#' + matchId + participantId).html("평균");

							}
						} else if (res.win == 0) { // 게임 : 패배
							//							console.log("2")
							if (key == '패') { //인공지능 지표 : 패
								$('#' + matchId + participantId).html("평균");
							} else if (key == '승' && accuracy > -1) { //인공지능 지표: 승

								lose = 'AI판결 : 팀운이 좋지 않았습니다.'

								str = '<div class = checkFlagStamp><div class="stampWin"><span tooltip="' + lose + '">팀운이...</span></div></div>'

								$('#' + matchId + participantId).html(str);

							} else {


							}
						}
					}
				})//ajax끝
			} else if (res.queueId == 450) {
				//				console.log(res)
				$.ajax({
					contentType: 'application/json',
					type: 'post',
					url: '/ai/trollcheck450',
					data: JSON.stringify(res),
					success: function(infoData) {
						//						console.log(infoData)
						matchId = infoData['matchId']
						participantId = infoData['participantId']
						tier = infoData['tier']
						key = infoData['key']
						length = infoData['length']
						accuracy = infoData['accuracy']
						rankingS = infoData['rankingS']
						if (tier == 'Tier' || key == 'error' || key == '에러' || length < 5 || accuracy < 0.7) {
							//에러 or 정확도 낮는 데이터 제외
							$('#' + matchId + participantId).html("평균");


						} else if (rankingS > -1) {
							//							console.log("0")
							userLevelKoList = ["중간계", "고수", "초고수", "전설", "영웅", "신"]
							userTier = infoData.tier
							if (rankingS > 5) {

								rankingS = 5
							}


							userLevel = userLevelKoList[rankingS]

							//							console.log(userLevel)


							str = `<div class = checkFlagStamp>
											
											<div class="stampGosu">
												<center>
												<span tooltip="${userTier} 구간 한정">
													${userLevel}
												</span>
												</center>
											</div>
									
								  </div>`

							$('#' + matchId + participantId).html(str);

						} else if (res.win == 1) { // 게임 : 승리

							if (value == '패') { //인공지능 지표 : 패

								str = '<div class = checkFlagStamp><div class="stampLose"><span tooltip="' + tier + '구간의 칼바람 트롤러">실력이...!</span></div></div>'
								$('#' + matchId + participantId).html(str);

							} else { //인공지능 지표: 승

								$('#' + matchId + participantId).html('평균');
							}
						} else { // 게임 : 패배
							if (value == '패') { //인공지능 지표 : 패

								str = '평균'
								$('#' + matchId + participantId).html('평균');

							} else { //인공지능 지표: 승
								str = '<div class = checkFlagStamp><div class="stampWin"><span tooltip=" ' + tier + ' 구간의 칼바람 실력자">실력이?? </span></div>	</div>'
								$('#' + matchId + participantId).html(str);
							}


						}

					}
				})//ajax끝

			} else {
				if (res.queueId == 1900) {
					queue = "URF"
				} else if (res.queueId == 490) {
					queue = "빠른대전"
				} else if (res.queueId == 440) {
					queue = "자유랭크"
				}
				key = res.matchId + res.participantId
				str = "<span tooltip = '칼바람과 솔로랭크는 확인 가능합니다.'><font size=2><a href = '#'> |" + "개발중" + "|<br></a></font></span>";
				$('#' + key).html(str);

			}

		}

	})//ajax끝


}



//////////////////장기훈/////////////////////////

matchId_ai_list = []
function bbb(data) {
	//	console.log(data)
	$.ajax({
		type: 'post',
		url: '/match/list',
		data: data,
		success: function(res) {

//			console.log(res)

			if (res.length != 0) {
				MList = [];
				for (let i = 0; i < res.length; i++) {
					Gamedata = {}; // 한게임당 데이터
					ingamedata = [];
					for (let j = 0; j < res[i]["info"]['participants'].length; j++) {
						if (res[i]["info"]['endOfGameResult'] != "Abort_Unexpected") {
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
							mm.goldEarned = res[i]["info"]['participants'][j]['goldEarned']
							//						mm.puuid =res[i]["info"]['participants'][j]['puuid']
							mm.totalTimeCCDealt = res[i]["info"]['participants'][j]['totalTimeCCDealt']
							mm.totalTimeSpentDead = res[i]["info"]['participants'][j]['totalTimeSpentDead']
							mm.onMyWayPings = res[i]["info"]['participants'][j]['onMyWayPings']
							mm.enemyVisionPings = res[i]["info"]['participants'][j]['enemyVisionPings']
							mm.physicalDamageDealtToChampions = res[i]["info"]['participants'][j]['physicalDamageDealtToChampions']
							mm.magicDamageDealtToChampions = res[i]["info"]['participants'][j]['magicDamageDealtToChampions']
							mm.teamId = res[i]["info"]['participants'][j]['teamId']
							mm.win = res[i]["info"]['participants'][j]['win']
							mm.matchId = res[i]['metadata']['matchId'] // 매치 아이디
							mm.queueId = res[i]["info"]['queueId'] // 게임 모드
							mm.firstBloodKill = res[i]["info"]['participants'][j]['firstBloodKill']
							mm.kills = res[i]["info"]['participants'][j]['kills']
							mm.deaths = res[i]["info"]['participants'][j]['deaths']
							mm.assists = res[i]["info"]['participants'][j]['assists']
							if (res[i]["info"]['participants'][j]['deaths'] == 0) {
								mm.kda = (res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists'])

							} else {
								mm.kda = (((res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists'])) / res[i]["info"]['participants'][j]['deaths']).toFixed(2)
							}

							mm.teamPosition = res[i]["info"]['participants'][j]['teamPosition']
							mm.totalDamageDealtToChampions = res[i]["info"]['participants'][j]['totalDamageDealtToChampions']
							mm.totalDamageTaken = res[i]["info"]['participants'][j]['totalDamageTaken']
							mm.totalMinionsKilled = res[i]["info"]['participants'][j]['totalMinionsKilled'] // 미니언 킬
							mm.totalAllyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalAllyJungleMinionsKilled'] // 토탈 정글몹 킬
							mm.totalEnemyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalEnemyJungleMinionsKilled'] //상대 정글몹 킬
							mm.wardsKilled = res[i]["info"]['participants'][j]['wardsKilled'] // 와드 킬
							mm.wardsPlaced = res[i]["info"]['participants'][j]['wardsPlaced'] // 시야점수
							mm.gameStartTimestamp = res[i]["info"]['gameStartTimestamp']
							mm.gameEndTimestamp = res[i]["info"]['gameEndTimestamp']
							mm.gameDuration = (res[i]["info"]['gameDuration'] / 60).toFixed(0)
							mm.item0 = res[i]["info"]['participants'][j]['item0']
							mm.item1 = res[i]["info"]['participants'][j]['item1']
							mm.item2 = res[i]["info"]['participants'][j]['item2']
							mm.item3 = res[i]["info"]['participants'][j]['item3']
							mm.item4 = res[i]["info"]['participants'][j]['item4']
							mm.item5 = res[i]["info"]['participants'][j]['item5']
							for (k in res[i]['info']['teams']) {
								if (res[i]["info"]['teams'][k]['teamId'] == res[i]["info"]['participants'][j]['teamId']) {
									mm.totalTeamkills = res[i]["info"]['teams'][k]['objectives']['champion']['kills']
									mm.dragon = res[i]["info"]['teams'][k]['objectives']['dragon']['kills']
								}

							}
							ingamedata.push(mm)

							Gamedata.info = ingamedata
						}
					}
					ingameteam = [];

					for (j = 0; j < 2; j++) {
						mm = {}
						mm.matchId = res[i]['metadata']['matchId']
						mm.teamId = res[i]["info"]['teams'][j]['teamId']
						mm.dragon = res[i]["info"]['teams'][j]['objectives']['dragon']['kills']
						mm.kills = res[i]["info"]['teams'][j]['objectives']['champion']['kills']

						ingameteam.push(mm)
						Gamedata.teams = ingameteam
					}
					MList.push(Gamedata)
				}
				//				console.log(MList)
				let temp = JSON.stringify(MList)
				data2 = { 'Mlist': temp }

				$.ajax({
					type: 'post',
					url: '/riot/api',
					data: data2,
					//					dataType: 'json',
					success: function(res) {
						//						console.log(res)
						aaa()
					}
				})

			} else {
				aaa()
			}

		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);  //응답 메시지
			console.log(textStatus); //"error"로 고정인듯함
			console.log(errorThrown);

			let m = "존재하지 않는 아이디입니다."
			if (m != '') {
				alert(m);
			}
			console.log(m)
		}
	})
}


allofList = []
function aaa() { // data == 검색한 게임 아이디

	$.ajax({
		type: 'post',
		url: '/riot/game',

		success: function(res) {
			for (let i in res) {

				allofList.push(res[i])
			}
			//			console.log(res)
			//			console.log(allofList)
			showGameTamble(res)

		}
	})
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
	location.href = '/stm/' + gameName + '/' + tagLine
}

function summonerV4(res) {

	let temp = JSON.stringify(res)

}


newmatchId = ''

function gamebtn(goBtn, matchId) {


	newmatchId = matchId

	a = $('#controller' + matchId).css("height")

	if (a == '280px') { //닫힘
		$('#controller' + matchId).css("height", "10px")
		$('#controller' + matchId).css("display", "block")
		$('#controller' + matchId).empty();
	} else { //열림
		$('#controller' + matchId).css("height", "280px")
		$('#controller' + matchId).css("display", "block")
		$('#controller' + matchId).css("display", "flex")
		$('#controller' + matchId).css("gap", "8px")
		container2 = `<div class="container2" id = 'container2${matchId}' >`
		container4 = `<div class="container4" id = 'container4${matchId}' >`
		$('#controller' + matchId).append(container2)
		$('#controller' + matchId).append(container4)

		showGameTambleBody(matchId) // 바디부분 만들기


		data = { 'matchId': matchId }

		$.ajax({
			type: 'post',
			url: '/summoner/v4/userList',
			data: data,
			async: false,
			success: function(res) {

				for (let i in res) {

					if (res[i].queueId == 420) { //솔랭인경우
						$.ajax({
							contentType: 'application/json',
							type: 'post',
							url: '/summoner/v4/Rank',
							data: JSON.stringify(res[i]),
							success: function(res1) {
								aiCheckTroll(res1)
							}
						})
					} else if (res[i].queueId == 450) {

						aiCheckTroll(res[i])

					} else {
						aiCheckTroll(res[i])

					}
				}
				//				console.log(mvpCheck)

			}

		})

	}
}

function goTier(gameName, tagLine) {

	data = { 'gameName': gameName, 'tagLine': tagLine }
	$.ajax({
		type: 'post',
		url: '/summoner/v4/Search',
		data: data,
		async: true,
		success: function(res) {

			if (res.length != 0) {

				tier = res[0].tier.toLowerCase();

			} else {
				tier = 'gold'

			}
		}
	})
}


function reload(gameName, tagLine, q) { //무조건 처음에 뜨는 메소드 :전체,솔랭,등




	$('#loadMore').hide()
	nowStatus = queueChange(q)
	queueId = q

	$('.containerXCF').empty()
	allofList = []
	matchCnt = 1
	window.scrollTo(0, 500);


	data = { 'gameName': gameName, 'tagLine': tagLine, 'queueId': queueId, "matchCnt": (matchCnt - 1) * 3 }


	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/GameMode/Search',
		data: JSON.stringify(data),
		success: function(res) {
			//			console.log(res)
			for (let i in res) {
				allofList.push(res[i])
			}
			showGameTamble(res)
			update(gameName, tagLine)
			//			window.scrollTo(0, 0);

			$('#loadMore').show()
			aastr = "<img width=300 height=300 src='/img/tier/" + tier + ".png'	 alt='티어''>"
			$('.imimim').html(aastr)
		}
	})

}

checkPartQueueId = [] // 지금 가지고 있는 Q아이디
function findPartOfQueuId() {

	$.ajax({

		type: 'post',
		url: '/GameMode/queuId',
		data: { 'riotIdGameName': gameName },
		success: function(res) {
			checkPartQueueId = res
//			console.log(res)

			for (let i in checkPartQueueId) {
				queueId_kor = checkPartQueueId[i]['queueId_kor']
				queueId1 = checkPartQueueId[i]['queueId']

				queueIdButton = `<li class = "sampletest"><a href="javascript:reload('${gameName}','${tagLine}',${queueId1})">${queueId_kor}</a></li>`
				$('.menu2').append(queueIdButton)

			}



		}
	})
}

////////////////////롤 업데이트 시작//////////////////
function update(gameName, tagLine) {
	if (tier != '') {
		//			console.log("티어값 존재")
		aastr = "<img width=300 height=300 src='/img/tier/" + tier + ".png'	 alt='티어''>"

		$('.imimim').html(aastr)

	}
	//	console.log("업데이트 시작...")
	data = { 'gameName': gameName, 'tagLine': tagLine }
	//	console.log(data)
	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/GameMode/update',
		data: JSON.stringify(data),
		success: function(res) {
			//			console.log(res)

			if (res[0]['API']) {

				console.log("API/matchId/100개이상/자동종료	")
				return false;
			}

			updateSave(res)

		}
	})
}

function updateSave(res) { //업데이트 저장문구
	//	console.log(data)
	//5초 기다리게 할지말지 고민

	console.log("New Data input..")
	if (res.length != 0) {
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
				mm.goldEarned = res[i]["info"]['participants'][j]['goldEarned']
				//						mm.puuid =res[i]["info"]['participants'][j]['puuid']
				mm.totalTimeCCDealt = res[i]["info"]['participants'][j]['totalTimeCCDealt']
				mm.totalTimeSpentDead = res[i]["info"]['participants'][j]['totalTimeSpentDead']
				mm.onMyWayPings = res[i]["info"]['participants'][j]['onMyWayPings']
				mm.enemyVisionPings = res[i]["info"]['participants'][j]['enemyVisionPings']
				mm.physicalDamageDealtToChampions = res[i]["info"]['participants'][j]['physicalDamageDealtToChampions']
				mm.magicDamageDealtToChampions = res[i]["info"]['participants'][j]['magicDamageDealtToChampions']
				mm.teamId = res[i]["info"]['participants'][j]['teamId']
				mm.win = res[i]["info"]['participants'][j]['win']
				mm.matchId = res[i]['metadata']['matchId'] // 매치 아이디
				mm.queueId = res[i]["info"]['queueId'] // 게임 모드
				mm.firstBloodKill = res[i]["info"]['participants'][j]['firstBloodKill']
				mm.kills = res[i]["info"]['participants'][j]['kills']
				mm.deaths = res[i]["info"]['participants'][j]['deaths']
				mm.assists = res[i]["info"]['participants'][j]['assists']
				if (res[i]["info"]['participants'][j]['deaths'] == 0) {
					mm.kda = (res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists'])

				} else {
					mm.kda = (((res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists'])) / res[i]["info"]['participants'][j]['deaths']).toFixed(2)
				}

				mm.teamPosition = res[i]["info"]['participants'][j]['teamPosition']
				mm.totalDamageDealtToChampions = res[i]["info"]['participants'][j]['totalDamageDealtToChampions']
				mm.totalDamageTaken = res[i]["info"]['participants'][j]['totalDamageTaken']
				mm.totalMinionsKilled = res[i]["info"]['participants'][j]['totalMinionsKilled'] // 미니언 킬
				mm.totalAllyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalAllyJungleMinionsKilled'] // 토탈 정글몹 킬
				mm.totalEnemyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalEnemyJungleMinionsKilled'] //상대 정글몹 킬
				mm.wardsKilled = res[i]["info"]['participants'][j]['wardsKilled'] // 와드 킬
				mm.wardsPlaced = res[i]["info"]['participants'][j]['wardsPlaced'] // 시야점수
				mm.gameStartTimestamp = res[i]["info"]['gameStartTimestamp']
				mm.gameEndTimestamp = res[i]["info"]['gameEndTimestamp']
				mm.gameDuration = (res[i]["info"]['gameDuration'] / 60).toFixed(0)
				mm.item0 = res[i]["info"]['participants'][j]['item0']
				mm.item1 = res[i]["info"]['participants'][j]['item1']
				mm.item2 = res[i]["info"]['participants'][j]['item2']
				mm.item3 = res[i]["info"]['participants'][j]['item3']
				mm.item4 = res[i]["info"]['participants'][j]['item4']
				mm.item5 = res[i]["info"]['participants'][j]['item5']
				for (k in res[i]['info']['teams']) {
					if (res[i]["info"]['teams'][k]['teamId'] == res[i]["info"]['participants'][j]['teamId']) {
						mm.totalTeamkills = res[i]["info"]['teams'][k]['objectives']['champion']['kills']
						mm.dragon = res[i]["info"]['teams'][k]['objectives']['dragon']['kills']
					}

				}
				ingamedata.push(mm)

				Gamedata.info = ingamedata

			}
			ingameteam = [];

			for (j = 0; j < 2; j++) {
				mm = {}
				mm.matchId = res[i]['metadata']['matchId']
				mm.teamId = res[i]["info"]['teams'][j]['teamId']
				mm.dragon = res[i]["info"]['teams'][j]['objectives']['dragon']['kills']
				mm.kills = res[i]["info"]['teams'][j]['objectives']['champion']['kills']

				ingameteam.push(mm)
				Gamedata.teams = ingameteam
			}
			MList.push(Gamedata)
		}

		let temp = JSON.stringify(MList)
		data2 = { 'Mlist': temp }

		$.ajax({
			type: 'post',
			url: '/upDate/saveData',
			data: data2,
			success: function(res) {
				console.log("Save Succeded")

			}
		})
	}
}

//고정바
$(window).scroll(
	function() {

		//		console.log($(window).scrollTop())
		if ($(window).scrollTop() > 524) {
			$('.contentsCheckM').addClass('fix');


		} else {
			$('.contentsCheckM').removeClass("fix");

		}
	}
);






function clickOnLoadMore(int) {
	document.getElementById('loadMore').value = "5초 뒤에 가능합니다."
	document.getElementById('loadMore').disabled = false;
	console.log(tier)


	aastr = "<img width=300 height=300 src='/img/tier/" + tier + ".png'	 alt='티어''>"

	update(gameName, tagLine)
	//	if (allofList.length < 10) {
	//
	//		alert("현제 페이지가 마지막 페이지입니다.")
	//		return false;
	//	}
	//로직 1. 더보기를 누르면 matchCnt값을 증가시켜 기존보다 10개 많은 matchId값을 가지고오게한다.
	//	2. 그 시간 안에 사용자가 더 클릭하지 못하게 setInterval함수로 막아둔다.
	//	3. 받은 값을 중복제거 시켜 view에 뿌려준다.


	int = 6;
	let timerId = setInterval(() => {

		int--;
		document.getElementById('loadMore').value = int + "초 뒤에 가능합니다."

	}, 1000);
	setTimeout(() => {

		clearInterval(timerId);
		document.getElementById('loadMore').disabled = false;
		document.getElementById('loadMore').value = "더보기";

	}, 6000);

	document.getElementById('loadMore').disabled = true;

	$('.containerXR').remove()

	queueId = queuecheckInt(nowStatus)



	/// 데이터 이동 시작///
	if (nowStatus == 0) {

		data = { 'gameName': gameName, 'tagLine': tagLine, 'queueId': queueId, "matchCnt": (matchCnt - 1) * 10 }

	} else {
		data = { 'gameName': gameName, 'tagLine': tagLine, 'queueId': queueId, "matchCnt": (matchCnt) * 10 }

	}

	//	console.log("ajax실행 시작")
	let needMatchIdList = []
	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/upDate/infoMatchId',
		async: false, // ajax실행이 완료될때까지 밑으로 안내려감
		data: JSON.stringify(data),
		success: function(res) {	//res : 원하는 matchId수만큼 들어있음

			let MatchIdList1 = []
			allofList.forEach(i => { MatchIdList1.push(i['matchId']) })
			needMatchIdList = res.filter(x => !MatchIdList1.includes(x))
			//			console.log(needMatchIdList)
			//			console.log("ajax실행 완료")
		}
	})

	//	console.log("ajax실행 전부 되기전에는 안내려움")

	data = { 'needList': needMatchIdList }
	//	console.log(data)
	let testList = []
	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/upDate/infoData',
		data: JSON.stringify(data),
		async: false,//ajax실행이 완료될때까지 밑으로 안내려감
		success: function(res) {
			//			console.log(res)
			//			console.log("ajax실행중")
			testList = res
			allofList = allofList.concat(res) // 다음 비교를 위해 allofList의 수를 합쳐줌
			//	console.log(ac8)
			//			console.log("ajax실행 완료")

		}
	})
	if (testList.length == 0) {


		return false;
	}
	//	console.log("만들기 시작")
	//	console.log(testList)
	showGameTamble(testList)
	window.scrollTo(0, 99999);
	matchCnt++;
	$('.imimim').html(aastr)
}



////////////////////롤 업데이트 종료//////////////////