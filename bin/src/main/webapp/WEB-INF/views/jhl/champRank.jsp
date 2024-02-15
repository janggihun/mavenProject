<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<script defer src="js/jhl/champ/champRank.js"></script>

</head>
<body>
<h1>rank 테이블 Test 용, 데이터 다시 받아서 수정할 예정</h1>
<div class="tooltip" id="tooltip">Champion Name</div>
	<div class="contentsRank">
		<div class="aside left"></div>
		<div class="contentsItemsChamp">
			<%@include file="champImg.jsp"%>
			<div class="contentsItem LineRank">
				<div
					style="text-align: center; height: 60px; border: 1px solid #8CB9FC; display: flex; align-items: center; margin-bottom: 10px; justify-content: center">
					챔피언 랭킹 <select id="rankSelect">
						<option value="Emerald+" id ="Emerald">Emerald+
						<option value="Diamond+">Diamond+
					</select>
						
<!-- 						<option value="Master+">Master+ -->
<!-- 						<option value="Challenger+">Challenger+ -->
				</div>

				<div class="rankTable">
					<div class="rankLine">
						<div class="rankSearch ranklineBtn">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Top.png" id="Top"
								onclick="champRank(this.id)">탑</span>
						</div>
						<div class="rankSearch">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Jungle.png" id="JUNGLE"
								onclick="champRank(this.id)">정글</span>
						</div>
						<div class="rankSearch">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Mid.png" id="MIDDLE"
								onclick="champRank(this.id)">미들</span>
						</div>
						<div class="rankSearch">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Bot.png" id="BOTTOM"
								onclick="champRank(this.id)">바텀</span>
						</div>
						<div class="rankSearch">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Support.png"
								id="UTILITY" onclick="champRank(this.id)">서폿</span>
						</div>
					</div>
					<div class="lineRank">
						<div class="rankItems">
							<table class="Rankable">
							<colgroup>
							<col width="40%">
							<col width="30%">
							<col width="30%">

							</colgroup>
								<thead>
									<tr class="tableColumns">
										<th><span>챔피언</span></th>
										<th><span>승률</span></th>
										<th><span>픽률</span></th>
									</tr>
								</thead>
								<tbody class ="rTableBody">
									<tr class="rTable">
										<td class="rData"></td>
										<td class="rData"></td>
										<td class="rData"></td>

									</tr>
								</tbody>
							</table>
						</div>
					</div>

					

				</div>
			</div>

		</div>
		<div class="aside right"></div>
	</div>


</body>


</html>