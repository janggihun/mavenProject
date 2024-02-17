<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta charset="UTF-8">    
<title>아이템 분석</title>

<!-- 숨겨놓은 p tag 모음 -->
<p id="name" style="visibility: hidden; position: absolute;"></p>
<div class = "champs" style="visibility: hidden; position: absolute;">
	<p id="myChampName" style="visibility: hidden; position: absolute;"></p>
	<p id="enemyChampName" style="visibility: hidden; position: absolute;"></p>
	<p id="lineCheck" style="visibility: hidden; position: absolute;"></p>
	<p id="tierCheck" style="visibility: hidden; position: absolute;"></p>
</div>
<p id="selectMenu" style="visibility: hidden; position: absolute;"></p>	
<p id="tier_en" style="visibility: hidden; position: absolute;">platinum</p>
<p id="tier_en_Modal" style="visibility: hidden; position: absolute;">platinum</p>
<p id="selectTier" style="visibility: hidden; position: absolute;">플래티넘</p>
<p id="selectTierModal" style="visibility: hidden; position: absolute;">플래티넘</p>
<p id="selectCore" style="visibility: hidden; position: absolute;">1코어 아이템</p>
<p id="modNum" style="visibility: hidden; position: absolute;">0</p>
<p id="graph_line" style="visibility: hidden; position: absolute;">top</p>


<div class = "darkmod_checkbox">
	<div class = "toggle_box">
		<input type="checkbox" id="toggle" class ="darkmod_toggle" hidden> 
		
		<label for="toggle" class="toggleSwitch">
		  <span class="toggleButton"></span>
		</label>
	</div>
	<div class = "TS_name_box">
		<p>다크모드</p>
	</div>
</div>

<div class = "comm_graph_title">
	<div class = "comm_title">
		<p> 라인 별 Best Pick
	</div>
	
	<div class = "graph_title">
		<div class = "graph_title1">
			<p> 라인 별 TOP5 Items
		</div>
		<div class = "graph_line">
			<div id = "lineDropdown">
				<div class='dropdown1'>
					<button id='lineDropdown_btn' class='btn btn-secondary dropdown-toggle line-select' type='button' data-bs-toggle='dropdown' aria-expanded='false'>라인 선택</button>
					<ul class='dropdown-menu'>
						<li>
							<a id='top' onclick='javascript:choiceLineGraph(this.id)' class='dropdown-item'>
							<img src='../img/top.png' style='width: 20px; height: 20px;'> 탑</a>
						</li>
						<li>
							<a id='jug' onclick='javascript:choiceLineGraph(this.id)' class='dropdown-item'>
							<img src='../img/jug.png' style='width: 20px; height: 20px;'> 정글</a>
						</li>
						<li>
							<a id='mid' onclick='javascript:choiceLineGraph(this.id)' class='dropdown-item'>
							<img src='../img/mid.png' style='width: 20px; height: 20px;'> 미드</a>
						</li>
						<li>
							<a id='adc' onclick='javascript:choiceLineGraph(this.id)' class='dropdown-item'>
							<img src='../img/adc.png' style='width: 20px; height: 20px;'> 원딜</a>
						</li>
						<li>
							<a id='sup' onclick='javascript:choiceLineGraph(this.id)' class='dropdown-item'>
							<img src='../img/sup.png' style='width: 20px; height: 20px;'> 서폿</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class = "graph_title2">
			<p> 상위 5개 아이템,&nbsp;<br>전체 티어 기준입니다.
		</div>
	</div>
</div>
<br>
<div class = "comm_graph_box">

	<div class = "comm_box">
	
		<div class = "comm_firstChamp">
			<div class = "comm_firstChamp_imgbox">
				<div class = "comm_firstChamp_img"></div>
			</div>
		</div>
		
		<div class = "comm_secondChamp">
			<div class = "comm_secondChamp_imgbox">
				<div class = "comm_secondChamp_img"></div>
			</div>
		</div>
		
		<div class = "comm_thirdChamp">
			<div class = "comm_thirdChamp_imgbox">
				<div class = "comm_thirdChamp_img"></div>			
			</div>
		</div>
		
	</div>
	
	<div class = "graph_box">
		<div id = "chart"></div>
	</div>


</div>
<br>
<br>

<div class="coreItemList_box" style="background-color: lightgray; color: white; width: 1100px; height: 1549px;">

</div>

<div class="sideBanner">
  <a data-bs-toggle="modal" href="#exampleModalToggle" onclick='javascript:test()'><img class = "bannerImg" src="../img/kdg/kdgBanner.jpg"></a>
  <span class="txt-label banner_span_txt">
    <a id = "analysisBtn" class="btn btn-primary banner_to_modalBtn" data-bs-toggle="modal" href="#exampleModalToggle" role="button" style = "width: 150px;" onclick='javascript:test()'>get Item Build</a>
  </span>
</div>