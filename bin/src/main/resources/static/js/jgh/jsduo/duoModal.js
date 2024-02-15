
///////////////////////////////모달/////////////////////////////////////

const modal_wrap = document.querySelector('.modal_wrap')
const modal_background = document.querySelector('.modal_background')

function close() {

	//	$('.accordion-box').empty()
	modal_wrap.classList.remove('show-modal');
	modal_background.classList.remove('show-modal');
}
function open() {

	$('.wrap').show();
	$('#flagcollapse').show();
	modal_wrap.classList.add('show-modal')
	modal_background.classList.add('show-modal')
}

window.addEventListener('click', (e) => {
	//	console.log(e.target)

	e.target === modal_background ? close() : false
	if (e.target.className === 'btn btn-secondary dropdown-toggle show') {

		close()
	}

})

document.querySelector('#duoboard').addEventListener('click', (e) => {

	//테이블의 tr행이 몇번째 행인지 알게 해주는 구문
	const rowIndex = e.target.closest("tr").rowIndex;
	var table = document.getElementById("duoboard")
	var tr = table.getElementsByTagName("tr");
	let td = tr[rowIndex].getElementsByTagName("td")[0]
	let rCnt = td.querySelector('.duo-no').innerText

	document.getElementById('rCnt').value = rCnt;

	duoinfo(rCnt)
	if (e.target.className != 'dropbtn') {

		if (e.target.innerText != '수정' && e.target.innerText != '삭제') {

			open()

		}

	}

	console.log()



})

$('.modal_close').on("click", function() {
	close()
})

/////////////////////////모달 값 넣기///////////////

function duoinfo(rCnt) {

	$('.startSearch').show();
	$('#aaa').empty()
	$('.flagA').show();
	$('#chatt').hide();

	data = { 'rCnt': rCnt }

	$.ajax({

		type: 'post',
		url: '/jgh/duoInfo',
		data: data,
		success: function(res) {

			$('#duoParty').show();
			$('#duoPartyCancel').hide();
			$('#flagcollapse').html('=================')

			let rCnt = res.rCnt
			let date = res.date

			let duoPosition = "<font color= blue>" + res.duoPosition + "</font>"
			let myPosition = res.myPosition
			let memo = "<font color= blue>" + res.memo + "</font>"
			let userId = res.userId
			if (userId == '비회원') {

				userId = "<font color= red>" + '비회원' + "</font>"

			} else {
				userId = "<font color= blue>" + res.userId + "</font>"
			}

			let tier = "<font color= #a014a0>" + res.tier + "</font>"

			$('#rCntM').html(rCnt)
			$('#userIdM').html(userId)
			$('#myPositionM').html(myPosition)
			$('#tierM').html(tier)
			$('#duoPositionM').html(duoPosition)
			$('#memoM').html(memo)
			$('#date').html(date)

			let hostId = $('#hostId').val()
			if (hostId == userId) {
				$("#duoParty").hide();
			} else {
				$("#duoParty").show();
			}

		}, error: function(error) {
			console.log("모달 값넣기 에러")
		}
	})

}



///모달3 컨트롤러//

const loremIpsum = document.getElementById("lorem-ipsum")

const modal = document.getElementById("modal")
function modalOn() {
	modal.style.display = "flex"
}
function isModalOn() {
	return modal.style.display === "flex"
}
function modalOff() {
	modal.style.display = "none"
}
const btnModal = document.getElementById("btn-duoSearch")
btnModal.addEventListener("click", e => {
	modalOn()
})
const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
	modalOff()
})
modal.addEventListener("click", e => {
	const evTarget = e.target
	if (evTarget.classList.contains("modal-overlay")) {
		modalOff()
	}
})
window.addEventListener("keyup", e => {
	if (isModalOn() && e.key === "Escape") {
		modalOff()
	}
})
//////////////////


const useCustomSelectBox = ({ targetRef }) => {
	const [isSelectBoxOpened, setIsSelectBoxOpened] = useState(false);

	useEffect(() => {
		const onCloseOptionList = (event) => {
			if (!targetRef.current?.contains(event.target)) {
				setIsSelectBoxOpened(false);
			}
		};

		document.addEventListener('click', onCloseOptionList);

		return () => {
			document.removeEventListener('click', onCloseOptionList);
		};
	}, [isSelectBoxOpened, targetRef]);

	return [isSelectBoxOpened, setIsSelectBoxOpened];
};