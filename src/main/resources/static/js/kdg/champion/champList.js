/**
 * 
 */

$(document).ready(function() {
	$("#searchChamp").keyup(function() {
		str = "아이템 버전 : 14.01, 설정 티어 : platinum <img src='../img/tier/platinum.png' style = 'width: 30px; height: 30px;'></img>, 라인 : all"		
		$('#info22').html(str)
		
		$('#lineCheck').empty();
		
		$('#champList').empty();
		let cn = $('#searchChamp').val()
		data = {
			"searchChamp" : cn
		}
		
		$.ajax({
			type : "POST",
			url : "/kdg/search",
			data : data,
			success : function(res) {
				
				str1 = "<ul>"
				str2 = ''
						for (let i = 0; i < res.length; i++){
							str2 += "<li><img id='"+res[i].champion_name+"' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].champion_name+".png'"
							str2 += "width='72' height='72' alt='"+res[i].champion_name+"' class='bg-image' onclick='javascript:submit(this.id)'>"
							str2 +=	"<span>"+res[i].champion_name_kr+"</span></li>"
							}
				str3 = "</ul>"
				
				$('#champList').html(str1 + str2 + str3)
			}
		})
	});
});

function line(a){
	$('#lineCheck').html(a);
	str = "아이템 버전 : 14.01, 설정 티어 : platinum <img src='../img/tier/platinum.png' style = 'width: 30px; height: 30px;'></img>, 라인 : all"	
	$('#info22').html(str)
	
	console.log(a);
	
	$('#champList').empty();
	data = {
		"line" : a
		}
		
 	$.ajax({
		type : "POST",
		url : "/kdg/position",
		data : data,
		success : function(res) {	
			
			str1 = "<ul>"
			str2 = ''
					for (let i = 0; i < res.length; i++){
							str2 += "<li><img id='"+res[i].champion_name+"' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].champion_name+".png'"
							str2 += "width='72' height='72' alt='"+res[i].champion_name+"' class='bg-image' onclick='javascript:submit(this.id)'>"
							str2 +=	"<span>"+res[i].champion_name_kr+"</span></li>"
						}
			str3="</ul>"
					
			$('#champList').html(str1 + str2 + str3)
		}
	})
}