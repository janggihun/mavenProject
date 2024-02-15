<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta charset="UTF-8">

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
					<div class="img" id="allimg">
						<img id="all" class="positionICN" src="../img/all.png"
							name="all" onclick="line(this.id)">

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
			<div id = "selectTier_modal" style = "display: none;">
				<div class='dropdown'>
					<button id='TierDropDownModal' class='btn btn-secondary dropdown-toggle modalTier' type='button' data-bs-toggle='dropdown' aria-expanded='false'>티어 선택</button>
						<ul class='dropdown-menu'>
							<li>
								<a id='iron' onclick='javascript:choiceTierModal(this.id)' class='dropdown-item' href='#'>
								<img src='../img/tier/iron.png' style='width: 30px; height: 30px;'>아이언</a>
							</li>
							<li>
								<a id='bronze' onclick='javascript:choiceTierModal(this.id)' class='dropdown-item' href='#'>
								<img src='../img/tier/bronze.png' style='width: 30px; height: 30px;'>브론즈</a>
							</li>
							<li>
								<a id='silver' onclick='javascript:choiceTierModal(this.id)' class='dropdown-item' href='#'>
								<img src='../img/tier/silver.png' style='width: 30px; height: 30px;'>실버</a>
							</li>
							<li>
								<a id='gold' onclick='javascript:choiceTierModal(this.id)' class='dropdown-item' href='#'>
								<img src='../img/tier/gold.png' style='width: 30px; height: 30px;'>골드</a>
							</li>
							<li>
								<a id='platinum' onclick='javascript:choiceTierModal(this.id)' class='dropdown-item' href='#'>
								<img src='../img/tier/platinum.png' style='width: 30px; height: 30px;'>플래티넘</a>
							</li>
							<li>
								<a id='emerald' onclick='javascript:choiceTierModal(this.id)' class='dropdown-item' href='#'>
								<img src='../img/tier/emerald.png' style='width: 30px; height: 30px;'>에메랄드</a>
							</li>
							<li>
								<a id='diamond' onclick='javascript:choiceTierModal(this.id)' class='dropdown-item' href='#'>
								<img src='../img/tier/diamond.png' style='width: 30px; height: 30px;'>다이아몬드</a>
							</li>
						</ul>
					</div>
			</div>
	      	<div id="itemBuild"  style = "display: none;">
	      	
	      	</div>
		</div>
      <div id = "btnDiv" class="modal-footer">
        <button id = "clickBtn" class="btn btn-primary modal_clickBtn">선택 완료</button>
        <button id = "reSelectBtn" class="btn btn-primary" style = "display: none;">다시 선택</button>
      </div>
    </div>
  </div>
</div>