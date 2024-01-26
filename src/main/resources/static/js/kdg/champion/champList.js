/**
 * 
 */

$(document).ready(function() {
	$("#searchChamp").keyup(function() {
		
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