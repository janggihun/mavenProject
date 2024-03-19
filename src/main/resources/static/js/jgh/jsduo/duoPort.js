

if (ws == null || ws == '') {
	var ws;
	ws = new WebSocket("wss://" + location.host + "/jgh");

}

ws.addEventListener("message", (event) => {

	let eventjson = JSON.parse(event.data)
	//	console.log(eventjson)

	if (eventjson.work == 'roomUpdate') { // 방만들고 업데이트하기
		duoMainInfo()

	} else if (eventjson.work == 'createQuestion') {//다른사람으로부터 승낙요청
		console.log(eventjson)
		let userId = $('#userId').val()
		console.log(userId)
		if (eventjson.userId == userId) {
			createQuestion(eventjson)
		}


	} else if (eventjson.work == 'connectRoom') { //서로 대화창에 들어옴
		console.log(eventjson)
		let userId = $('#userId').val()
		duoMainInfo()
		showChattInfo()
		if (userId == eventjson.hostId || userId == eventjson.guestId) {

			myRoom(eventjson.rCnt)
			showChattInfo() //왼쪽 사이드바 최신화 업데이트
			let res = {}
			res.work = "roomInfo"
			let temp = JSON.stringify(res)
			ws.send(temp)

		}


	} else if (eventjson.work == "sendMsg") { //메세지 보내기 //완료
		//		let userId = $('#userId').val()
		let rCnt = $('#rCnt').val()

		//대화창 안에서 보내기
		if (rCnt == eventjson.rCnt) {

			chattcontents(eventjson)

		}

	} else if (eventjson.work == "reject") { //메세지 보내기 //완료
		alert("상대방이 거절하였습니다.")
		close();

	} else if (eventjson.work == "allRejeck") { //승낙받지 못한 사람에게 거절 메세지 보내기
		let request = $('#request').val()
		if (request == eventjson.rCnt) {
			alert("상대방이 다른사람과 연결되었습니다.")
			close();
			document.getElementById('request').value = '';
		}

	}

});
