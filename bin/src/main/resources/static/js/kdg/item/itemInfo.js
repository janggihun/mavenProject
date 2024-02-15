/**
 * 
 */
$(document).ready(function() {
	var tier = $('#tier_en').text()
	
	if($('#selectCore').text() == "1코어 아이템"){
		var itemNum = 1;
		console.log(itemNum)
	}else if($('#selectCore').text() == "2코어 아이템"){
		var itemNum = 2;
		console.log(itemNum)
	}else if($('#selectCore').text() == "3코어 아이템"){
		var itemNum = 3;
		console.log(itemNum)
	}

	data = {

		"tier": tier,
		"itemNum" : itemNum

	}
	$.ajax({

		type: "POST",
		url: "/kdg/itemInfo",
		data: data,
		success: function(res) {
			
			str = ""
			str += "<table class = 'coreItemList'>"
			str += "<caption class='coreItemList_caption'>기준 : <img class = 'caption_img' src='../img/tier/platinum.png'> 플래티넘, 1코어 아이템, Version : 14.01</caption>"
			str += "<tr style = 'border: 1px solid black;'>"
			str += "<td class = 'small_td'>#</td>"
			str += "<td class = 'small_tiertd'>티어</td>"
			str += "<td class = 'long_rowtd2' colspan='2'>전설 아이템</td>"
			str += "<td>픽률</td>"
			str += "<td>승률</td>"
			str += "<td class = 'long_rowtd' colspan='5'>챔피언</td>"
			str += "<td class = 'none_td'></td>"
			str += "<td class = 'long_rowtd' colspan='5'>포지션</td>"
			str += "</tr>"
			
			str2 = ""
			for(let i = 0; i < res.length; i++){
				str2 += "<tr>"
					str2 += "<td rowspan='2'>"+(i+1)+"</td>"
					str2 += "<td rowspan='2'><img src='../img/tier/"+res[i].tier+".png' style = 'width: 40px; height: 40px;'></td>"
					str2 += "<td class = 'itemImg_td' rowspan='2'><img id = '"+res[i].itemId+"' class='jb-title' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[i].itemId+".png' onmouseover='javascript:itemToolTip(this.id)'>"
					str2 += "<p class = 'jb-text'></p></td>"
					str2 += "<td class = 'itemName_td' rowspan='2'>"+res[i].name+"</td>"
					str2 += "<td rowspan='2'>"+(res[i].itemCnt/res[i].allItemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td rowspan='2'>"+(res[i].itemWinCnt/res[i].itemCnt*100).toFixed(2)+"%</td>"
					if(res[i].itemPickChamp1 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp1+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					if(res[i].itemPickChamp2 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp2+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					if(res[i].itemPickChamp3 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp3+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					if(res[i].itemPickChamp4 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp4+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					if(res[i].itemPickChamp5 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp5+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					str2 += "<td rowspan='2'>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line1+".png'></td>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line2+".png'></td>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line3+".png'></td>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line4+".png'></td>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line5+".png'></td>"
				str2 += "</tr>"
				str2 += "<tr>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt1/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt2/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt3/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt4/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt5/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt1/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt2/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt3/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt4/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt5/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
				str2 += "</tr>"
				}
			str3 = "</table>"
			
			$('.coreItemList_box').html(str+str2+str3)

			var tier_en = $('#tier_en').text()
			var tier = $('#selectTier').text()
			var core = $('#selectCore').text()
			
			str = "기준 : <img class='caption_img' src='../img/tier/"+tier_en+".png'> "+tier+", "+core+", Version : 14.01"
			$('.coreItemList_caption').html(str)
		}

	})

})

function choice(a){
	
	if(a == 'TierDropDown'){
		
		$('#selectMenu').html(a)

	} else if (a == 'CoreItemDropDown'){

		$('#selectMenu').html(a)
	}
	
}

function choiceTier(b){
	
	$('#tier_en').html(b)
	
	if(b == 'iron'){
		$('#selectTier').html("아이언")
	}else if(b == 'bronze'){
		$('#selectTier').html("브론즈")
	}else if(b == 'silver'){
		$('#selectTier').html("실버")
	}else if(b == 'gold'){
		$('#selectTier').html("골드")
	}else if(b == 'platinum'){
		$('#selectTier').html("플래티넘")
	}else if(b == 'emerald'){
		$('#selectTier').html("에메랄드")
	}else if(b == 'diamond'){
		$('#selectTier').html("다이아몬드")
	}
	
	var tier = $('#selectTier').text()
	str = "<img src='../img/tier/"+b+".png' style='width: 20px; height: 20px;'> "+tier
	
	$('#TierDropDown').html(str)
	
}

function choiceCore(c){
	
	if(c == 'firstCore'){
		$('#selectCore').html("1코어 아이템")
	}else if(c == 'secondCore'){
		$('#selectCore').html("2코어 아이템")
	}else if(c == 'thirdCore'){
		$('#selectCore').html("3코어 아이템")
	}

	var core = $('#selectCore').text()
	
	$('#CoreItemDropDown').html(core)
	
}

function analy(){
	var tier = $('#tier_en').text()
	
	if($('#selectCore').text() == "1코어 아이템"){
		var itemNum = 1;
	}else if($('#selectCore').text() == "2코어 아이템"){
		var itemNum = 2;
	}else if($('#selectCore').text() == "3코어 아이템"){
		var itemNum = 3;
	}

	data = {

		"tier": tier,
		"itemNum" : itemNum

	}
	$.ajax({

		type: "POST",
		url: "/kdg/itemInfo",
		data: data,
		success: function(res) {

			var tier = $('#selectTier').text()
			var core = $('#selectCore').text()
			
			str = ""
			str += "<table class = 'coreItemList'>"
			str += "<caption class='coreItemList_caption'>기준 : <img class = 'caption_img' src='../img/tier/"+res[0].tier+".png'> "+tier+", "+core+", Version : 14.01</caption>"
			str += "<tr style = 'border: 1px solid black;'>"
			str += "<td class = 'small_td'>#</td>"
			str += "<td class = 'small_tiertd'>티어</td>"
			str += "<td class = 'long_rowtd2' colspan='2'>전설 아이템</td>"
			str += "<td>픽률</td>"
			str += "<td>승률</td>"
			str += "<td class = 'long_rowtd' colspan='5'>챔피언</td>"
			str += "<td class = 'none_td'></td>"
			str += "<td class = 'long_rowtd' colspan='5'>포지션</td>"
			str += "</tr>"
			
			str2 = ""
			for(let i = 0; i < res.length; i++){
				str2 += "<tr>"
					str2 += "<td rowspan='2'>"+(i+1)+"</td>"
					str2 += "<td rowspan='2'><img src='../img/tier/"+res[i].tier+".png' style = 'width: 40px; height: 40px;'></td>"
					str2 += "<td class = 'itemImg_td' rowspan='2'><img id = '"+res[i].itemId+"' class='jb-title' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[i].itemId+".png' onmouseover='javascript:itemToolTip(this.id)'>"
					str2 += "<p class = 'jb-text'></p></td>"
					str2 += "<td class = 'itemName_td' rowspan='2'>"+res[i].name+"</td>"
					str2 += "<td rowspan='2'>"+(res[i].itemCnt/res[i].allItemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td rowspan='2'>"+(res[i].itemWinCnt/res[i].itemCnt*100).toFixed(2)+"%</td>"
					if(res[i].itemPickChamp1 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp1+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					if(res[i].itemPickChamp2 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp2+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					if(res[i].itemPickChamp3 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp3+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					if(res[i].itemPickChamp4 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp4+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					if(res[i].itemPickChamp5 != 'FiddleSticks'){
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].itemPickChamp5+".png'></td>"
					} else {
						str2 += "<td class = 'small_chtd' ><img src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiddlesticks.png'></td>"
					}
					str2 += "<td rowspan='2'>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line1+".png'></td>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line2+".png'></td>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line3+".png'></td>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line4+".png'></td>"
					str2 += "<td class = 'small_ltd'><img src='../img/"+res[i].line5+".png'></td>"
				str2 += "</tr>"
				str2 += "<tr>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt1/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt2/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt3/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt4/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].itemPickCnt5/res[i].itemCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt1/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt2/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt3/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt4/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
					str2 += "<td class = 'td_txt'>"+(res[i].lineCnt5/res[i].lineAllCnt*100).toFixed(2)+"%</td>"
				str2 += "</tr>"
				}
			str3 = "</table>"
			
			$('.coreItemList_box').html(str+str2+str3)
			var tier_en = $('#tier_en').text()
			var tier = $('#selectTier').text()
			var core = $('#selectCore').text()
			
			str = "기준 : <img class='caption_img' src='../img/tier/"+tier_en+".png'> "+tier+", "+core+", Version : 14.01"
			$('.coreItemList_caption').html(str)
			
			$('#TierDropDown').html('티어 선택')
			$('#CoreItemDropDown').html('아이템 코어 선택')
			
		}

	})


}
