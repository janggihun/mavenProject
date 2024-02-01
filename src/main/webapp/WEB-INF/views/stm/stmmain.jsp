<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>송태민 테스트</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>

<link rel="stylesheet" href="../css/stm/lolDataList.css">
<style type="text/css">

</style>
</head>










<body>
<%@include file="../inc/header.jsp" %>
<div align="center">
<input type="text" id="gameName" name="gameName" placeholder="아이디" value="깡통차기국내1위">
<input type="text" id="tagLine" name ="tagLine" placeholder="태그" value="KR1">
<button id="getpuuid">검색</button>
</div>














<!-- 유저 정보 jsp -->
<%@include file="../stm/StmUserData.jsp" %>
<!-- 전적 리스트 jsp -->
<%@include file="../stm/lolList.jsp" %>

<script defer src ="/js/stm/joinId.js"></script>
<script defer src ="/js/stm/loldata.js"></script>
<script defer src="/js/stm/RiotGameTable.js"></script>
</body>
</html>