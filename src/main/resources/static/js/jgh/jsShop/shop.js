/**
 * 
 */

$(document).ready(function() {
	findaaa()
	myPoiotCheck()
})
//aaa의 포인트를 찾는 구문
function findaaa() {

	$.ajax({

		type: 'post',
		url: '/firstPointInfo',

		success: function(res) {
			//			console.log(res)
			document.getElementById('aaaPoint').value = res.userPoint

		}

	})

}



function myPoiotCheck() {


	$.ajax({

		type: 'post',
		url: '/myPointCheck',
		success: function(res) {

			document.getElementById('myPoint').value = res.userPoint
		}

	})

}


$('#plus100').on("click", function() {

	$.ajax({

		type: 'post',
		url: '/plusPoint100',

		success: function(res) {
			console.log(res)
			document.getElementById('myPoint').value = res.userPoint


		}, error: function(error) {
			alert(" !!트랜젝션 성공!! 로그인 후 이용 가능합니다.")
		}
	})

})

//





$('#sendPoint').on("click", function() {
	let friendId = $('#friendId').val()
	let friendPoint = $('#friendPoint').val()
	let str = ''
	$('#checkMoney').html(str)
	data = {
		'friendId': friendId,
		'friendPoint': friendPoint
	}

	$.ajax({

		type: 'post',
		url: '/sendPoint',
		data: data,
		success: function(res) {
			//			console.log(res)
			//보내기 성공
			findaaa()
			document.getElementById('myPoint').value = res.userPoint
			str = res.userPoint + "포인트를 보냈습니다."
			$('#checkMoney').html(str)
			if (res.userPoint == 0) {

				str = "0포인트입니다. 금액을 추가해주세요"
				$('#checkMoney').html(str)

			}
		}, error: function(error) {
			str = "이름 혹은 금액을 확인해주세요"
			$('#checkMoney').html(str)
			//보내기 실패
			alert("보내기 중 오류발생 , 트랜잭션 발동 롤백합니다.")
		}
	})

})