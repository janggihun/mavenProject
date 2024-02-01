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
				<table border ="1">

					<thead>
						<tr>
							<th>제목</th>
						</tr>
						<tr>
							<th>보낸사람</th>
						</tr>
						<tr>
							<th>받는사람</th>
						</tr>
						<tr>
							<th>날짜</th>
						</tr>
						<tr>
						<th class = "contents">내용</th>
						</tr>

					</thead>
					<tbody id="detailflag">

					</tbody>
				</table>

			</div>
		</div>
	</div>
</body>
</html>