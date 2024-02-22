/**
 * 
 */

$('#sendToAi').on("click", function() {
	console.log("ai탐색중..")
	kda = $('#aiKda').val()
	tier = $('#aiTier').val()
	teamPosition = $('#aiteamPosition').val()
	totalDamageDealtToChampions = $('#aitotalDamageDealtToChampions').val()
	goldEarned = $('#aigoldEarned').val()

	aMap = {
		"tier": tier
		, "teamPosition": teamPosition
		, "kda": kda
		, "totalDamageDealtToChampions": totalDamageDealtToChampions
		, "totalDamageDealtToChampions": totalDamageDealtToChampions
		, "goldEarned": goldEarned
	}

	$.ajax({
		contentType: 'application/json',
		type: 'post',

		url: '/ai/dataToAi',
		//		url : 'src/main/resources/static/py/jgh/aiTrollCheck.py',
		data: JSON.stringify(aMap),
		success: function(res) {
			console.log(res)
			str = `<center><h1><span>${res.result}</span></h1></center>`

			$('#aiReult').html(str)
		}

	})


})


$('#getData').on("click", function() {

	let tier = $('#tier').val();
	data = { "tier": tier }
	$('#getData').hide()
	console.log("데이터 받기 시작")
	$.ajax({

		type: 'post',
		url: '/ai/getDb',
		data: data,
		success: function(res) {

			console.log(res)
			$('#getData').show()
		}, error: function(err) {
			console.log(err)
			$('#getData').show()
		}

	})

})
