/**
 * 
 */
$('#loading').hide()
//db넣은걸 가지고 와서 사용할떄 쓰는 리스트
let dbFindList = []

let championName = ''
let teamId = ''
let matchId = ''

let damageTakenOnTeamPercentage = ''
let kda = ''
let killParticipation = ''
let teamDamagePercentage = ''
let goldPerMinute = ''
let soloKills = ''
let totalTimeSpentDead = ''
let visionWardsBoughtInGame = ''
let visionScore = ''
let win = ''
let gameStartTimestamp = ''
let riotIdGameName = ''
let riotIdTagline = ''
//db에 넣을때 사용하는 리스트
let dbList = [];

let matchIdCnt = 0;
$("#find").on("click", function() {


	matchIdCnt = 0;
	startRiotTv()

})
function startRiotTv() {

	$("#loading").show()
	//db가서 최신 matchId와 다른지 확인 후 다르면 업데이트

	findPuuIdFindListSaveDb()

	//업데이트 후에 db에서 가지고 오기
	dbFindData()

	$('#loading').hide()

}
function findOne(matchId) {

	chartteam(matchId)

}

function dbFindData() {
	$('#detail2').empty()
	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()
	data = {
		'gameName': gameName1,
		'tagLine': tagLine,
		'matchIdCnt': matchIdCnt * 3
	}
	let cnt = 1;
	dbFindList = []
	let str = ''

	$.ajax({

		type: 'post',
		url: '/riotTv/dbFindData',
		async: false,
		data: data,
		success: function(res) {

			dbFindList = res

			for (let z in res) {

				if (res[z].riotIdGameName == gameName1) {

					str += cnt + "번째 경기" + '<input type = "button" onclick = "findOne(\'' + res[z].matchId + '\')" value = ">>라문철tv분석<<">'
					str += "내 챔프 : <img width='50' height='50'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/" + res[z].championName + ".png'>"
					str += res[z].teamId + '</br>'
					cnt++;
				}

			}
			str += "<a href = 'javascript: startRiotTv()'> ▽ ▽ ▽ ▽ ▽▽▽  더보기 ▽▽▽ ▽ ▽ ▽ ▽ ▽ ▽ </a>"

			$('#detail2').html(str)
			console.log("최신 db통신완료")

		}

	})

}
//db에 저장하기
function dbSaveInfoRiotTv() {


	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/riotTv/dbSaveInfoRiotTv',
		async: false,
		data: JSON.stringify(dbList),
		success: function(res) {

		}

	})

}
//dbList에 값이 있으면 새로운데이터 존재 >> db저장 >> db불러오기 순서
//dbList에 값이 없으면 현재 db가 최신db >> db불러오기
function findPuuIdFindListSaveDb() {

	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()
	$('#detail2').empty()
	matchIdCnt++
	data = {
		'gameName': gameName1,
		'tagLine': tagLine,
		'matchIdCnt': matchIdCnt * 3
	}
	console.log(matchIdCnt)
	$.ajax({

		type: 'post',
		url: '/riotTv/findPuuIdFindList',
		async: false,
		data: data,
		success: function(res) {
			//res : matchid list
			//db와 api받아온 것 차이
			res = matchListVsDb(res)
			console.log(res)

			for (let z in res) {

				data2 = { 'matchIdjustOne': res[z] }

				$.ajax({

					type: 'post',
					url: '/riotTv/findOnebyList',
					async: false,
					data: data2,
					success: function(res) {

						for (let j in res.info.participants) {

							matchId = res.metadata.matchId
							championName = res.info.participants[j].championName
							teamId = res.info.participants[j].teamId
							damageTakenOnTeamPercentage = res.info.participants[j].challenges.damageTakenOnTeamPercentage
							kda = res.info.participants[j].challenges.kda
							killParticipation = res.info.participants[j].challenges.killParticipation
							teamDamagePercentage = res.info.participants[j].challenges.teamDamagePercentage
							goldPerMinute = res.info.participants[j].challenges.goldPerMinute
							soloKills = res.info.participants[j].challenges.soloKills

							totalTimeSpentDead = res.info.participants[j].totalTimeSpentDead
							visionWardsBoughtInGame = res.info.participants[j].visionWardsBoughtInGame
							visionScore = res.info.participants[j].visionScore
							win = res.info.participants[j].win
							gameStartTimestamp = res.info.gameStartTimestamp
							riotIdGameName = res.info.participants[j].riotIdGameName
							riotIdTagline = res.info.participants[j].riotIdTagline



							db = {}
							db.matchId = matchId
							db.championName = championName
							db.teamId = teamId
							db.damageTakenOnTeamPercentage = damageTakenOnTeamPercentage
							db.kda = kda
							db.killParticipation = killParticipation
							db.teamDamagePercentage = teamDamagePercentage
							db.goldPerMinute = goldPerMinute
							db.soloKills = soloKills
							db.totalTimeSpentDead = totalTimeSpentDead
							db.visionWardsBoughtInGame = visionWardsBoughtInGame
							db.visionScore = visionScore
							db.win = win
							db.gameStartTimestamp = gameStartTimestamp
							db.riotIdGameName = riotIdGameName
							db.riotIdTagline = riotIdTagline

							dbList.push(db)
						}
					}
				})
			}
			if (dbList != '') {

				dbSaveInfoRiotTv()
				console.log("db최신화 완료(API통신완료)")

			} else {
				console.log("현재 최신db DB통신완료")
			}

		}
	})
}
//최신matchList 확인 함수
function matchListVsDb(res) {

	res1 = [];

	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/riotTv/matchListVsDb',
		async: false,
		data: JSON.stringify(res),
		success: function(res) {

			res1 = res
		}
	})
	return res1;

}



//data중 스템프타임 사용시에 필요한 것들
//	console.log(
//		date.getFullYear() + '/' + (date.getMonth() + 1) + '/' +
//		date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +
//		date.getSeconds());

function loadingLogoInput() {
	let str = ''
	str += '<img src="/img/loadingimg.gif"/>'

	$('#loading').html(str)

}
function loadingLogoOutput() {

	$('#loading').empty()

}
////그래프/////




function chartteam(matchId) {
	$('#myChart1').empty();
	$('#myChart2').empty();
	$('#myChart3').empty();
	$('#myChart1').append('<canvas id="circle"><canvas>');
	$('#myChart2').append('<canvas id="doughnutChart"><canvas>');
	$('#myChart3').append('<canvas id="radar-chart"><canvas>');
//	console.log(dbFindList)
	let teamIdmatch = ''
	let gameName1 = $('#gameName1').val()
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].riotIdGameName == gameName1) {

			teamIdmatch = dbFindList[i].teamId

		}

	}
	let championNameList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			championNameList.push(dbFindList[i].championName)

		}

	}


	let killParticipationList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			killParticipationList.push(dbFindList[i].killParticipation)

		}

	}

	let damageTakenOnTeamPercentageList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			damageTakenOnTeamPercentageList.push(dbFindList[i].damageTakenOnTeamPercentage)

		}

	}
	//	console.log(dbFindList)

	var ctx = document.getElementById('circle').getContext('2d');
	var chart = new Chart(ctx, {
		type: 'pie', // 
		data: {
			labels: championNameList,
			datasets: [{
				label: "받은피해량",
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					//                      'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					//                      'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 2, // 바 테두리 두께	
				data: damageTakenOnTeamPercentageList
			}]
		},
		options: {
//			responsive: false,
			tooltips: {
				enabled: true
			},
			hover: {
				animationDuration: 1
			},

			scales: {
				//				xAxes: [{
				//					gridLines: {
				//						display: true
				//					},
				//				}],
				//				yAxes: [{
				////					gridLines: {
				////						drawBorder: false//축과 데이터의 경계선 표시 여부
				////					},
				//					ticks: {
				////						display: true,//축의 값 표시 여부
				//						max: 1,
				//						min: 0
				//					}
				//				}]
			},


		}
	})


	let teamDamagePercentageList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			teamDamagePercentageList.push(dbFindList[i].teamDamagePercentage)

		}

	}

	const doughnutChartCtx = document.querySelector('#doughnutChart').getContext('2d');
	const doughnutChart = new Chart(doughnutChartCtx, {
		type: 'doughnut',
		data: {
			labels: championNameList,
			datasets: [{
				data: teamDamagePercentageList,
				label: "가한데미지량",
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					//                      'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					//                      'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 2
			}]
		},
		options: {
			cutout: '50%',
		}
	});


	let allList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].riotIdGameName == gameName1) {


			allList.push(dbFindList[i].damageTakenOnTeamPercentage)
			allList.push(dbFindList[i].killParticipation)

			allList.push(dbFindList[i].teamDamagePercentage)



		}

	}


	new Chart(document.getElementById("radar-chart"), {
		type: 'radar',
		data: {
			labels: ['damageTakenOnTeamPercentage', 'killParticipation', 'teamDamagePercentage'],
			datasets: [
				{
					label: "본인 통계 ",
					fill: true,
					backgroundColor: "rgba(179,181,198,0.2)",
					borderColor: "rgba(179,181,198,1)",
					pointBorderColor: "#fff",
					pointBackgroundColor: "rgba(179,181,198,1)",
					data: allList
				},
				//{
				//					label: "2050",
				//					fill: true,
				//					backgroundColor: "rgba(255,99,132,0.2)",
				//					borderColor: "rgba(255,99,132,1)",
				//					pointBorderColor: "#fff",
				//					pointBackgroundColor: "rgba(255,99,132,1)",
				//					pointBorderColor: "#fff",
				//					data: [25.48, 54.16, 7.61, 8.06, 4.45]
				//				}
			]
		},
		options: {
			title: {
				display: true,
				text: '본인 확인표'
			}
		}
	});
}