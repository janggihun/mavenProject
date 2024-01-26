
///////////////////////////////모달/////////////////////////////////////
const modal_wrap = document.querySelector('.modal_wrap')
const modal_background = document.querySelector('.modal_background')

function close() {

	modal_wrap.classList.remove('show-modal');
	modal_background.classList.remove('show-modal');
}
function open() {

	modal_wrap.classList.add('show-modal')
	modal_background.classList.add('show-modal')
}

window.addEventListener('click', (e) => {

	e.target === modal_background ? close() : false

})
document.querySelector('#modal_wrap').addEventListener('click', (e) => {

	//테이블의 tr행이 몇번째 행인지 알게 해주는 구문
	const rowIndex = e.target.closest("tr").rowIndex;
	var table = document.getElementById("modal_wrap")
	var tr = table.getElementsByTagName("tr");
	//dcnt 는 해당 행의 번호
	let dcnt = tr[rowIndex].getElementsByTagName("td")[0].innerHTML
	//dcnt를 통해서 정보를 가지고옴
	duoinfo(dcnt)

	open()

})

$('.modal_close').on("click", function() {
	close()
})

/////////////////////////모달 값 넣기///////////////

function duoinfo(dcnt) {

	$('.startSearch').show();
	$('#aaa').empty()

	$('.flagA').show();
	$('#chatt').hide();
	data = { 'dcnt': dcnt }
	//	console.log(a)
	$.ajax({

		type: 'post',
		url: '/duoInfo',
		data: data,
		success: function(res) {

			$('#duoParty').show();
			$('#duoPartyCancel').hide();
			$('#flagcollapse').html('=================')
			document.getElementById('writter').value = res.userId;
			//			console.log(res)
			let dcnt = res.dcnt
			let date = res.date
			let duoPosition = ''
			//			let dcnt = res.date
			if (res.duoPosition == '' || res.duoPosition == null) {

				duoPosition = "<font color= green> 전 라인 </font>"
			} else {
				duoPosition = "<font color= blue>" + res.duoPosition + "</font>"
			}


			let myPosition = res.myPosition

			let memo = "<font color= blue>" + res.memo + "</font>"

			let userId = res.userId
			if (userId == '비회원') {

				userId = "<font color= red>" + '비회원' + "</font>"

			} else {
				userId = "<font color= blue>" + res.userId + "</font>"
			}

			let winLose = res.winLose

			let tier = "<font color= #a014a0>" + res.tier + "</font>"
			$('#dcntM').html(dcnt)
			$('#userIdM').html(userId)
			$('#myPositionM').html(myPosition)
			$('#tierM').html(tier)
			$('#duoPositionM').html(duoPosition)
			$('#memoM').html(memo)
			$('#date').html(date)

		}, error: function(error) {
			console.log("에러")
		}
	})

}

