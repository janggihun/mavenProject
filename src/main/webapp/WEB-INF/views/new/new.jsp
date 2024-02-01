
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML>
<head>
<title>데이터붐</title>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, user-scalable=no" />
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<link rel="stylesheet" href="new/assets/css/main.css" />
<link rel="stylesheet" href="new/assets/css/div.css" />
<link rel="stylesheet" href="new/assets/css/kdg.css" />
<link rel="stylesheet" href="new/assets/css/jhl.css" />






</head>
<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Header -->
		<header id="header" class="alt">


			<img class = "mainlogo" id = "mainlogo" src = "../img/kjm/logo3.gif">
		</header>
		<span class="logo"><img src="images/logo.svg" alt="" /></span>
		<h1 align="center">태민이 검색바</h1>



		<!-- 			송태민시작 -->

		<div class="tcontainer">
			<div class="tleft">
				<input type="text" id="gameName" name="gameName" placeholder="아이디"
					value="깡통차기국내1위">
			</div>
			<div class="tcenter">
				<input type="text" id="tagLine" name="tagLine" placeholder="태그"
					value="KR1">
			</div>
			<div class="tright">
				<input type="button" id="getpuuid" value="검색">

			</div>
		</div>

		<p></p>



		<!-- 			송태민끝 -->




		<!-- Nav -->
		<nav id="nav">
			<ul>
				<li><a href="/jgh" class="active">장기훈</a></li>
				<li><a href="/kdg">김동근</a></li>
				<li><a href="/kjm">김진문</a></li>
				<li><a href="/stm">송태민</a></li>
				<li><a href="/kyt">김윤태</a></li>
				<li><a href="/jhl">정혜린</a></li>
				<li><a href="/admin">관리자용</a></li>
			</ul>
		</nav>

		<!-- Main -->
		<div id="main">
			<!-- 						 Introduction -->

			<!-- 						<section id="intro" class="main"> -->


			<!-- 							<div class = "firstSection"> -->

			<!-- 								ggg -->


			<!-- 							</div> -->


			<!-- 						</section>  -->

			<!-- 						First Section -->

			<section id="first" class="main special">
				<header class="major">

					<%@include file="layout.jsp"%>
				</header>
				<ul class="features">

				</ul>

			</section>

			Get Started

			<section id="cta" class="main special">
				<header class="major">
					<h2>추가내용</h2>

				</header>

			</section>


			<button type="button" onclick="alert('변경바람')">
				<img class = "buttonimg" src="../img/kjm/buttonimg.jpg" />
			</button>






		</div>
		<footer id="footer">
			<section>
				<h2>데이터붐</h2>
				<p>장기훈 김동근 김진문 김윤태 송태민 정혜린</p>
				<ul class="actions">
					<li><a href="generic.html" class="button">Learn More</a></li>
				</ul>
			</section>
			<section>
				<h2>더 알고 싶은거?</h2>
				<dl class="alt">
					<dt>주소</dt>
					<dd>인천시</dd>
					<dt>Phone</dt>
					<dd>(000) 000-0000 x 0000</dd>
					<dt>Email</dt>
					<dd>
						<a href="#">databoom@google.com</a>
					</dd>
				</dl>
				<ul class="icons">
					<li><a href="#" class="icon brands fa-twitter alt"><span
							class="label">Twitter</span></a></li>
					<li><a href="#" class="icon brands fa-facebook-f alt"><span
							class="label">Facebook</span></a></li>
					<li><a href="#" class="icon brands fa-instagram alt"><span
							class="label">Instagram</span></a></li>
					<li><a href="#" class="icon brands fa-github alt"><span
							class="label">GitHub</span></a></li>
					<li><a href="#" class="icon brands fa-dribbble alt"><span
							class="label">Dribbble</span></a></li>
				</ul>
			</section>
			<p class="copyright">&copy; databoom</p>
		</footer>

	</div>

	<!-- Scripts -->
	<script src="new/assets/js/jquery.min.js"></script>
	<script src="new/assets/js/jquery.scrollex.min.js"></script>
	<script src="new/assets/js/jquery.scrolly.min.js"></script>
	<script src="new/assets/js/browser.min.js"></script>
	<script src="new/assets/js/breakpoints.min.js"></script>
	<script src="new/assets/js/util.js"></script>
	<script src="new/assets/js/main.js"></script>
	<script defer src="../js/jhl/champ/champSearch.js"></script>
	<!-- champ list (ajax) js 들어갈곳 -->
	<script defer src="../js/kdg/champion/champList.js" /></script>
	<!-- item build (ajax) js 들어갈곳 -->
	<script defer src="../js/kdg/item/itemBuild.js" /></script>

	<!-- Scripts -->
	<script src="new/assets/js/jquery.min.js"></script>
	<script src="new/assets/js/jquery.scrollex.min.js"></script>
	<script src="new/assets/js/jquery.scrolly.min.js"></script>
	<script src="new/assets/js/browser.min.js"></script>
	<script src="new/assets/js/breakpoints.min.js"></script>
	<script src="new/assets/js/util.js"></script>
	<script src="new/assets/js/main.js"></script>
	<script src="new/assets/js/jhl.js"></script>
</body>
</html>
