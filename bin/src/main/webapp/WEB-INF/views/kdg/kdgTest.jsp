<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- champ rank js 들어갈곳 -->
<script defer src="../js/kdg/champion/champRank.js"></script>
<!-- champ choice js 들어갈곳 -->
<script defer src="../js/kdg/champion/champChoice.js"></script>
<!-- champ list js 들어갈곳 -->
<script defer src="../js/kdg/champion/champList.js"></script>
<!-- modal js 들어갈 곳 -->
<script defer src="../js/kdg/kdgModal.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<!-- <script src="/static/js/bootstrap.bundle.js"></script> -->
<title>Insert title here</title>

<link rel="stylesheet" href="../css/kdg/copy.css" />
</head>
<body>
	<%@include file="../inc/header.jsp"%>
	<p id="name" style="visibility: hidden; position: absolute;"></p>
	<div class = "champs" style="visibility: hidden; position: absolute;">
		<p id="myChampName" style="visibility: hidden; position: absolute;"></p>
		<p id="enemyChampName" style="visibility: hidden; position: absolute;"></p>
		<p id="lineCheck" style="visibility: hidden; position: absolute;"></p>
		<p id="tierCheck" style="visibility: hidden; position: absolute;"></p>
	</div>
	<p id="selectMenu" style="visibility: hidden; position: absolute;"></p>	
	<p id="tier_en" style="visibility: hidden; position: absolute;">platinum</p>
	<p id="selectTier" style="visibility: hidden; position: absolute;">플래티넘</p>
	<p id="selectCore" style="visibility: hidden; position: absolute;">1코어 아이템</p>
	
	<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1" style = "">
	  <div class="modal-dialog modal-dialog-centered">
	    <div class="modal-content" style = "width: 700px;">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalToggleLabel">챔피언을 선택해보세요.</h5>
	        <button type="button" id="closeBtn" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body" style = "background-color: #3C3C41;">
	        <div id="myChampion" class = "champimg1">
				<img id = "myChamp" onclick="javascript:champ(this.id)" src = "../img/champ.jpg"></img>
			</div>
			<div id="vs">
				<img src="../img/versus.png"></img>
			</div>
			<div id = "enemyChampion" class="champimg2">
				<img id = "enemyChamp" onclick="javascript:champ(this.id)" src = "../img/champ.jpg"></img>
			</div>
					<div id=line>
						<div class="img" id="topimg">
							<img id="top" class="positionICN" src="../img/top.png"
								name="top" onclick="line(this.id)">

						</div>
						<div class="img" id="jugimg">
							<img id="jug" class="positionICN" src="../img/jug.png"
								name="jug" onclick="line(this.id)">

						</div>
						<div class="img" id="midimg">
							<img id="mid" class="positionICN" src="../img/mid.png"
								name="mid" onclick="line(this.id)">

						</div>
						<div class="img" id="adcimg">
							<img id="adc" class="positionICN" src="../img/adc.png"
								name="adc" onclick="line(this.id)">

						</div>
						<div class="img" id="supimg">
							<img id="sup" class="positionICN" src="../img/sup.png"
								name="sup" onclick="line(this.id)">

						</div>
					</div>
				<div id="champList" style = "display: none;">
					<ul>
						<c:forEach var="cham" items="${list}">
							<li id = "champListLi">
								<img id="${cham.champion_name}"
								src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${cham.champion_name}.png"
								width="77" height="77" alt="${cham.champion_name}"
								class="bg-image" onclick="javascript:submit(this.id)">
								<span>${cham.champion_name_kr}</span>
							</li>
						</c:forEach>
					</ul>
				</div>
				<div id = "selectTier" style = "display: none;">
				
				</div>
		      	<div id="itemBuild"  style = "display: none;">
		      	
		      	</div>
			</div>
	      <div id = "btnDiv" class="modal-footer">
	        <button id = "clickBtn" class="btn btn-primary" style = "display: none;">선택 완료</button>
	        <button id = "reSelectBtn" class="btn btn-primary" style = "display: none;">다시 선택</button>
	      </div>
	    </div>
	  </div>
	</div>
	<a id = "analysisBtn" class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">아이템 빌드가 필요하신가요?</a>



	<h1>김동근 테스트 공간입니다.</h1>

	<div class="dropdown">
		<button id="TierDropDown" class="btn btn-secondary dropdown-toggle"
			type="button" data-bs-toggle="dropdown" aria-expanded="false"
			onclick="javascript:choice(this.id)">티어 선택</button>
		<ul class="dropdown-menu">
			<li>
				<a id="iron" onclick="javascript:choiceTier(this.id)" class="dropdown-item" href="#">
				<img src="../img/tier/iron.png" style="width: 30px; height: 30px;">아이언</a>
			</li>
			<li>
				<a id="bronze" onclick="javascript:choiceTier(this.id)" class="dropdown-item" href="#">
				<img src="../img/tier/bronze.png" style="width: 30px; height: 30px;">브론즈</a>
			</li>
			<li>
				<a id="silver" onclick="javascript:choiceTier(this.id)" class="dropdown-item" href="#">
				<img src="../img/tier/silver.png" style="width: 30px; height: 30px;">실버</a>
			</li>
			<li>
				<a id="gold" onclick="javascript:choiceTier(this.id)" class="dropdown-item" href="#">
				<img src="../img/tier/gold.png" style="width: 30px; height: 30px;">골드</a>
			</li>
			<li>
				<a id="platinum" onclick="javascript:choiceTier(this.id)" class="dropdown-item" href="#">
				<img src="../img/tier/platinum.png" style="width: 30px; height: 30px;">플래티넘</a>
			</li>
			<li>
				<a id="emerald" onclick="javascript:choiceTier(this.id)" class="dropdown-item" href="#">
				<img src="../img/tier/emerald.png" style="width: 30px; height: 30px;">에메랄드</a>
			</li>
			<li>
				<a id="diamond" onclick="javascript:choiceTier(this.id)" class="dropdown-item" href="#">
				<img src="../img/tier/diamond.png" style="width: 30px; height: 30px;">다이아몬드</a>
			</li>
			<li>
				<a id="master" onclick="javascript:choiceTier(this.id)" class="dropdown-item" href="#">
				<img src="../img/tier/master.png" style="width: 30px; height: 30px;"> 마스터+</a>
			</li>
		</ul>
		<button id="CoreItemDropDown"
			class="btn btn-secondary dropdown-toggle" type="button"
			data-bs-toggle="dropdown" aria-expanded="false"
			onclick="javascript:choice(this.id)">아이템 코어 선택</button>
		<ul class="dropdown-menu">
			<li id="dropdownLi"><a id="firstCore" onclick="javascript:choiceCore(this.id)"
				class="dropdown-item" href="#">1코어 아이템</a></li>
			<li id="dropdownLi"><a id="secondCore" onclick="javascript:choiceCore(this.id)"
				class="dropdown-item" href="#">2코어 아이템</a></li>
			<li id="dropdownLi"><a id="thirdCore" onclick="javascript:choiceCore(this.id)"
				class="dropdown-item" href="#">3코어 아이템</a></li>
		</ul>
	</div>
	<button id="analysis_btn" class="analysis_btn" onclick="javascript:analy()">조회</button>
	<p>전설 아이템을 3개 이상 구매한 유저들의 아이템 통계입니다!</p>
	<div class="coreItemList_box" style="background-color: lightgray; color: white; width: 1100px; height: 2000px;">

	</div>

<%@include file="../inc/footer.jsp"%>

</body>
<script defer src="../js/kdg/item/itemInfo.js" /></script>

<script defer src="../js/kdg/item/itemToolTip.js" /></script>

<script defer src="../js/kdg/item/itemBuild.js" /></script>

</html>