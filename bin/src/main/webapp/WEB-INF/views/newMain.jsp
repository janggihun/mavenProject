<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<link href="/css/new/new.css" rel="stylesheet" type="text/css">
<link href="/css/new/bar.css" rel="stylesheet" type="text/css">



</head>

<body>

	<div class="main">



		<%@include file="inc/header.jsp"%>


		<%@include file="aMain/mainDetail.jsp"%>



		<%@include file="inc/footer.jsp"%>

	</div>

	<!-- js들어갈자리  -->
	<script defer src="js/new/gameNameSearch.js"></script>
<script defer src="js/new/slide.js"></script>
<script defer src="js/new/bar.js"></script>
</body>
</html>