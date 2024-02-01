<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<title>Insert title here</title>
<style type="text/css">
.coreItemList_caption {
	caption-side: top;
	text-align: right;
}

.coreItemList {
	border: 1px solid black;
	text-align: center;
	color: black;
	width: 1050px;
	left: 25px;
}

.small_chtd, .small_chtd img {
	width: 30px;
	height: 30px;
}

.small_ltd, .small_ltd img {
	width: 30px;
	height: 30px;
}

.small_td {
	width: 35px;
	height: 30px;
}

.none_td {
	width: 50px;
}

.long_rowtd {
	width: 240px;
}

.itemName_td {
	text-align: left;
	width: 140px;
	font-size: 13px;
}

.itemImg_td {
	width: 100px;
}

.itemImg_td img {
	width: 40px;
	height: 40px;
}

.coreItemList_caption .caption_img {
	width: 30px;
	height: 30px;
}

.small_tiertd {
	width: 50px;
	height: 30px;
}

.td_txt {
	font-size: 12px;
}

.long_rowtd2 {
	width: 180px;
}

.analysis_btn {
	width: 273px;
	border-radius: 5%;
}

.jb-text {
	
	padding: 15px 20px;
	background-color: #444444;
	border-radius: 5px;
	color: #ffffff;
	position: absolute;
	display: none;
	
	width: 400px;
	
	text-align: left;
	
}

.jb-title:hover + .jb-text {	
	 
	display: block;
	
}
</style>
</head>
<body>
	<%@include file="../inc/kdgheader.jsp"%>
	<h1>김동근 테스트 공간입니다.</h1>
	<p id="selectMenu" style="postion: absolute; visibility: hidden;"></p>
	<p id="tier_en" style="postion: absolute; visibility: hidden;">platinum</p>
	<p id="selectTier" style="postion: absolute; visibility: hidden;">플래티넘</p>
	<p id="selectCore" style="postion: absolute; visibility: hidden;">1코어 아이템</p>
	<div class="dropdown">
		<button id="TierDropDown" class="btn btn-secondary dropdown-toggle"
			type="button" data-bs-toggle="dropdown" aria-expanded="false"
			onclick="javascript:choice(this.id)">티어 선택</button>
		<ul class="dropdown-menu">
			<li><a id="iron" onclick="javascript:choiceTier(this.id)"
				class="dropdown-item" href="#"><img src="../img/tier/iron.png"
					style="width: 30px; height: 30px;"> 아이언</a></li>
			<li><a id="bronze" onclick="javascript:choiceTier(this.id)"
				class="dropdown-item" href="#"><img src="../img/tier/bronze.png"
					style="width: 30px; height: 30px;"> 브론즈</a></li>
			<li><a id="silver" onclick="javascript:choiceTier(this.id)"
				class="dropdown-item" href="#"><img src="../img/tier/silver.png"
					style="width: 30px; height: 30px;"> 실버</a></li>
			<li><a id="gold" onclick="javascript:choiceTier(this.id)"
				class="dropdown-item" href="#"><img src="../img/tier/gold.png"
					style="width: 30px; height: 30px;"> 골드</a></li>
			<li><a id="platinum" onclick="javascript:choiceTier(this.id)"
				class="dropdown-item" href="#"><img
					src="../img/tier/platinum.png" style="width: 30px; height: 30px;">
					플래티넘</a></li>
			<li><a id="emerald" onclick="javascript:choiceTier(this.id)"
				class="dropdown-item" href="#"><img
					src="../img/tier/emerald.png" style="width: 30px; height: 30px;">
					에메랄드</a></li>
			<li><a id="diamond" onclick="javascript:choiceTier(this.id)"
				class="dropdown-item" href="#"><img
					src="../img/tier/diamond.png" style="width: 30px; height: 30px;">
					다이아몬드</a></li>
			<li><a id="master" onclick="javascript:choiceTier(this.id)"
				class="dropdown-item" href="#"><img src="../img/tier/master.png"
					style="width: 30px; height: 30px;"> 마스터+</a></li>
		</ul>
		<button id="CoreItemDropDown"
			class="btn btn-secondary dropdown-toggle" type="button"
			data-bs-toggle="dropdown" aria-expanded="false"
			onclick="javascript:choice(this.id)">아이템 코어 선택</button>
		<ul class="dropdown-menu">
			<li><a id="firstCore" onclick="javascript:choiceCore(this.id)"
				class="dropdown-item" href="#">1코어 아이템</a></li>
			<li><a id="secondCore" onclick="javascript:choiceCore(this.id)"
				class="dropdown-item" href="#">2코어 아이템</a></li>
			<li><a id="thirdCore" onclick="javascript:choiceCore(this.id)"
				class="dropdown-item" href="#">3코어 아이템</a></li>
		</ul>
	</div>
	<button id="analysis_btn" class="analysis_btn" onclick="javascript:analy()">조회</button>
	<p>전설 아이템을 3개 이상 구매한 유저들의 아이템 통계입니다!</p>
	<div class="coreItemList_box" style="background-color: lightgray; color: white; width: 1100px; height: 2000px;">

	</div>



</body>
<script defer src="../js/kdg/item/itemInfo.js" /></script>

<script defer src="../js/kdg/item/itemToolTip.js" /></script>

<script defer src="../js/kdg/item/itemBuild.js" /></script>

</html>