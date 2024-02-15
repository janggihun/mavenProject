<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>


</head>

<body>
	<div id="modal" class="modal-overlay">
		<div class="modal-window">
			<div class="title">
				<h2>아이디찾기</h2>
			</div>
			<div class="close-area">X</div>
			<div class="content">
				<div class="div_email">
					<form action="/member/findId" method="post" id="joinForm"
						onsubmit="return confirmNumber();">
						<label for="r_pn2" class="label_rd">본인확인 이메일로 인증</label>
						<div class="box_inn_sub">
							<p class="dsc">본인확인 이메일 주소와 입력한 이메일 주소가 같아야, 인증번호를 받을 수 있습니다.</p>

							<label for="emailNm" class="label_txt">이름</label> <input
								type="text" id="emailNm" class="emailNm" name="emailNm"
								maxlength="40" class="input_txt" style="width: 217px">

							<!-- <span>이메일 </span> -->
							<div id="mail_input" name="mail_input">
								<label for="email" id="mailTxt">이메일을 입력해주세요</label>
								<!-- id = mail 바꾸지 말것 -->
								<input type="text" class="mail" name="userEmail" id="mail"
									placeholder="이메일"><br>
								<button type="button" id="sendBtn" name="sendBtn"
									onclick="sendNumber()" disabled="disabled">인증번호</button>
							</div>
							<br>
							<div id="mail_number" name="mail_number" style="display: none">
								<input type="text" name="number" id="number"
									placeholder="인증번호 입력">
								<button type="button" name="confirmBtn" id="confirmBtn"
									onclick="confirmNumber()">이메일 인증</button>
							</div>
							<br> <input type="text" id="Confirm" name="Confirm"
								style="display: none" value="">
						</div>
					</form>
				</div>
				<div class=""></div>
			</div>
		</div>
	</div>
</body>
</html>