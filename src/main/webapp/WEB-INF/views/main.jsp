
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>첫화면</title>
<!-- css들어갈자리  -->
<!-- <link rel="stylesheet" href="css/main.css" /> -->

</head>

<body>

<%@include file="inc/header.jsp" %>
<div style="height: 700px; background: lightpink;">
<%@include file="aMain/mainDetail.jsp" %>
</div>
<%@include file="inc/footer.jsp" %>

<!-- js들어갈자리  -->
<!-- <script src="js/main.js"/> -->

<script src="js/aLol/loldata1.js"></script>
<script type="text/javascript">


$(document).ready(function() {
	//메세지 형태의 값은 다 찾기
	if ('${msg}' != '') {
		alert('${msg}');
	}
	else if ('${error}' != '') {
		alert('${error}');
	}
})
</script>
</body>

</html>