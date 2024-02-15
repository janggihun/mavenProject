<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<script
	src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
	integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
	integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa"
	crossorigin="anonymous"></script>

<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<link href="/css/kjm/modal2.css" rel="stylesheet" type="text/css">
<!--    css -->
<title>Insert title here</title>
</head>
<body>
	${userId }님
	<br>
	<a href="/">돌아가기</a>
	<button type="button" class="btn btn-success" type="button"
		class="btn btn-primary" data-bs-toggle="modal"
		data-bs-target="#exampleModal">쪽지쓰기</button>


	<table class="table table-green table-hover" id="modal_wrap">

		<thead>
			<th>번호</th>
			<th>보낸사람</th>
			<th>제목</th>
			<th>날짜</th>
		</thead>
		<tbody>

			<c:forEach var="item" items="${maillist}">
				</a>
				<tr class="maillist" id="maillist">
					<td>${item.n_num}</td>
					<td>${item.recv_userId}</td>
					<td>${item.n_title}</td>
					<td>${item.n_date}</td>
					<td style="display: none;">${item.send_userId}</td>
					<td style="display: none;">${item.n_message}</td>
				</tr>
				<input type="hidden" name="${item.recv_userId}"
					id="${item.recv_userId}">
				<input type="hidden" name="${item.send_userId}"
					id="${item.send_userId}">
			</c:forEach>
		</tbody>
	</table>

	<!-- 메일쓰기 -->
	<%@include file="kjmmodal.jsp"%>
	<!-- 메일 보기 -->
	<%@include file="kjmmodal2.jsp"%>



	<script defer src="/js/kjm/Note/Note.js"></script>
	<script defer src="/js/kjm/Note/NoteModal.js"></script>




</body>
</html>