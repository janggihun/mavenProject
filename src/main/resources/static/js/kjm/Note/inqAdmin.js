
userId_list = []

//전체메시지 보내기
$('#sendAll').on("click", function() {
	sendall()
})

function sendall() {
	userId_list = []
	$.ajax({

		type: 'post',
		url: '/memberload',


		success: function(res) {
			console.log(res)
			let str = ''
			for (let i in res) {
				userId_list.push(res[i].userId)
			}



			// 입력 필드가 비어 있는지 검사
			if (!n_title || !n_message) {
				alert("전송 실패");
				return;
			}
			for (let i in userId_list) {
				aaa(userId_list[i])
			}

		}
	})

}
function aaa(userId) {

	let send_userId = $('#send_userId').val()
	let n_title = $('#n_title').val()
	let n_message = $('#n_message').val()
	
	data = {
		//		'recv_userIds': recv_userIds,
		'recv_userId': userId,
		'send_userId': send_userId,
		'n_title': n_title,
		'n_message': n_message,
	}

	$.ajax({

		type: 'post',
		url: '/mailsend',
		data: data,
		success: function(res) {
			console.log(res)

			if (res == 1) {
				console.log(userId+"님께 메시지를 성공적으로 보냈습니다.")
			} else {
				alert("전송 실패")
			}

		}
	})
}

//답변하기
$('#inqAnswerBtn').on("click", function() {
	inqAnswer()
})

function inqAnswer() {
	let n_num = $('#n_num').val()
//	let recv_userId = $('#recv_userId').val()
//	let send_userId = $('#send_userId').val()
	let n_date = $('#n_date').val()
	let n_title = $('#n_title').val()
	let n_message = $('#n_message').val()
	let status = $('#status').val()
	 // 입력 필드가 비어 있는지 검사
	    if (!n_title || !n_message) {
        alert("빈칸이 있습니다.");
        return;
    }

	data = {
		'n_num' : n_num,
		'n_date' : n_date,
		'n_title': n_title,
		'n_message': n_message,
		'status': status
	}
		console.log("test");

	$.ajax({

		type: 'post',
		url: '/inqAnswer',
		data: data,
		success: function(res) {
			console.log(res)

			if (res == 1) {
				alert("답변을 성공적으로 보냈습니다.")
				modal0.style.display = "none"

			} else {
				alert("답변 전송 실패")
				console.log("hi")
			}

		}
	})


}

