<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
	<input type="hidden" value="" id="dcntflag" />
	<input type="hidden" value="" id="friendId" />
	<input type="hidden" value="" id="rcnt" />
	<input type="hidden" value="" id="guestId" />
	<input type="hidden" value="" id="dntDuo" />
	
	
	<div class="side-bar">
		<div class="icon">
			<div>▼</div>
			<div>현재 접속한 채팅방▶</div>
		</div>
		<nav class="menu">
			
		</nav>
	</div>
	
	
	<div id=duoTable class=searchDuoT>
		<h1 align="center">롤 듀오DUO 구하기</h1>
		<div align="left"></div>
		<div align="right">




			<button type="button" class="btn btn-success" type="button"
				class="btn btn-primary" data-bs-toggle="modal"
				data-bs-target="#exampleModal">글쓰기</button>
			<p></p>
		</div>

		<table class="table table-dark table-hover" id="modal_wrap">
			<thead>
				<tr>
					<th>번호</th>
					<th>이름</th>
					<th>나의 포지션</th>
					<th>티어</th>
					<th>게임타입</th>
					<th>찾는포지션</th>
					<th>최근 챔피언</th>
					<th>메모</th>
					<th>등록일시</th>
				</tr>
				<tr>
					<th colspan=10>===============================================================================================================================</th>
				</tr>
			</thead>
			<tbody id="preflag">
				<!-- 	10개 데이터들어감 -->
			</tbody>
		</table>
	</div>


	<!-- Modal -->
	<!-- 	듀오등록 -->
	<%@include file="modal1.jsp"%>
	<!--   세부내용 -->
	<%@include file="modal2.jsp"%>
	<!--   아코디언 메세지 -->
	<div class="accordion-box"></div>
	<%-- 	<%@include file="accordionMsg.jsp"%> --%>








</body>
</html>