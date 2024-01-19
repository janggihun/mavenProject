/**
 * 
 */
let interval = setInterval(update, 4000)

function stop() {

	clearInterval(interval)
}


function update() {
	let dcnt = $('#dcnt').val()
	let int = parseInt(dcnt) + 1
	data = { 'dcnt': int }


	$.ajax({

		type: 'post',
		url: '/comparedcnt',
		data: data,
		success: function(res) {

			if (res != '') {

				trs = "<tr  id = " + res.dcnt + ">"
				tdwin = "<td>개발중</td>"
				tduserId = "<td>" + res.userId + "</td>"
				tdmyPosition = "<td>" + res.myPosition + "</td>"
				tdtier = "<td>" + res.tier + "</td>"
				tdgameType = "<td>" + res.gameType + "</td>"
				tdduoPosition = "<td>" + res.duoPosition + "</td>"
				tdlately = "<td>개발중</td>"
				tdmemo = "<td>" + res.memo + "</td>"
				tddate = "<td>" + res.date + "</td>"

				tddiv = "<td><div class='dropdown'>" +
					"<button class='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>" +
					"..." + "</button>" +
					"<ul class='dropdown-menu'>" +
					"<li><a class='dropdown-item' href='#'>수정</a></li>" +
					"<li><a class='dropdown-item' href='javascript:deleteDuo(" + res.dcnt + ")'>삭제</a></li>" +
					"</ul>" +
					"</div></td>"

				tre = "</tr>"

				makeHtml = trs + tdwin + tduserId + tdmyPosition + tdtier + tdgameType + tdduoPosition + tdlately + tdmemo + tddate + tddiv + tre
				$('#preflag').prepend(makeHtml)
				$('#' + res.dcnt).hide()
				$('#' + res.dcnt).show(4200)

				document.getElementById("dcnt").value = int
			} else {

				//		console.log("최신상태입니다.")
			}

		},
	})


}
