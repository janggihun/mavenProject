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

.contents{
display : flex;
flex-direction: row;
justify-content: center;

}

#searchC{
	border: none;
	width : 300px;
	height: 30px;
	margin-right: 10px;
	margin-bottom: 5px;
}

.seletB{
	border: none;
	background-color: white;
	width:100px;
	margin-bottom: 5px;
}
.seletB:hover{
	background-color: lightblue;
}
.seletB:active{
border: none;
	outline: none;
}
.contentsItem{
display : flex;
flex-direction:column;
text-align: center;
justify-content:center;
margin : 20px;
box-sizing: border-box;
}

#champListImg{
display : flex;
width:517px;
height: 500px;
box-sizing: border-box;
background-color: white;

}

#champImg{
display: flex;
flex-direction: row;
}
.champImgItems{
object-fit: cover;

}
.champImgItem{
display: inline-grid
width: 80px;
}


#lineRank{
height: 500px;

background-color: white;
}


</style>

</head>

<body>

<%@include file="../inc/header.jsp" %>
<div style="height: 700px; background: lightpink;">
<h1>정혜린 페이지 입니다.내용 미정</h1>
<div class ="contents" >
<div class ="contentsItem search">
<input type="text" id = "searchChampList" placeholder="검색">
<div>라인 아이콘</div>
<div id="champListImg">
<div class = "champImgItems">
<c:forEach var="champImg" items="${champListImg}">
<div class="champImgItem">
<img width="48" height="48" alt="${champImg.champion_name_kr}" src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
class="cpImg" border="0">
<span>${champImg.champion_name_kr}</span>
</div>
</c:forEach>
</div>


</div>
</div>
<div class="contentsItem Line">
<div class="lineListB">
<button class="seletB Top">탑</button>
<button class="seletB Jug">정글</button>
<button class="seletB Mid">미들</button> 
<button class="seletB Bot">바텀</button>
<button class="seletB Sup">서폿</button>
</div>
<div>랭킹 / 챔피언 / 승률 / 픽률 </div>
<div id="lineRank">  라인별 (승률/픽률 등)랭크 테이블</div>
</div>
</div>




</div>
<%@include file="../inc/footer.jsp" %>

<!-- js들어갈자리  -->

<script type="text/javascript">


</script>

</body>

</html>