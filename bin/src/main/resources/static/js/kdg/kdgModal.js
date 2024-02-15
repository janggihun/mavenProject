/**
 * 
 */
$(document).ready(function() {
	$('#analysisBtn').click(function(){
		
		$('#itemBuild').empty()
		$('#itemBuild').hide()
		$('#champList').empty()
		$('#champList').hide()
		str1 = "<img id = 'myChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg'></img>"
		str2 = "<img id = 'enemyChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg''></img>"	
		
		$('#myChampion').html(str1);
		$('#enemyChampion').html(str2);
		
		$('#clickBtn').show();
		$('#reSelectBtn').hide();
	})
})

$(document).ready(function() {
	$('#reSelectBtn').click(function(){
		
		console.log('12312');
		
		
		$('#itemBuild').empty()
		$('#itemBuild').hide()
		$('#champList').empty()
		$('#champList').hide()
		
		str1 = "<img id = 'myChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg'></img>"
		str2 = "<img id = 'enemyChamp' onclick='javascript:champ(this.id)' src = '../img/champ.jpg''></img>"
		
		$('#myChampion').html(str1);
		$('#enemyChampion').html(str2);

		$('#clickBtn').show();
		$('#reSelectBtn').hide();
	})
})

$(document).ready(function(){
	
	$('#TierDropDown').click(function(){
		
		console.log("124");
		
	})
	
})