<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>전적검색 DataBoom</title>
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<!-- <link rel="stylesheet" href="/css/stm/lolDataList.css"type="text/css"> -->
<link href="/css/stm/recordBoard.css" rel="stylesheet" type="text/css">
<link href="/css/ai/aimodal.css" rel="stylesheet" type="text/css">
<link href="/css/ai/bargraphGold.css" rel="stylesheet" type="text/css">
<!-- <link rel="stylesheet" href="css/my_gradient_half_2.css" /> -->


</head>






<body>
	<p id="modNum" style="visibility: hidden; position: absolute;">1</p>


	<%@include file="../inc/header.jsp"%>

	<!-- <div class="searchbox"> -->
	<!--     <button type="button" class="searchbt1"><span>KR</span></button> -->
	<!--     <input class="search" id='search' autocomplete="off" type="text" value="동정팔이소년#KR1"> -->
	<!--     <button type="button" class="searchbt2" id ="searchbt2"  onclick="searchbtn()"><span>검색</span></button> -->
	<!-- </div> -->
	<!-- <div align="center"> -->
	<!-- <input type="text" id="gameName" name="gameName" placeholder="아이디" value="동정팔이소년"> -->
	<!-- <input type="text" id="tagLine" name ="tagLine" placeholder="태그" value="KR1"> -->
	<!-- <button id="getpuuid">검색</button> -->
	<!-- </div> -->





	<%@include file="../stm/lolList.jsp"%>

	<%@include file="../stm/aimodal.jsp"%>
	
	<!-- 유저 정보 jsp -->
	<%-- <%@include file="../stm/StmUserData.jsp" %> --%>
	<!-- 전적 리스트 jsp -->
	<script defer src="/js/ai/bargraphGold.js"></script>
	<script defer src="/js/AI/aimodal.js"></script>
	<script defer src="/js/AI/main.js"></script>
	<script defer src="/js/kdg/kdgDarkmod.js"></script>

	<script defer src="/js/kdg/item/allItemTT.js"></script>


<!-- 	<script defer src="/js/stm/RiotGameTable.js"></script> -->
		<%@include file="../inc/footer.jsp"%>
</body>
</html>