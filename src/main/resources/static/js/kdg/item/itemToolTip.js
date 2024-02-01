/**
 * 
 */


function itemToolTip(a){
	
	data = {
		"itemId" : a
	}
	$.ajax({
	type : "POST",
	url : "/kdg/itemInfo",
	data : data,
	success : function(res) {
		
		str = ""
		str += "<img src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[0].itemId+".png' style = 'width: 70px; height: 70px'></img><br>"
		str += "<br>"+res[0].itemName+"<br>"
		if(res[0].comment != '없음'){
			str += res[0].comment+"<br><br>"
		}else {
			str += "<br>"
		}
		if(res[0].info1 != ''){
			str += res[0].info1+"<br>"
		}
		if(res[0].info2 != ''){
			str += res[0].info2+"<br>"
		}
		if(res[0].info3 != ''){
			str += res[0].info3+"<br>"
		}
		if(res[0].info4 != ''){
			str += res[0].info4+"<br>"
		}
		if(res[0].info5 != ''){
			str += res[0].info5+"<br>"
		}
		if(res[0].info6 != ''){
			str += res[0].info6+"<br>"
		}
		if(res[0].info7 != ''){
			str += res[0].info7+"<br>"
		}
		if(res[0].info8 != ''){
			str += res[0].info8+"<br>"
		}
		if(res[0].info9 != ''){
			str += res[0].info9+"<br>"
		}

		str += "<br>"
		str += "가격 : "+res[0].totalGold+"("+res[0].sellGold+")"
		
		$('.jb-text').html(str);
		
		}
	})
}