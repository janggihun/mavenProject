<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
	<!-- 본인아이디 -->
	<input type="hidden" value="${userId}" id="userId" />
	<!-- 	채팅번호,방번호, 현재 테이블에서 누른 방번호 알수있음-->
	<input type="hidden" value="" id="rCnt" />
	<!-- 	//요청자 -->
	<input type="hidden" value="" id="guestId" />
	<!-- 	//글작성자 -->
	<input type="hidden" value="" id="hostId" />


	<%@include file="sideBar.jsp"%>

	<%@include file="createRoom.jsp"%>

	<%@include file="modal3.jsp"%>

	<%@include file="modal2.jsp"%>

	<%@include file="aaa.jsp"%>
	<!--   아코디언 메세지 -->
	<div class="accordion-box"></div>




</body>
</html>