<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@include file="../inc/header.jsp"%>
	<!-- <div style="height: 1000px; background: lightpink;"> -->
	<!-- <h1>정혜린 페이지 입니다.내용 미정</h1> -->
	<!-- <div> -->


	<div class="contents">



		<div class="aside left">여백</div>
		<div class="contentsItems">
			<div class="contentsItem Search">
				<div class="champImgItems">
					<div class="se A">
						<div class="se_a">
							<span>ㄱ</span>
						</div>
						<div class="champs 1">
							<c:forEach var="champImg" items="${champListImg1}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se B">
						<div class="se_b">
							<span>ㄴ</span>
						</div>
						<div class="champs 2">
							<c:forEach var="champImg" items="${champListImg2}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se C">
						<div class="se_c">
							<span>ㄷ</span>
						</div>
						<div class="champs 3">
							<c:forEach var="champImg" items="${champListImg3}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se D">
						<div class="se_d">
							<span>ㄹ</span>
						</div>
						<div class="champs 4">
							<c:forEach var="champImg" items="${champListImg4}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se E">
						<div class="se_e">
							<span>ㅁ</span>
						</div>
						<div class="champs 5">
							<c:forEach var="champImg" items="${champListImg5}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se F">
						<div class="se_f">
							<span>ㅂ</span>
						</div>
						<div class="champs 6">
							<c:forEach var="champImg" items="${champListImg6}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se G">
						<div class="se_g">
							<span>ㅅ</span>
						</div>
						<div class="champs 7">
							<c:forEach var="champImg" items="${champListImg7}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>


					<div class="se H">
						<div class="se_h">
							<span>ㅇ</span>
						</div>
						<div class="champs 8">
							<c:forEach var="champImg" items="${champListImg8}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se I">
						<div class="se_i">
							<span>ㅈ</span>
						</div>
						<div class="champs 9">
							<c:forEach var="champImg" items="${champListImg9}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se J">
						<div class="se_j">
							<span>ㅊ</span>
						</div>
						<div class="champs 10">
							<c:forEach var="champImg" items="${champListImg10}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>

					<div class="se K">
						<div class="se_k">
							<span>ㅋ</span>
						</div>
						<div class="champs 11">
							<c:forEach var="champImg" items="${champListImg11}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se L">
						<div class="se_l">
							<span>ㅌ</span>
						</div>
						<div class="champs 12">
							<c:forEach var="champImg" items="${champListImg12}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>

					<div class="se M">
						<div class="se_m">
							<span>ㅍ</span>
						</div>
						<div class="champs 13">
							<c:forEach var="champImg" items="${champListImg13}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
					<div class="se N">
						<div class="champs 14">
							<div class="se_n">
								<span>ㅎ</span>
							</div>
							<c:forEach var="champImg" items="${champListImg14}">
								<div class="champImgItem">
									<img width="48" height="48" alt="${champImg.champion_name_kr}"
										src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
										class="championImg"> <span class="champName">${champImg.champion_name_kr}</span>
								</div>
							</c:forEach>
						</div>
					</div>
				</div>
			</div>
			<div class="contentsItem LineRank">

				<div class="LineB">
					<button class="seletB Top">탑</button>
					<button class="seletB Jug">정글</button>
					<button class="seletB Mid">미들</button>
					<button class="seletB Bot">바텀</button>
					<button class="seletB Sup">서폿</button>
				</div>
				<div>랭킹 / 챔피언 / 승률 / 픽률 table 만들 예정</div>
				<div>라인별 (승률/픽률 등)랭크 테이블</div>
			</div>
		</div>


		<div class="aside right">여백</div>
	</div>

	<%@include file="../inc/footer.jsp"%>
</body>
</html>