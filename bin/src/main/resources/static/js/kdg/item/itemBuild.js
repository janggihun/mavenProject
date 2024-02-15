/**
 * 
 */

$(document).ready(function() {
	$('#clickBtn').click(function() {
		
		
		/* 티어 버튼 보이기 */
		$('#iron').show();
		$('#bronze').show();
		$('#silver').show();
		$('#gold').show();
		$('#platinum').show();
		$('#emerald').show();
		$('#diamond').show();
		$('#master').show();
		$('#grandmaster').show();
		$('#challenger').show();

		$('#lineCheck').empty();

		var myChampName = $('#myChampName').text();
		var enemyChampName = $('#enemyChampName').text();
		var tier = 'platinum';
		
		$('#champList').hide();

		data = {

			"tier": tier,
			"myChampName": myChampName,
			"enemyChampName": enemyChampName
		}
		$.ajax({
			type: "POST",
			url: "/kdg/itemBuild",
			data: data,
			success: function(res) {

				$('#champList').empty();

				str2 = ""

				for (let i = 0; i < res.length; i++) {
					str2 += (i + 1)
					str2 += "<img src='../img/tier/" + tier + ".png' style='width: 40px; height: 40px;'></img></td>"
					str2 += "<img id = '" + res[i].itemId1 + "' class='jb-title' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId1 + ".png' onmouseover='javascript:itemToolTip(this.id)' style='width: 40px; height: 40px;'></img>"
					str2 += "<div class = 'jb-text'></div>"
					str2 += "<img id = '" + res[i].itemId2 + "' class='jb-title' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId2 + ".png' onmouseover='javascript:itemToolTip(this.id)' style='width: 40px; height: 40px;'></img>"
					str2 += "<div class = 'jb-text'></div>"
					str2 += "<img id = '" + res[i].itemId3 + "' class='jb-title' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId3 + ".png' onmouseover='javascript:itemToolTip(this.id)' style='width: 40px; height: 40px;'></img>"
					str2 += "<div class = 'jb-text'></div>"
					str2 += (res[i].myBuildwinCount / res[i].myBuildPickCount * 100).toFixed(2) + "%"
					str2 += res[i].myBuildPickCount + " 게임"
					str2 += res[i].myBuildwinCount + " 게임<br>"

				}

				$('#itemBuild').show();
				$('#itemBuild').html(str2);
				
				$('#clickBtn').hide();
				$('#reSelectBtn').show();
				
				str3 = ""
				

			}
		})
	})
})

function tier(c) {

	$('#champList').empty();

	var myChampName = $('#myChampName').text();
	var enemyChampName = $('#enemyChampName').text();
	var tier = c;

	console.log(tier);
	console.log(myChampName);
	console.log(enemyChampName);

	str = "아이템 버전 : 14.01, 설정 티어 : " + tier + " <img src='../img/tier/" + tier + ".png' style = 'width: 30px; height: 30px;'></img>, 라인 : all"
	$('#info22').html(str)

	data = {

		"tier": tier,
		"myChampName": myChampName,
		"enemyChampName": enemyChampName

	}
	if (tier == "master" || tier == "grandmaster" || tier == "challenger") {

		$('#champList').html(tier + "티어에서 두 챔피언의 데이터가 부족합니다.").css("font-size", "larger").css("color", "gold").css("text-align", "center");
		return
	}
	$.ajax({
		type: "POST",
		url: "/kdg/itemBuildperTier",
		data: data,
		success: function(res) {

			$('#champList').css("text-align", "left").css("font-size", "medium");

			str2 = ""

			for (let i = 0; i < res.length; i++) {
				str2 += (i + 1)
				str2 += "<img src='../img/tier/" + tier + ".png' style='width: 40px; height: 40px;'></img></td>"
				str2 += "<img id = '" + res[i].itemId1 + "' class='jb-title' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId1 + ".png' onmouseover='javascript:itemToolTip(this.id)' style='width: 40px; height: 40px;'></img>"
				str2 += "<div class = 'jb-text'></div>"
				str2 += "<img id = '" + res[i].itemId2 + "' class='jb-title' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId2 + ".png' onmouseover='javascript:itemToolTip(this.id)' style='width: 40px; height: 40px;'></img>"
				str2 += "<div class = 'jb-text'></div>"
				str2 += "<img id = '" + res[i].itemId3 + "' class='jb-title' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId3 + ".png' onmouseover='javascript:itemToolTip(this.id)' style='width: 40px; height: 40px;'></img>"
				str2 += "<div class = 'jb-text'></div>"
				str2 += (res[i].myBuildwinCount / res[i].myBuildPickCount * 100).toFixed(2) + "%"
				str2 += res[i].myBuildPickCount + " 게임"
				str2 += res[i].myBuildwinCount + " 게임<br>"

			}

			$('#champList').html(str2);
			$('#champList').show();

		}
	})


}