<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>정혜린</title>

<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<!-- css들어갈자리  -->
<link href="/css/jhl/champImg.css" rel="stylesheet">
<link href="/css/jhl/champRank.css" rel="stylesheet">

</head>

<body>
	<%@include file="../inc/header.jsp"%>
	<!-- 랭크 테이블  -->
	<%@include file="champRank.jsp"%>
	<%@include file="../inc/footer.jsp"%>


	<!-- js들어갈자리  -->
	<script defer src="js/jhl/champ/champSearch.js"></script>


</body>

</html>