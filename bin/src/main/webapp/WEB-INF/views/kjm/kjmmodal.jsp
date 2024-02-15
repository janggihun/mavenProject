<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="modal fade" id="exampleModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">쪽지쓰기</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
						<input type ="hidden" name = "userId" id = "userId" value ="${userId }">
						보내는사람<input type="button" name="recv_userId" id="recv_userId" disabled value ="${userId }"><br>
						받는사람<input type="text" name="send_userId" id="send_userId"><br>
						제목<input type="text" name="n_title" id = "n_title"><br>
						<textarea rows="6" cols="35" name="n_message" id ="n_message"></textarea>
						<br> 
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" id="mailsend">쪽지보내기</button>
					<button type="button" class="btn btn-secondary"
						data-bs-dismiss="modal">닫기</button>

				</div>
			</div>
		</div>
	</div>
</body>
</html>