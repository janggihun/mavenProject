/**
 * 
 */


function showGameTamble(res) {
	console.log(res)
	let str = ''
	str += "<div id = 'newList'>"
	str += "<input type='text' id='gameName' name='gameName' placeholder='아이디' value='게임모드 검색 들어갈 예정'>"
	str += "<input type='text' id='gameName' name='gameName' placeholder='아이디' value='챔피언 검색 들어갈 예정'>"
	for (let i = 0; i < res.length; i++) {

	}
	str += "</div>"
	$('#puuid').append(str)
	$('#puuid').show();
}