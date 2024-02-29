
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>마이페이지</title>
<!-- css들어갈자리  -->

<script
	src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0"></script>
<!-- <link href="/css/jgh/button.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/style.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/jgh/modal.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/jgh/style.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/jgh/animation.css" rel="stylesheet" type="text/css"> -->
<!-- 부트스트랩 -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
	integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
	integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa"
	crossorigin="anonymous"></script>
<!-- ㅎ-->
<link href="/css/common/myPage.css" rel="stylesheet" type="text/css">
<!-- ㅎㅎ -->
<link href="/css/newMain.css" rel="stylesheet">
<link href="/css/jgh/modal.css" rel="stylesheet" type="text/css">
<link href="/css/common/roulette.css" rel="stylesheet" type="text/css">
<script defer src="/js/aPayment/payment.js"></script>
<script defer src="/js/aCommon/roulette.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</head>

<body>

	<%@include file="../inc/header.jsp"%>
	<div class="ground">
		<%@include file="../aMain/myPageMain.jsp"%>
	</div>
	<%@include file="../inc/footer.jsp"%>
	<!-- js들어갈자리  -->

	<!-- 	<script defer src="/js/jgh/jsduo/duoChatting.js"></script> -->
	<!-- 	<script defer src="/js/jgh/jsduo/duoDeleteSave.js"></script> -->
	<!-- 	<script defer src="/js/jgh/jsduo/duoModal.js"></script> -->
	<!-- 	<script defer src="/js/jgh/jsduo/duoShow.js"></script> -->
	<%@include file="../inc/modal4.jsp"%>
</body>

</html>