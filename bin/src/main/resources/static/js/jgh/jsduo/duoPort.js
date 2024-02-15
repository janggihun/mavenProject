

if (ws == null || ws == '') {
	var ws;
	ws = new WebSocket("ws://" + location.host + "/jgh");

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

	}else if (eventjson.work == "reject") { //메세지 보내기 //완료
		alert("상대방이 거절하였습니다.")
		close();

	}



});
