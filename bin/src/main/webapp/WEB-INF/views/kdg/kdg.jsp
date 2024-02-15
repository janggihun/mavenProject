<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- champ rank js 들어갈곳 -->
<script defer src="../js/kdg/champion/champRank.js"></script>
<!-- champ choice js 들어갈곳 -->
<script defer src="../js/kdg/champion/champChoice.js"></script>
<!-- item info js 들어갈곳 -->
<script defer src="../js/kdg/item/itemInfo.js"></script>
<!-- modal js 들어갈 곳 -->
<script defer src="../js/kdg/kdgModal.js"></script>
<meta charset="UTF-8">
<title>챔피언 분석</title>
<!-- kdg css 들어갈곳 -->
<link rel="stylesheet" href="../css/kdg/copy.css" />

</head>
<body>
	<!-- header -->
	<%@include file="../inc/header.jsp"%>
	<!-- body jsp 파일 들어갈 곳 -->
	<%@include file="../kdg/kdgBody.jsp"%>
	<!-- footer -->
	<%@include file="../inc/footer.jsp"%>
	<!-- champ list (ajax) js 들어갈곳 -->
	<script defer src="../js/kdg/champion/champList.js" /></script>
	<!-- item build (ajax) js 들어갈곳 -->
	<script defer src="../js/kdg/item/itemBuild.js" /></script>
</body>

</html>