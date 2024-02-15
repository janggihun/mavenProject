$(document).ready(function() {
	$('#clickBtn').click(function() {

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
				$('#champList').hide();

				str2 = ""
				str2 += "<table>"
				str2 += "<caption class = 'itemBuild_modal_caption'>추천 빌드</caption>"

				for (let i = 0; i < res.length; i++) {
					str2 += "<tr><td><div class = 'itemBuild_modal_tr'>"
					str2 += "<img id = '" + res[i].itemId1 + "' class='jb-title-modal' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId1 + ".png' onmouseover='javascript:itemToolTipModal(this.id)' style='width: 40px; height: 40px;'></img>"
					str2 += "<div class = 'jb-text-modal'></div>"
					str2 += "<span class='itemBuild-direction'></span>"
					str2 += "<img id = '" + res[i].itemId2 + "' class='jb-title-modal' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId2 + ".png' onmouseover='javascript:itemToolTipModal(this.id)' style='width: 40px; height: 40px;'></img>"
					str2 += "<div class = 'jb-text-modal'></div>"
					str2 += "<span class='itemBuild-direction'></span>"
					str2 += "<img id = '" + res[i].itemId3 + "' class='jb-title-modal' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId3 + ".png' onmouseover='javascript:itemToolTipModal(this.id)' style='width: 40px; height: 40px;'></img>"
					str2 += "<div class = 'jb-text-modal'></div>"
					str2 += "</div></td><td class = 'itemBuild_modal_pickCnt'>"
					str2 += res[i].myBuildPickCount+" 게임</td><td class = 'itemBuild_modal_winRate'>"
					str2 += (res[i].myBuildwinCount / res[i].myBuildPickCount * 100).toFixed(2) + "%</td></tr>"
				}
				
				str2 += "</table>"
				
				$('#selectTier_modal').show()
				$('#itemBuild').show();
				$('#itemBuild').html(str2);
				
				$('#clickBtn').hide();
				$('#reSelectBtn').show();
					
				str4 = "빌드를 확인해보세요."
				$('#exampleModalToggleLabel').html(str4);
				
				str5 = "<img src='../img/tier/"+ tier +".png' style='width: 20px; height: 20px;'></img> 플래티넘"
				$('.modalTier').html(str5)
			}
		})
	})
})

$(document).ready(function() {
	$('#reSelectBtn').click(function() {
		
		$('#reSelectBtn').hide()
		$('#clickBtn').hide()
		$('#itemBuild').hide()
		$('#itemBuild').empty()
		$('#selectTier_modal').hide()
		$('#champList').hide()
		
		str = "챔피언을 선택해보세요."
		$('#exampleModalToggleLabel').html(str);
		
		$('#myChampName').empty()
		$('#enemyChampName').empty()
		
		str1 = "<img id = 'myChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg'>"
		$('#myChampion').html(str1)
		
		str2 = "<img id = 'enemyChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg'>"
		$('#enemyChampion').html(str2)
				
		})
	})
	

function choiceTierModal(a){
	
		$('#lineCheck').empty();
		$('#tier_en_Modal').text(a)

		var myChampName = $('#myChampName').text();
		var enemyChampName = $('#enemyChampName').text();
		var tier = a
		
		$('#champList').hide();
		
		if(a == 'iron'){
			$('#selectTierModal').html("아이언")
		}else if(a == 'bronze'){
			$('#selectTierModal').html("브론즈")
		}else if(a == 'silver'){
			$('#selectTierModal').html("실버")
		}else if(a == 'gold'){
			$('#selectTierModal').html("골드")
		}else if(a == 'platinum'){
			$('#selectTierModal').html("플래티넘")
		}else if(a == 'emerald'){
			$('#selectTierModal').html("에메랄드")
		}else if(a == 'diamond'){
			$('#selectTierModal').html("다이아몬드")
		}
		
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

				str2 = ""
				str2 += "<table>"
				str2 += "<caption class = 'itemBuild_modal_caption'>추천 빌드</caption>"

				for (let i = 0; i < res.length; i++) {
					str2 += "<tr><td><div class = 'itemBuild_modal_tr'>"
					str2 += "<img id = '" + res[i].itemId1 + "' class='jb-title-modal' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId1 + ".png' onmouseover='javascript:itemToolTipModal(this.id)' style='width: 40px; height: 40px;'></img>"
					str2 += "<div class = 'jb-text-modal'></div>"
					str2 += "<span class='itemBuild-direction'></span>"
					str2 += "<img id = '" + res[i].itemId2 + "' class='jb-title-modal' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId2 + ".png' onmouseover='javascript:itemToolTipModal(this.id)' style='width: 40px; height: 40px;'></img>"
					str2 += "<div class = 'jb-text-modal'></div>"
					str2 += "<span class='itemBuild-direction'></span>"
					str2 += "<img id = '" + res[i].itemId3 + "' class='jb-title-modal' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/" + res[i].itemId3 + ".png' onmouseover='javascript:itemToolTipModal(this.id)' style='width: 40px; height: 40px;'></img>"
					str2 += "<div class = 'jb-text-modal'></div>"
					str2 += "</div></td><td class = 'itemBuild_modal_pickCnt'>"
					str2 += res[i].myBuildPickCount+" 게임</td><td class = 'itemBuild_modal_winRate'>"
					str2 += (res[i].myBuildwinCount / res[i].myBuildPickCount * 100).toFixed(2) + "%</td></tr>"
				}
				
				str2 += "</table>"
				
				$('#itemBuild').html(str2);
					
				str4 = "빌드를 확인해보세요."
				$('#exampleModalToggleLabel').html(str4);
				
				str5 = "<img src='../img/tier/"+ a +".png' style='width: 20px; height: 20px;'></img> "+$('#selectTierModal').text()
				$('.modalTier').html(str5)
			}
		})
	}

function test(){
		
		$('#clickBtn').hide()
		$('#reSelectBtn').hide()
		$('#itemBuild').hide()
		$('#itemBuild').empty()
		$('#selectTier_modal').hide()
		$('#champList').hide()
		
		str = "챔피언을 선택해보세요."
		$('#exampleModalToggleLabel').html(str);
		
		$('#myChampName').empty()
		$('#enemyChampName').empty()
		
		str1 = "<img id = 'myChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg'>"
		$('#myChampion').html(str1)
		
		str2 = "<img id = 'enemyChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg'>"
		$('#enemyChampion').html(str2)
		
}