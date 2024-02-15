
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>김진문</title>
<!-- css들어갈자리  -->
<link href="/css/kjm/kjm.css" rel="stylesheet" type="text/css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<script
	src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
	integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
	integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa"
	crossorigin="anonymous"></script>

<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-2.1.4.js"></script>

</head>

<body>

	<%@include file="../inc/header2.jsp"%>
	<div id="div1" style="height: 1500px; background: whitesmoke;">
		<nav class="navbar bg-body-tertiary,nav c">
			<div class="container-fluid" id=Sform>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search"
						aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</nav>
		<div class="container" id="container1">
			<!-- Content here -->
			<div class="header-profile-info" id="header-profile-info">
				<div class="profile-icon" id="profile-icon"></div>
				<div class="profile-name" id="profile-name">
					<p class="h1" id="lolusername">
						고길동 <small class="text-body-secondary">#검성</small>
					</p>
				</div>
				<div class="content" id="tierbox">
					<div class="tierimage" id="tierimage">티어이미지</div>
					<div class="tier-info-box" id="tier-info">
						<div class="tiername" id="tiername">티어이름</div>
						<div class="lp" id="lp">lP</div>
					</div>
					<div class="win-lose-box" id="win-lose-box">
						<div class="win-lose" id="win-lose">109승57패</div>
						<div class="winning-percentage" id="winning-percentage">65.66%</div>
					</div>

				</div>
			</div>
			<div class="container" id="chartandmsg">
				<div id="chart">차트</div>
				<div id="img">img</div>
				<div id="msg">msg</div>
			</div>
			<div class="container" id="matches">
				<div class="container text-center">
					<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
						<div class="col">승패</div>
						<div class="col">챔피언</div>
						<div class="col">KDA</div>
						<div class="col">자세히보기</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="sideBanner" id="sideBanner1">
		<span class="txt-label"> Banner Data... </span>
	</div>
	<div class="sideBanner" id ="sideBanner2" >
		<span class="txt-label"> Banner Data... </span>
	</div>


	<%@include file="../inc/footer.jsp"%>

	<!-- js들어갈자리  -->

	<script defer src="/js/aCommon/common.js"></script>
	<script defer src="/js/kjm/searchId.js"></script>
	<script defer src="/js/kjm/kjm.js"></script>
	<script defer src="/js/kjm/Banner/banner.js"></script>

</body>


</html>