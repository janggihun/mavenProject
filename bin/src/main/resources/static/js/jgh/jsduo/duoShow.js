
////////////시작하자마자 방 보여주기/////////////////
$(document).ready(function() {
	duoMainInfo()
	showChattInfo()
})

function duoMainInfo() {

	$.ajax({
		type: 'post',
		url: '/jgh/duostartinfo',
		success: function(res) {
//			console.log(res)
			const date = new Date();

			let str = ''
			for (let i in res) {

				str += `<tr class="duoTr Dtd" >

			<td class="duoitems dNo"><span class="duo-no">${res[i].rCnt}</span></td>
			<td class="duoitems dName"><span class="duo-name">${res[i].userId}</span></td>
			<td class="duoitems mPosition"><span class="duo-mPosition">${res[i].myPosition}</span></td>
			<td class="duoitems dTear"><span class="duo-tear">${res[i].tier}</span></td>
			<td class="duoitems dType"><span class="duo-gType">${res[i].gameType}</span></td>
			<td class="duoitems yPosition"><span class="duo-yPosition">${res[i].duoPosition}</span></td>
			<td class="duoitems recentP"><span class="duo-recentP">개발중</span></td>
			<td class="duoitems dMeno"><div class="duo-momo">
					<div class="duo-m">
						<span class="duo-ms">${res[i].memo}</span>
					</div>
				</div></td>
				
				
			<td class="duoitems blank">
				<span class="duo-blank" >
				
				
				<div class="dropdown">
				  <button class="dropbtn">....</button>
				  <div class="dropdown-content">
				    <a href="#">수정</a>
				    <a href="javascript:deleteDuo(${res[i].rCnt})">삭제</a>
				
				  </div>
				</div>

				</span>
			</td>
			</tr>`

			}

			document.getElementById("duotbody").innerHTML = str
		}
	})
}

////////////중간에 방 넣기////////////////

function showNewDuo(res) {
	console.log(res);
	const date = new Date();
	let str = ''
	let rCnt = res.rCnt
	let userId = res.userId
	let myPosition = res.myPosition
	let tier = res.tier
	let gameType = res.gameType
	let duoPosition = res.duoPosition

	let memo = res.memo


	str += `<tr class="duoTr Dtd" >

			<td class="duoitems dNo"><span class="duo-no">${rCnt}</span></td>
			<td class="duoitems dName"><span class="duo-name">${userId}</span></td>
			<td class="duoitems mPosition"><span class="duo-mPosition">${myPosition}</span></td>
			<td class="duoitems dTear"><span class="duo-tear">${tier}</span></td>
			<td class="duoitems dType"><span class="duo-gType">${gameType}</span></td>
			<td class="duoitems yPosition"><span class="duo-yPosition">${duoPosition}</span></td>
			<td class="duoitems recentP"><span class="duo-recentP">개발중</span></td>
			<td class="duoitems dMeno"><div class="duo-momo">
					<div class="duo-m">
						<span class="duo-ms">${memo}</span>
					</div>
				</div></td>
				
				
			<td class="duoitems blank">
				<span class="duo-blank" >
				
						<ul >
							<li><a  href='#'>수정</a></li>
							<li><a  href='javascript:deleteDuo(${res.rCnt})'>삭제</a></li>
						</ul>
				
					
				</span>
			</td>
			</tr>`



	$('##duotbody').prepend(str)
	$('#' + res.rCnt).hide()
	$('#exampleModal').modal("hide");

	$('#' + res.rCnt).show(4200)
	console.log("방 업데이트 완료")


}

//접속한 채팅방 사이바에 보여주기

function showChattInfo() {

	$('.menu').empty()

	$.ajax({
		//
		type: 'post',
		url: '/jgh/chattRoomInfo',
		success: function(res) {

			if (res != '') {
				str = ''
				str += '<ul>'
				for (let i of res) {

					str += '<li ><span>채팅방 번호:' + i.rCnt + '</br></span><a href = "javascript:myRoom(' + i.rCnt + ')">들어가기<a>'
						+ '</br> <a href = "javascript:goOutRoom(' + i.rCnt + ')">방나오기<a></li></br>'

				}
				str += '</ul>'

				$('.menu').append(str)
			}

		}
	})

}


//
//	str += "</tr>"
//
