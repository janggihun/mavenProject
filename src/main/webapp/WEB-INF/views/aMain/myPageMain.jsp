<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<!-- 	<div style="height: 1000px; background: rgba(0, 0, 0, 0);"> -->
	<div class="ground2">
		<div class="left"></div>
		<div class="right">
			<div class="profile">
				<div class="pline1">
					<div class="pline1-1">
						<p>내 정보</p>
					</div>
					<div class="pline1-2">
<!-- 						<button type="button" class="changebutton" -->
<!-- 							onclick="location.href='/member/passwordcheck'">정보수정</button> -->
					</div>
				</div>
				<div class="pline2">
					<p>${mlist.userName}</p>
				</div>
				<div class="pline3">
					<p>아이디 ${mlist.userId}</p>
				</div>
				<div class="pline4">
					<div class="emailimg"></div>
					<div class="pline4text">${mlist.userEmail}</div>
				</div>
				<div class="pline5">
					<div class="pointimg"></div>
					<div class="pline5text">${mlist.userPoint}Point</div>
					<div class="cash">
						<a href="javascript:openModal()">충전</a>
					</div>
				</div>
				<div class="pline6">
					비밀번호 변경
				</div>
			</div>

			<div class="c-txt">정보수신동의</div>
			<div class="agree-to-receive">
				<div class="aline1">
					<div class="phoneimg"></div>
					<div class="aline1text">휴대전화</div>
					<div class="on-off-btn">
						<input type="checkbox" id="switch"> <label for="switch"
							class="switch_label"> <span class="onf_btn"></span>
						</label>
					</div>
				</div>
				<div class="aline2">
					<div class="emailimg2"></div>
					<div class="aline2text">이메일</div>
					<div class="on-off-btn">
						<input type="checkbox" id="switch2"> <label for="switch2"
							class="switch_label2"> <span class="onf_btn2"></span>
						</label>
					</div>
				</div>
			</div>
		</div>

	</div>







	<!-- 	</div> -->
</body>
</html>