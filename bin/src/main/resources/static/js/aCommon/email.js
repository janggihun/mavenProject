//$("#joinBtn").hide();
function sendNumber() {
	$("#mail_number").css("display", "block");
	$.ajax({
		url: "/mail",
		type: "post",
		dataType: "json",
		data: { "mail": $("#mail").val() },
		success: function(data) {
			alert("인증번호 발송");
			$("#Confirm").attr("value", data);
		}
	});
}
let check = 0;
function confirmNumber() {
	var number1 = $("#number").val();
	var number2 = $("#Confirm").val();
	
	console.log(number1)
	console.log(number2)
	if (number1 == '' || number2 == '') {
		alert("인증해주세요.");
		return false
	}

	if (check != 0) {

		alert("회원가입성공!")
		return true;
	}

	if (number1 == number2) {
		check ++;
		alert("인증되었습니다.");
		$("#joinBtn").show();


		return false;

	} else {
		alert("번호가 다릅니다.");
		return false;
	}

	//$('#joinForm').submit();

}



//이메일 형식체크

$("#mail").on("keyup", function() {
	let emchk = false;
	let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	//console.log("email : "+$userEmail.val());
	if (!regExp.test($("#mail").val())) {
		//console.log("형식 미확인");
		emchk = false;

		$("#mailTxt")
			.html(
				"<span id='chkmail'>이메일 형식이 맞지 않습니다</span>")
		$("#chkmail").css({
			"color": "#FA3E3E",
			"font-weight": "bold",
			"font-size": "10px"
		})
	} else {
		emchk = true;

		//console.log("형식 확인");
		$("#mailTxt")
			.html(
				"<span id='chkmail'>이메일을 형식을 확인했습니다</span>")
		$("#chkmail").css({
			"color": "#0D6EFD",
			"font-weight": "bold",
			"font-size": "10px"
		})
		$("#sendBtn").attr("disabled", false);
	}

})


