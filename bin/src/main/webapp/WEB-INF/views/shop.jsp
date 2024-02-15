
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
<div style="height: 1500px; background: lightpink;">
<%@include file="aMain/shopDetail.jsp" %>
</div>
<%@include file="inc/footer.jsp" %>

<!-- js들어갈자리  -->
<script defer src="/js/jgh/jsShop/shop.js"></script>

</body>

</html>