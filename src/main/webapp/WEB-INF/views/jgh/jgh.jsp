
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>롤 영혼의 Duo 찾기</title>
<!-- css들어갈자리  -->
<link href="/css/style.css" rel="stylesheet" type="text/css">

</head>

<body>

<%@include file="inc/header.jsp" %>

<div style="height: 900px; background: lightpink;">

<%@include file="duoSearch/duoMain.jsp" %>

</div>
<%@include file="inc/footer.jsp" %>

<!-- js들어갈자리  -->
<script defer src="/js/jgh/jsduo/duo.js"></script>
<script defer src="/js/aCommon/common.js"></script>

</body>

</html>