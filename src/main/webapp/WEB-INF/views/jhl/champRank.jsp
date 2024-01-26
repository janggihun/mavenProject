<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
</head>
<body>
	<%@include file="../inc/header.jsp"%>
	<!-- <div style="height: 1000px; background: lightpink;"> -->
	<!-- <h1>정혜린 페이지 입니다.내용 미정</h1> -->
	<!-- <div> -->
<h1>css 수정하기</h1>
	<div class="contents">



		<div class="aside left">여백</div>
		<div class="contentsItems">
			<div class="contentsItem Search">
				<div class="search_c">
					<input type="text" id="champSearch" placeholder="search">
					<img
						alt="제작자: Ayub Irawan - Flaticon "
						src="/img/jhl/free-icon-magnifier-2319177.png" width="30px"
						height="30px">
				</div>
				<div>탑 / 정글 / 미들 /바텀 / 서폿</div>
				<div>css 재정리하기// 고정 필요</div>
				<div class="champImgItems">
					<div class="se A">
						<div class="se_a">
							<span>ss</span>
						</div>
						<div class="champs 1">
							<c:forEach var="champImg" items="${champListImg1}">
								<div class="champImgItem">
									<div class="cimgs A">
										<img width="48" height="48" alt="${champImg.champion_name_kr}"
											src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
											class="championImg">
									</div>
									<span class="champName">${champImg.champion_name_kr}</span>
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