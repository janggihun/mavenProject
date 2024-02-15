
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

</head>

<body>

	<%@include file="../inc/header2.jsp"%>
	<div style="height: 1000px; background: whitesmoke;">
		<div class="header" id="characterclass">
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">

				<div class="col">
					<img id="tanker" class="positionICN" src="../img/kjm/tanker.jpg"
						name="tanker" onclick="">
				</div>
				<div class="col">
					<img id="warrior" class="positionICN" src="../img/kjm/warrior.jpg"
						name="warrior" onclick="">
				</div>
				<div class="col">
					<img id="assassin" class="positionICN"
						src="../img/kjm/assassin.jpg" name="assassin" onclick="">
				</div>
				<div class="col">
					<img id="ap" class="positionICN" src="../img/kjm/ap.jpg" name="ap"
						onclick="">
				</div>
				<div class="col">
					<img id="ad" class="positionICN" src="../img/kjm/ad.jpg" name="ad"
						onclick="">
				</div>
				<div class="col">
					<img id="support" class="positionICN" src="../img/kjm/support.jpg"
						name="support" onclick="">
				</div>
			</div>
		</div>
		<div class="container" id="itemlist">
			<div>
				<div id = "itemTitle1">me</div>
				<div id = "itemTitle2">opponent</div>
			</div>
			<div>
				<div id = "itemImage1">myItemImage</div>
				<div id = "itemImage2">opponentItemImage</div>
			</div>
		</div>
	</div>
	<%@include file="../inc/footer.jsp"%>

	<!-- js들어갈자리  -->

	<script defer src="/js/aCommon/common.js"></script>
	<script defer src="/js/kjm/searchId.js"></script>

</body>


</html>