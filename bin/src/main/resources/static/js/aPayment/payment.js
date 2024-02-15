
function openModal() {
	$("#paymentModal").show();
};
function closeModal() {
	$('.paymentModal').hide();
};

$('#payNow').on("click", function() {
	
	kakaopay()
	
})


function kakaopay() {

	let userId = $('#userId').val()
		console.log(userId)
	let totalMoney = $('#totalMoney').val()
	console.log(totalMoney)
	let IMP = window.IMP;
	IMP.init('IMP11857210');
	IMP.request_pay({
		pg: 'kakaopay',
		//		pay_method: 'card', //생략 가능
		customer_uid: userId,
		merchant_uid: 'merchant_' + new Date().getTime(), // 상점에서 관리하는 주문 번호
		name: '결제테스트: 테스트',
		amount: totalMoney,
		buyer_email: 'jgh@test.com',
		buyer_name: '테스트',
		buyer_tel: '010-1234-5678',
		buyer_addr: '인천시 주안동',
		buyer_postcode: '123-456'
	}, function(rsp) {
		console.log(rsp)
		//rsp는 ps와 연결이 되었을때 주는 정보임. 그안에는 많은게 있는데 그중에서 id와 amount를 가지고옴,
		if (rsp.imp_uid) {

			$.ajax({
				type: 'post',
				url: '/pay/' + rsp.imp_uid,
			}).done(function(data) {
				if (rsp.paid_amount == data.response.amount) {
					dbsave(userId, totalMoney);
				} else {
					alert("결제 실패");
				}
			})

		} else {
			alert("결제 금액을 선택해주세요");
		}

	})
}

function dbsave(userId, userCash) {
	let userPoint = (userCash * 10)

	data = {
		"userId": userId,
		"userCash": userCash,
		"userPoint": userPoint,

	}

	$.ajax({
		type: 'post',
		url: '/payDbSave',
		data: data,
	}).done(function(res) {
		alert("결제 성공");
		closeModal()
	})

}