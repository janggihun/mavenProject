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

${userId }님<br>
<a href="/">돌아가기</a>
			<button type="button" class="btn btn-success" type="button"
				class="btn btn-primary" data-bs-toggle="modal"
				data-bs-target="#exampleModal">쪽지쓰기</button>
				

	<table border=3>

		<thead>
			<th>번호</th>
			<th>제목</th>
			<th>날짜</th>
		</thead>
		<tbody>

			<c:forEach var="item" items="${maillist}">

				<tr>
					<td>${item.n_num}</td>
					<td><a href="/detail?n_num=${item.n_num}">${item.n_title}</a></td>
					<td>${item.n_date}</td>
				</tr>
				<input type ="hidden" name = "${item.recv_userId}" id = "${item.recv_userId}">
				<input type ="hidden" name = "${item.send_userId}" id = "${item.send_userId}">
			</c:forEach>
		</tbody>
	</table>

	<!-- 메일쓰기 -->
	<%@include file="kjmmodal.jsp"%>
	<!-- 메일 보기 -->
	<%@include file="kjmmodal2.jsp"%>



	<script defer src="/js/kjm/Note/Note.js"></script>




</body>
</html>