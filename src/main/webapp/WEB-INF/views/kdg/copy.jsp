
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- champ choice js 들어갈곳 -->
<script defer src="../js/kdg/champion/champChoice.js"/></script>
<meta charset="UTF-8">
<title>챔피언 분석</title>


<!-- kdg css 들어갈곳 -->
<link rel = "stylesheet" href ="../css/kdg/kdg.css"/>


</head>
<body>
	<%@include file="../inc/kdgheader.jsp"%>

	<!-- #3C3C41 -->
	<p id="name" style="visibility: hidden; position: absolute;"></p>
	<div class = "champs">
		<p id="myChampName" style="visibility: hidden; position: absolute;"></p>
		<p id="enemyChampName" style="visibility: hidden; position: absolute;"></p>
		<p id="lineCheck" style="visibility: hidden; position: absolute;"></p>
		<p id="tierCheck" style="visibility: hidden; position: absolute;"></p>
	</div>
	
	
	<div style="height: 2000px; background: white;">
		<p id="name" style="visibility: hidden; position: absolute;"></p>
		<div class="champs">
			<p id="myChampName" style="visibility: hidden; position: absolute;"></p>
			<p id="enemyChampName"
				style="visibility: hidden; position: absolute;"></p>
			<p id="lineCheck" style="visibility: hidden; position: absolute;"></p>
		</div>
		<!-- <h1>김동근 페이지 입니다.</h1> -->

		<div class="container" id="container">
			<div class="header" id="header">
				<div id="ex">
					<div id="champbox">
						<div id="champimgbox">
							<div id="myChampion" class = "champimg1">
								<img id = "myChamp" onclick="javascript:champ(this.id)" src = "../img/champ.jpg"></img>
							</div>
							<div id="vs">
								<img src="../img/versus.png"></img>
							</div>
							<div id = "enemyChampion" class="champimg2">
								<img id = "enemyChamp" onclick="javascript:champ(this.id)" src = "../img/champ.jpg"></img>
							</div>
						</div>
						<div id="champnamebox">
							<div id="champname1">
								내 챔피언
							</div>
							<div id="gongback"></div>
							<div id="champname2">
								내가 상대할 챔피언
							</div>
						</div>
					</div>
					<div id="box">
						<div id="ex1">
							<h4>챔피언 분석 페이지 입니다.</h4>
							<p id = "info22">아이템 버전 : 14.01, 설정 티어 : platinum <img src="../img/tier/platinum.png" style = "width: 30px; height: 30px;"></img>라인 : all</p>
							내가 상대할 챔피언과의 매치에서 가장 승률이 높은 아이템 빌드를 확인해보세요!
						</div>
						<div id="searchbox">
							<div class="searchbox" id="search">
								<input type="text" id="searchChamp" name="searchChamp" placeholder="ex) 가렌, garen, ㄱㄹ...">
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
						</div>
					</div>
				</div>
				
					<div class = "mid-header">
						<button id="anBtn">분석하기</button>
						<button class = "tier" id = "iron" onclick="tier(this.id)">
							<img src="../img/tier/iron.png" style = "width: 30px; height: 30px;"> 아이언
						</button>					
						<button class = "tier" id = "bronze" onclick="tier(this.id)">
							<img src="../img/tier/bronze.png" style = "width: 30px; height: 30px;"> 브론즈
						</button>					
						<button class = "tier" id = "silver" onclick="tier(this.id)">
							<img src="../img/tier/silver.png" style = "width: 30px; height: 30px;"> 실버
						</button>					
						<button class = "tier" id = "gold" onclick="tier(this.id)">
							<img src="../img/tier/gold.png" style = "width: 30px; height: 30px;"> 골드
						</button>					
						<button class = "tier" id = "platinum" onclick="tier(this.id)">
							<img src="../img/tier/platinum.png" style = "width: 30px; height: 30px;"> 플래티넘
						</button>					
						<button class = "tier" id = "emerald" onclick="tier(this.id)">
							<img src="../img/tier/emerald.png" style = "width: 30px; height: 30px;"> 에메랄드
						</button>					
						<button class = "tier" id = "diamond" onclick="tier(this.id)">
							<img src="../img/tier/diamond.png" style = "width: 30px; height: 30px;"> 다이아몬드
						</button>					
						<button class = "tier" id = "master" onclick="tier(this.id)">
							<img src="../img/tier/master.png" style = "width: 30px; height: 30px;"> 마스터
						</button>					
						<button class = "tier" id = "grandmaster" onclick="tier(this.id)">
							<img src="../img/tier/grandmaster.png" style = "width: 30px; height: 30px;"> 그랜드마스터
						</button>					
						<button class = "tier" id = "challenger" onclick="tier(this.id)">
							<img src="../img/tier/challenger.png" style = "width: 30px; height: 30px;"> 챌린저
						</button>					
					</div>
				
				
				<div class="box" id="champListbox">
					<div id="champList">
						<ul>
							<c:forEach var="cham" items="${list}">
								<li><img id="${cham.champion_name}"
									src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${cham.champion_name}.png"
									width="77" height="77" alt="${cham.champion_name}"
									class="bg-image" onclick="javascript:submit(this.id)"> <span>${cham.champion_name_kr}</span>
								</li>
							</c:forEach>
						</ul>
					</div>
				</div>


				</div>


			</div>
		
			<div id="enemyChampion">
				<img onclick="javascript:champ(this.id)" src="../img/champ.jpg" id="enemyChamp"></img>
			</div>
			
		</div>
		
<!-- 		<div style="width: 300px; height: 1000px; display: flex; background-color: #ffffff;"></div> -->
		
		<div class = "searchBox">
			<input type="text" id="searchChamp" name="searchChamp" placeholder="ex) 가렌, garen, ㄱㄹ...">
			<img id="top" class="positionICN" src="../img/top.png" name="top" onclick="line(this.id)">
			<img id="jug" class="positionICN" src="../img/jug.png" name="jug" onclick="line(this.id)">
			<img id="mid" class="positionICN" src="../img/mid.png" name="mid" onclick="line(this.id)">
			<img id="adc" class="positionICN" src="../img/adc.png" name="adc" onclick="line(this.id)">
			<img id="sup" class="positionICN" src="../img/sup.png" name="sup" onclick="line(this.id)">		
		</div>
		<div id="champList">
			<ul>
				<c:forEach var="cham" items="${list}">
					<li>
						<img id="${cham.champion_name}" src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${cham.champion_name}.png"
							width="77" height="77" alt="${cham.champion_name}" class="bg-image" onclick="javascript:submit(this.id)">
						<span>${cham.champion_name_kr}</span>
					</li>
				</c:forEach>
			</ul>
		</div>
		
		<div class = "info">
			
		</div>
		
	</div>
	
	<%@include file="../inc/footer.jsp"%>
<!-- champ list (ajax) js 들어갈곳 -->
<script defer src="../js/kdg/champion/champList.js"/></script>

<!-- item build (ajax) js 들어갈곳 -->
<script defer src="../js/kdg/item/itemBuild.js"/></script>

</body>

</html>