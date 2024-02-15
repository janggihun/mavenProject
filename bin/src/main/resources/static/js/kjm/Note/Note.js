//메일 보내기
$('#mailsend').on("click", function() {
	send()
})

function send() {
	let userId = $('#userId').val()
	let recv_userId = $('#recv_userId').val()
	let send_userId = $('#send_userId').val()
	let n_title = $('#n_title').val()
	let n_message = $('#n_message').val()

	data = {
		'userId' : userId,
		'recv_userId': recv_userId,
		'send_userId': send_userId,
		'n_title': n_title,
		'n_message': n_message
	}

	$.ajax({

		type: 'post',
		url: '/mailsend',
		data: data,
		success: function(res) {
			console.log(res)

			if (res == 1) {
				alert("메일을 성공적으로 보냈습니다.")
			} else {
				alert("메일 전송 실패")
			}

		}
	})


}
//메일 보기

//$('#modal_wrap').on("click", function() {
//	detailNote()
//})
//
//function detailNote(){
//	
//	$.ajax({
//
//		type: 'get',
//		url: '/detail',
//		success: function(res) {
//			console.log(res)
//		let str = ''
//		str += "<tr class = 'maillist'>"
//		str +- "<td>" + res.n_title+"</td>"
//		str +- "<td>" + res.send_userId+"</td>"
//		str +- "<td>" + res.recv_userId+"</td>"
//		str +- "<td>" + res.n_date+"</td>"
//		str +- "<td>" + res.n_message+"</td>"
//		
//		str += "</tr>"
//		$('#detailflag').html(str)
//		}
//		
//	})
//
//}
