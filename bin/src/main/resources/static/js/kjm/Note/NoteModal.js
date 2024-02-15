//모달 열기

const modal = document.getElementById("modal")
const modal_wrap = document.getElementById("modal_wrap")
modal_wrap.addEventListener("click", e => {
	//클릭 여러번 해도 한번만 나옴. 계속 덮어쓰기 되기 때문
	modal.style.display = "flex"
	//테이블의 tr행이 몇번째 행인지 알게 해주는 구문
	const rowIndex = e.target.closest("tr").rowIndex;
	var table = document.getElementById("modal_wrap")
	var tr = table.getElementsByTagName("tr");
	let n_num = tr[rowIndex].getElementsByTagName("td")[0].textContent
	let recv_userId = tr[rowIndex].getElementsByTagName("td")[1].textContent
	let n_title = tr[rowIndex].getElementsByTagName("td")[2].textContent
	let n_date = tr[rowIndex].getElementsByTagName("td")[3].textContent
	let send_userId = tr[rowIndex].getElementsByTagName("td")[4].textContent
	let n_message = tr[rowIndex].getElementsByTagName("td")[5].innerText
	console.log(n_title)

	document.querySelector("#title").innerText = n_title
	document.querySelector("#recvuser").innerText = recv_userId
	document.querySelector("#sendusder").innerText = send_userId
	document.querySelector("#date").innerText = n_date
	document.querySelector("#message").innerText = n_message
	
	
	//	console.log(e);

	//alert(n_title)



	//	$(document).ready(function(){
	//		console.log(n_title)
	//		$('#title').innerHTML('<th>n_title</th>')
	//		console.log(n_message)
	//		$('#recvuser').append('<th>recv_userId</th>')
	//		$('#sendusder').append('<th>send_userId</th>')
	//		$('#date').append('<th>n_date</th>')
	//		$('#message').append('<th>n_message</th>')
	//	})
	// alert(n_num)
	//document.getElementById(n_num);

})

document.querySelector("#modal_wrap").addEventListener("click", function() {
	

});



//모달 닫기

const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
	modal.style.display = "none"
})