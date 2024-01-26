/**
 * 
 */

function champ(a) {
	
	console.log(a);
	$('.info').hide();
		
	if($('#lineCheck').text() == '') {
			
		$('#champList').empty();
		$.ajax({
			type : "POST",
			url : "/kdg/re",
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
	} 
	var idName = a;
	
	$('#anBtn').hide();
	$('#champList').show();
	$('#searchChamp').show();
	$('.positionICN').show();
	$('#searchChamp').val('');
	
	$('#name').html(a);
}

function submit(b) {
	
	var a = $('#name').text();
	var champName = b;
	var c = a + 'ion';
	var d = a + 'Name';

	let str1 = '<img onclick="javascript:champ(this.id)" id=';
	let str2 = ' src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/';
	let str3 = '.png">';
	let str = str1 + a + str2 + b + str3;
	$('#' + c).html(str);
	$('#' + d).html(b);
	$('#champList').hide();

	if($('#myChampName').text() != ''){
		if($('#enemyChampName').text() != ''){
			$('#anBtn').show();
		}
	}
}

