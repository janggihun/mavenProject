<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="modal0" class="modal0-overlay">
		<div class="modal0-window">
			<div class="modal-close-area">X</div>
<!-- 			<div class="title"></div> -->

			<div class="modal0-content" id="modal0-body">
			<input type="hidden" name="n_num" id="n_num" value = "">
					<input type="hidden"
					name="status" id="status" value="답변완료"> 
 					<input type="hidden" name="n_date" id="n_date" value = ""> 
					<input type="text" name="n_title" id="n_title" value="">
				
				<textarea rows="6" cols="80" name="n_message" id="n_message">
				
				

				</textarea>
				<br>
				<button class ="inqanswer" id = "inqAnswerBtn">답변완료</button>
			</div>
		</div>
	</div>



</body>
</html>