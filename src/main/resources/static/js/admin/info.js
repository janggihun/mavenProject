

userId = $('#userId').val()

//console.log(userId)

if (userId == '') {
	header = `<a href="/member/login">로그인</a>`

	$('.navbarLogin').html(header)
//	console.log("비회원 입장")

} else {
	data = { 'userId': userId }
	$.ajax({
		type: 'post',
		url: '/member/adminCheck',
		data: data,
		success: function(res) {

			role = res.role
//			console.log(res)
			if (role == 'ADMIN') {//총관리자

				header = `
						<div class="navChoice">
							<a href="/member/mypage">${userId}님</a>
						</div>
						<div class="navChoice" id="modal_test">
							<a href="/admin/main">총관리자</a>
						</div>
						<div class="navChoice">
							<a href="/member/logout">로그아웃</a>
						</div>
					`


			} else if (role == 'HRD-MNG' || role == 'CMP-MNG' || role == 'PAY-MNG' || role == 'INQ-MNG') {//매니저

				header = checkOfMng(role)
//				console.log(header)
			} else { //일반유저

				header = `
					<div class="navChoice">
						<a href="/member/mypage">${userId}님</a>
					</div>
					<div class="navChoice" id="modal_test">
						<a href="javascript:openModal()">결제하기</a>
					</div>
					<div class="navChoice">
						<a href="/member/logout">로그아웃</a>
					</div`
//				console.log(header)
			}


			$('#navbarLogin').html(header)
		}
	})
}

function checkOfMng(role) {

	let header = ''
	if (role == 'INQ-MNG') {

		header = `<div class= "navChoice" >
						<a href="/member/mypage">${userId}님</a>
					</div>
					<div class="navChoice" id="modal_test">
						<a href="/admin/inq">매니저</a>
					</div>
					<div class="navChoice">
						<a href="/member/logout">로그아웃</a>
					</div>`

	} else if (role == 'CMP-MNG') {
		//		console.log(role)
		header = `<div class="navChoice" >
						<a href="/member/mypage">${userId}님</a>
					</div>
					<div class="navChoice" id="modal_test">
						<a href="/jhl/admin">매니저</a>
					</div>
					<div class="navChoice">
						<a href="/member/logout">로그아웃</a>
					</div>`


	} else if (role == 'PAY-MNG') {
		//		console.log(role)
		header = `<div class="navChoice" >
					<a href="/member/mypage">${userId}님</a>
					</div>
					<div class="navChoice" id="modal_test">
						<a href="/admin/pay">매니저</a>
					</div>
					<div class="navChoice">
						<a href="/member/logout">로그아웃</a>
					</div>`


	}
	//	console.log(header)
	return header;


}

