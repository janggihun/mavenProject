/**
 * 
 *///만들어야 할것 >>id입력시에 밑에 연관으로 아이디 나올수 있게하기


$('#idSearch').on("click", function() {
	$('#doneflag').empty();
	LoadingWithMask()
	$('#loadingimg').show();
	let gameName = $('#gameName').val()
	let tagLine = $('#tagLine').val()

	if (gameName == '' || tagLine == '') {

		alert("소환사 이름을 선택해주세요")
		closeLoadingWithMask()
		return false;
	} else {
		data = {
			'gameName': gameName,
			'tagLine': tagLine
		}

		$.ajax({
			type: 'post',
			url: '/main/info',
			data: data,
			traditional: true,


			success: function(result) {
				closeLoadingWithMask()
				console.log(result)
				$('#doneflag').html("<h2 align = center> 성공 , f12를 눌러 정보확인요망</h2>")

				if (result == null || result == '') {

					$('#doneflag').html("<h2 align = center>실패, 소환사 이름을 찾을수 없음</h2>")

				}


			}, error: function(error) {
				closeLoadingWithMask()
				console.log("ajax 통신 중 에러발생");
			}

		})
	}
})


//function check(id) {
//
//	if ($('.' + id).css("display") == 'none') {
//
//		$('.' + id).fadeTo(50, 1);
//	}
//	// btn` 보이기 (display: block)
//	else {
//		$('.' + id).hide();
//	}
//
//}

function LoadingWithMask() {
	var maskHeight = $(document).height(); var maskWidth = window.document.body.clientWidth;
	var mask = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
	var loadingImg = '';
	loadingImg += " <img src='img/loadingimg.gif' style='position: absolute; display: block; margin: 0px auto;'/>";
	$('body').append(mask)
	$('#mask').css({ 'width': maskWidth, 'height': maskHeight, 'opacity': '0.3' });
	$('#mask').show();
	$('#loadingImg').append(loadingImg);
	$('#loadingImg').show();
}

function closeLoadingWithMask() {
	$('#mask, #loadingImg').hide();
	$('#mask, #loadingImg').empty();
}