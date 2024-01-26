
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>롤 영혼의 Duo 찾기</title>
<!-- css들어갈자리  -->
<script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
<link href="/css/jgh/button.css" rel="stylesheet" type="text/css">
<link href="/css/style.css" rel="stylesheet" type="text/css">
<link href="/css/jgh/modal.css" rel="stylesheet" type="text/css">
<link href="/css/jgh/style.css" rel="stylesheet" type="text/css">
</head>

<body>

	<%@include file="../inc/header.jsp"%>

	<div style="height: 1200px; background: lightBLUE;">

		<%@include file="duoSearch/duoMain.jsp"%>

	</div>

	<%@include file="../inc/footer.jsp"%>

	<!-- js들어갈자리  -->

	<script defer src="js/jgh/jsduo/duoPort.js"></script>
	<script defer src="/js/jgh/jsduo/duoChatting.js"></script>
	<script defer src="/js/jgh/jsduo/duoDeleteSave.js"></script>
	<script defer src="/js/jgh/jsduo/duoModal.js"></script>
	<script defer src="/js/jgh/jsduo/duoShow.js"></script>

</body>

</html>