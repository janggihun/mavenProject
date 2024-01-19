
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">
	function champ(a) {
		var idName = a;
		
		$('#anBtn').hide();
		$('#champList').show();
		$('#searchChamp').show();
		$('.positionICN').show();
		$('#itemList').hide();
		$('#searchChamp').val('');
		
		$('#name').html(a);	
	}

	function submit(b) {
		var a = $('#name').text();
		var champName = b;
		var c = a + 'ion';
		var d = a + 'Name';
		
		let str1 = '<img onclick="javascript:champ(this.id)" id=';
		let str2 = ' src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/';
		let str3 = '.png">';
		let str = str1 + a + str2 + b + str3;

		$('#' + c).html(str);
		$('#' + d).html(b);
		$('#champList').hide();
		$('#searchChamp').hide();
		$('.positionICN').hide();
		
		if($('#myChampName').text() != ''){
			if($('#enemyChampName').text() != ''){
				$('#anBtn').show();
			}
		}
	}
</script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<meta charset="UTF-8">
<title>챔피언 분석</title>

<style type="text/css">
* {
    cursor: url(../img/normal.png) 2 2, auto;
}

#myChampion {
	width: 50%;
	height: 500px;
	float: left;
	position: relative;
}

#enemyChampion {
	width: 50%;
	height: 500px;
	float: right;
	position: relative;
}

#myChampion #myChamp {
	border-radius: 50%;
	border: 1px solid black;
	width: 300px;
	height: 300px;
	position: absolute;
	top: 50%;
	left: 60%;
	transform: translate(-50%, -50%);
	
	cursor: url(../img/unavailable.png) 2 2, auto;
	
	z-index: 1;
}

#enemyChampion #enemyChamp {
	border-radius: 50%;
	border: 1px solid black;
	width: 300px;
	height: 300px;
	position: absolute;
	top: 50%;
	right: 35%;
	transform: translate(-50%, -50%);
	
	cursor: url(../img/unavailable.png) 2 2, auto;
}

#versus {
	position: absolute;
	top: 40%;
	left: 46.2%;
	font-size: 100px;
}

#champList::-webkit-scrollbar, body::-webkit-scrollbar, #itemList::-webkit-scrollbar {
	width: 8px;
}
#champList::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb, #itemList::-webkit-scrollbar-thumb {
	height: 3px;
	background: #785A28;
	
	border-radius: 15px;
}
#champList::-webkit-scrollbar-track, body::-webkit-scrollbar-track, #itemList::-webkit-scrollbar-track {
	background: rgba(33, 122, 244, .1);
}


#champList {
	padding: 20px 20px 20px 20px;

	background-color: #091428;
	color: #C8AA6E;
	
	top: 60px;
	
	width: 78%;
	height: 800px;
	
	display: none;
	
	overflow: scroll;
	float: left;
	
	margin-left: 200px;
}

#itemList {
	padding: 0px 20px 20px 20px;

	background-color: #091428;
	color: #C8AA6E;

	top: 60px;
	
	
	width: 78%;
	height: 800px;
	
	display: none;
	
	overflow: scroll;
	float: left;
	
	margin-left: 200px;
}

li {
	position: relative;
	width: 84px;
	height: 84px;
	float: left;
	padding: 1px;
	margin-left: 10px;
	margin-bottom: 30px;
	cursor: pointer;
}

ul {
	list-style: none;
	height: 500px;
	padding-inline-start: 10px;
}

span {
	display: block;
	width: 72px;
	line-height: 14px;
	font-size: 16px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-top: 2px;
	height: 16px;
	text-align: center;
}

.searchBox #searchChamp {
	display: none;
	
	color: #C8AA6E;
	margin: 10px 10px 10px 0px;
	background-color: #091428;
	padding-left: 30px;
	outline: none;
}

.searchBox{
	width: 650px;
	height: 60px;
	
	cursor: url(../img/normal.png) 2 2, auto;
	
	margin-left: 217px;
}

.searchBox input[type=text] {
	width: 300px;
	height: 40px;
	font-size: 16px;
	
	outline: none;
	border-radius: 15px;
	
	cursor: auto;
}

img:hover {
	-webkit-transform: scale(1.4);
	transform: scale(1.4);
}


.champs #anBtn {
	width: 300px;
	height: 40px;
	font-size: 16px;
	
	outline: none;
	border-radius: 15px;
	
	cursor: auto;
	display: none;
	
	position: absolute;
	
	left: 41%;
	top: 650px;
}

.searchBox .positionICN {
	display: none;
	margin: 5px;
	
	cursor: url(../img/unavailable.png) 2 2, auto;
}

#champs {
	width: 100%;
	height: 500px;
}


</style>

</head>
<body>
	<%@include file="../inc/header.jsp"%>
	<div style="height: 2000px; background: #3C3C41;">
		<p id="name" style="visibility: hidden; position: absolute;"></p>
		<div class = "champs">
				<p id="myChampName" style="visibility: hidden; position: absolute;"></p>
				<p id="enemyChampName" style="visibility: hidden; position: absolute;"></p>
				<button id = "anBtn">분석하기</button>
		</div>
		<!-- <h1>김동근 페이지 입니다.</h1> -->
		<div id="champs">
			<div id="myChampion">
				<img onclick="javascript:champ(this.id)" src="../img/champ.jpg" id="myChamp"></img>
			</div>
		
			<div id="enemyChampion">
				<img onclick="javascript:champ(this.id)" src="../img/champ.jpg" id="enemyChamp"></img>
			</div>
			<h1 id="versus">vs</h1>
		</div>
		
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
		<div id="itemList">
			
		</div>
		
	</div>
	
	<%@include file="../inc/footer.jsp"%>
<script type="text/javascript">
	$(document).ready(function() {
		$("#searchChamp").keyup(function() {
			
			$('#champList').empty();
			let cn = $('#searchChamp').val()
			data = {
				"searchChamp" : cn
			}
			
			$.ajax({
				type : "POST",
				url : "/kdg/search",
				data : data,
				success : function(res) {
					
					str1 = "<ul>"
					str2 = ''
							for (let i = 0; i < res.length; i++){
								str2 += "<li><img id='"+res[i].champion_name+"' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].champion_name+".png'"
								str2 += "width='72' height='72' alt='"+res[i].champion_name+"' class='bg-image' onclick='javascript:submit(this.id)'>"
								str2 +=	"<span>"+res[i].champion_name_kr+"</span></li>"
								}
					str3="</ul>"
					
					$('#champList').html(str1 + str2 + str3)
				}
			})
		});
	});
	
	function line(a){
		
		console.log(a);
		
		$('#champList').empty();
		data = {
			"line" : a
		}
	 	$.ajax({
			type : "POST",
			url : "/kdg/position",
			data : data,
			success : function(res) {	
				
				console.log(res);
				
				str1 = "<ul>"
				str2 = ''
						for (let i = 0; i < res.length; i++){
								str2 += "<li><img id='"+res[i].champion_name+"' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].champion_name+".png'"
								str2 += "width='72' height='72' alt='"+res[i].champion_name+"' class='bg-image' onclick='javascript:submit(this.id)'>"
								str2 +=	"<span>"+res[i].champion_name_kr+"</span></li>"
							}
				str3="</ul>"
						
				$('#champList').html(str1 + str2 + str3)
			}
		})
	}
	
	$(document).ready(function() {
		$("#anBtn").click(function() {
			
			var a = $('#myChampName').text();
			var b = $('#enemyChampName').text();
			
			console.log(a);
			console.log(b);
			
			$.ajax({
				type : "POST",
				url : "/kdg/item",
				success : function(res) {							
					console.log(res);
					console.log(res[0].item_num);
					console.log(res[0].item_name);
					
					str1 = "<ul>"
					str2 = ''
							for (let i = 0; i < res.length; i++){
								str2 += "<li><img id='"+res[i].item_num+"' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[i].item_num+".png'"
								str2 += "width='72' height='72'>"
								str2 +=	"<span>"+res[i].item_name+"</span></li>"
								}
					str3="</ul>"
						
					$('#itemList').html(str1 + str2 + str3);
					$('#itemList').show();
					$('#anBtn').hide();
				}
			})
			
		});
	});	
	
</script>
</body>



</html>