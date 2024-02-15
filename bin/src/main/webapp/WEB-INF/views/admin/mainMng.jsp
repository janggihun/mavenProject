
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>롤 영혼의 Duo 찾기</title>
<!-- css들어갈자리  -->

</head>
<body>

<%@include file="../inc/header.jsp"%>
<h2><a href = "/admin/admin"> 총괄관리자로가기</a></h2>
<h1>관리자 페이지 입니다.</h1>
[[중간 관리자와 총괄관리자만 들어올수 있습니다.]]
<hr>
<h2>해당권한을 가지고 있는 사람만 들어갈수 있습니다.</h2>
<ul>
<li>인사메니저로 이동하기 >> <a href = "/admin/hrd">click</a></li>
<li>결제메니저로 이동하기 >> <a href = "/admin/pay">click</a></li>
<li>아이템메니저로 이동하기 >> <a href = "/admin/item">click</a></li>
<li>캐릭터메니저로 이동하기 >> <a href = "/admin/chp">click</a></li>


</ul>
<script defer src="/js/admin/info.js"></script>



</body>
</html>