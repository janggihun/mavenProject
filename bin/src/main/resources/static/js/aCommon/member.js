/**
 * 
 */

$("#userId").on('keyup', function() {
	let userId = $('#userId').val();
	data = { 'userId': userId }
	let str = ''
	let str2 = ''
	let userPw = $('#userPw').val();
	if (userId.length < 3) {
		str = "아이디는 3자 이상."
		$('#joinBtn').prop('disabled', true);
		$("#checkId").html(str);
		return;
	}
	$.ajax({
		type: 'post',
		url: '/member/join/idCheck',
		data: data,

		success: function(res) {
			if (res) {
				str = "중복된 아이디 입니다."
				$("#checkId").css('color', 'red')
				$('#joinBtn').prop('disabled', true);
			} else {
				str = "사용가능한 아이디 입니다."
				$("#checkId").css('color', 'green')
				$('#joinBtn').prop('disabled', false);
				if (userPw.length < 3) {
					str2 = "비밀번호 기입은 필수입니다."
					$("#checkPw").css('color', 'red')
					$('#joinBtn').prop('disabled', true);
					$("#checkPw").html(str2);

				}
			}
			$("#checkId").html(str);
		}
	})

})
$("#userPw").keyup(function() {
	let userPw = $('#userPw').val();
	data = { 'userPw': userPw }
	let str = ''

	if (userPw.length < 3) {
		str = "비밀번호는 3자이상"
		$("#checkPw").css('color', 'red')
		$('#joinBtn').prop('disabled', true);
	} else {
		str = "사용가능"
		$("#checkPw").css('color', 'green')
		$('#joinBtn').prop('disabled', false);
	}
	$("#checkPw").html(str);
})



//form태그 엔터 방지
//$('input[type="text"]').keydown(function() {
//  if (event.keyCode === 13) {
//    event.preventDefault();
//  };
//});
//
//$('input[type="password"]').keydown(function() {
//  if (event.keyCode === 13) {
//    event.preventDefault();
//  };
//});


