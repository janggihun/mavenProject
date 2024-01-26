//////////////////삭제/////////////////////////////
function deleteDuo(dcnt) {

	//	console.log(dcnt)

	if (confirm("정말 삭제하시겠습니까?")) {

		data = { "dcnt": dcnt }
		$.ajax({
			type: 'post',
			url: '/deleteById',
			data: data,
			success: function(res) {

				if (res) {
					location.reload()
					alert("삭제 성공 !!")

				} else {
					alert("작성자만 삭제 가능합니다. 다시 확인해주세요")
				}

			}
		})
	}

}
//////////////////저장/////////////////////////////
$('#duoSaveBtn').on("click", function() {
	save()
})

function save() {

	let userId = $('#userId').val()
	let myPosition = $('#position').val()
	let duoPosition = $('input[name=inlineRadioOptions]:checked').val()
	let tier = $('#tier').val()
	let gameType = $('#gameType').val()
	let memo = $('#textArea').val()

	if (myPosition == '' || duoPosition == '' || tier == '' || gameType == '' || textArea == '') {

		alert("빠진부분이 있습니다 확인해주세요")

		return false;
	}
	data = {
		'userId': userId,
		'myPosition': myPosition,
		'duoPosition': duoPosition,
		'tier': tier,
		'gameType': gameType,
		'memo': memo
	}

	$.ajax({

		type: 'post',
		url: '/saveDb',
		data: data,
		success: function(res) {
				alert("연결이 안되었을시 2시간 이후의 글들은 삭제 됩니다.")
			$.ajax({
				type: 'post',
				url: '/makeroom',

				success: function(res) {

				}, error: function(error) {
					console.log("에러")
				
				}
			})

		}, error: function(error) {
			console.log("에러")
		}
	})

}