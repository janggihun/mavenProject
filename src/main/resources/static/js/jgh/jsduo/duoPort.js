//const sse = new EventSource("http://192.168.0.27:8080/jgh"); // ipconfig를 통해 본인 아이피를 넣어줘야함
const sse = new EventSource("http://localhost:8080/jgh"); //혼자할때


sse.addEventListener('connect', (e) => {
	//첫 시작시 메세지
	console.log("이미터연결완료")

});


sse.addEventListener('makeroom', (e) => {
	//방만들기 시 추가 테이블 구문
	showNewDuo()

});


sse.addEventListener('infoAll', (e) => {
	//전체 공지 전송
	alert(e.data)

});
