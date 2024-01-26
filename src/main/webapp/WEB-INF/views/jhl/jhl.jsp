<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>정혜린</title>
<!-- css들어갈자리  -->
<style type="text/css">
.contents {
	height: 2100px;
	display: flex;
}

.aside {
	width: 700px;
	background-color: rgb(201, 252, 169);
}

.contentsItems {
	display: flex;
	width: 2100px;
}

.champs {
	display: flex;
	flex-wrap: wrap;
}

#searchC {
	border: none;
	width: 300px;
	height: 30px;
	margin-right: 10px;
	margin-bottom: 5px;
}

.seletB {
	border: none;
	background-color: white;
	width: 100px;
	margin-bottom: 5px;
}

.seletB:hover {
	background-color: lightblue;
}

.seletB:active {
	border: none;
	outline: none;
}

.contentsItem {
	width: 50%;
	background-color: orange;
}

.champImgItem {
	text-align:center;	
	flex-direction: column;
	display: flex;
	width: 54px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.champImgItem:hover {
	transform: scale(1.2);
	transition: transform .5s;
}

.se {
	display: flex;
	width: 500px;
	margin-top: 10px;
}

.championImg {
	margin: 3px;
}

.champName {
	font-size: 12px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align:center;	
}

.LineB{
display: flex;
}
</style>

</head>

<body>
<%@include file="champRank.jsp"%>
	

	<!-- js들어갈자리  -->

	<script type="text/javascript">
		
	</script>

</body>

</html>