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
				<h2>DataBoom</h2>
			</div>
			<div class="close-area">X</div>
			<div class="content">


				<table border="1">

					<thead>
						<tr style="display: none;">
							<th>번호</th>
							<td id = "num"></td>
						</tr>
						<tr>
							<th>제목</th>
							<td id="title"></td>
						</tr>
						<tr>
							<th>보낸사람</th>
							<td id="senduser"></td>
						</tr>
						<tr>
							<th>날짜</th>
							<td id="date"></td>
		
							
						</tr>
						<tr>
							<th>내용</th>
							<td class="contents" id="message"></td>
						</tr>

					</thead>

				</table>
				<button class="answer" id="answer">답변하기</button>
				

			</div>
		</div>
	</div>
</body>
</html>