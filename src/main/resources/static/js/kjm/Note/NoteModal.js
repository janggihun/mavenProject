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
	let send_userId = tr[rowIndex].getElementsByTagName("td")[1].textContent
	let n_title = tr[rowIndex].getElementsByTagName("td")[2].textContent
	let n_date = tr[rowIndex].getElementsByTagName("td")[3].textContent
	let recv_userId = tr[rowIndex].getElementsByTagName("td")[5].textContent
	let n_message = tr[rowIndex].getElementsByTagName("td")[6].innerText
	console.log(n_title)

	document.querySelector("#num").innerText = n_num
	document.querySelector("#title").innerText = n_title
	document.querySelector("#senduser").innerText = send_userId
	document.querySelector("#date").innerText = n_date
	document.querySelector("#message").innerText = n_message
	
	document.querySelector("#n_message").value = n_message
	document.querySelector("#n_num").value = n_num
	document.querySelector("#n_title").value = "re:"+n_title
	

})
//const answer = document.getElementById("answer")
$('#answer').on("click", function() {
	modal0.style.display = "flex";	
	modal.style.display = "none"
	document.querySelector('#n_date').value= new Date().toISOString().slice(0, 10);
	console.log("쳌")
})
//
//
//function inqAnswer() {
//
//
//
//	$.ajax({
//
//		type: 'post',
//		url: '/inqAnswer',
//
//
//		success: function(res) {
//			console.log(res)
//			let str = ''
//			for (let i in res) {
//				str += `
//				<input type="hidden" name="n_num" id="n_num" value="${res[i].n_num}">
//				<input type="hidden" name="recv_userId" id="recv_userId" value="${res[i].recv_userId}">					
//				<input type="text"name="n_title" id="n_title" value="Re:${res[i].n_title}">
//					<hr>
//				<textarea rows="6" cols="80" name="n_message" id="n_message">
//				${res[i].n_message}
//				
//
//				</textarea>`;
//			}
//			document.getElementById("modal0-body").innerHTML = str
//		}
//	})
//}
//
//
//
//
//
////모달 닫기
//
const closeBtn = modal.querySelector(".close-area")
const closeBtn0 = modal0.querySelector(".modal-close-area")
closeBtn.addEventListener("click", e => {
	modal.style.display = "none"
})
closeBtn0.addEventListener("click", e => {
	modal0.style.display = "none"
})