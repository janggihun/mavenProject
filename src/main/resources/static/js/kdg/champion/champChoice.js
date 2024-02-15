/**
 * 
 */

function champ(a) {

	$('#champList').empty();
	$.ajax({
		type : "POST",
		url : "/kdg/re",
		success : function(res) {			
			
			str1 = "<ul id = 'champListUl'>"
			str2 = ''
					for (let i = 0; i < res.length; i++){
						str2 += "<li  id = 'champListLi'><img id='"+res[i].champion_name+"' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[i].champion_name+".png'"
						str2 += "width='44' height='44' alt='"+res[i].champion_name+"' class='bg-image' onclick='javascript:submit(this.id)'>"
						str2 +=	"<span>"+res[i].champion_name_kr+"</span></li>"
						}
			str3 = "</ul>"
				
			$('#champList').html(str1 + str2 + str3)
		}
	})

	
	$('#champList').show();
	$('.positionICN').show();
	
	$('#name').html(a);
}

function submit(b) {
		
	var a = $('#name').text();
	var c = a + 'ion';
	var d = a + 'Name';

	let str1 = '<img onclick="javascript:champ(this.id)" id=';
	let str2 = ' src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/';
	let str3 = '.png">';
	let str = str1 + a + str2 + b + str3;
	$('#' + c).html(str);
	$('#' + d).html(b);
	$('#line').hide();
	$('#champList').hide();
	$('#clickBtn').hide();
	
	if($('#myChampName').text() == $('#enemyChampName').text()){
		alert("같은 챔피언은 선택할 수 없습니다.\n다시 선택해주세요.")
		$('#myChampName').empty()
		$('#enemyChampName').empty()
		
		str1 = "<img id = 'myChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg'>"
		$('#myChampion').html(str1)
		
		str2 = "<img id = 'enemyChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg'>"
		$('#enemyChampion').html(str2)
		
		return
	}

	if($('#myChampName').text() != ''){
		if($('#enemyChampName').text() != ''){
			$('#clickBtn').show();
		}
	}
}

