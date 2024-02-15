<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Data Boom 듀오찾기</title>
<script
	src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
<link href="/css/jgh/button.css" rel="stylesheet" type="text/css">
<link href="/css/style.css" rel="stylesheet" type="text/css">
<link href="/css/jgh/modal.css" rel="stylesheet" type="text/css">
<link href="/css/jgh/style.css" rel="stylesheet" type="text/css">
<link href="/css/jgh/animation.css" rel="stylesheet" type="text/css">
<link href="/css/newDuo.css" rel="stylesheet">
</head>
<body>
	<%@include file="../inc/header.jsp"%>

	<div class="duoContent">
		<div class="duoTitle">
			<h1>롤 듀오 찾기</h1>
		</div>
		<div class="duoContainer">
			<div class="duoMain">


				<div class="duoSearch">
					<div class="position-icon">
						<div class="icon-img">*</div>
						<div class="icon-img">*</div>
						<div class="icon-img">*</div>
						<div class="icon-img">*</div>
						<div class="icon-img">*</div>
					</div>

					<div>
						<button id="btn-duoSearch" >Duo찾기작성</button>
					</div>
				</div>
				<div class="duoTitems">
					<div class="duoT">
						<table class="DuoTable" id = "duoboard">
							<colgroup>
								<col width="5%">
								<col width="15%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="15%">
								<col width="5%">
							</colgroup>

							<tr class="duo-th">

								<th class="duoitems dNo">번호</th>
								<th class="duoitems dName">이름</th>
								<th class="duoitems mPosition">나의 포지션</th>
								<th class="duoitems dTear">티어</th>
								<th class="duoitems dType">게임타입</th>
								<th class="duoitems yPosition">찾는 포지션</th>
								<th class="duoitems recentP">최근 챔피언</th>
								<th class="duoitems dMeno">메모</th>
								<th class="duoitems blank"></th>

							</tr>
							<tbody id = "duotbody">
								
							</tbody>



						</table>

					</div>
				</div>
			</div>
		</div>


	</div>
	
	
	<%@include file="../jgh/duoSearch/sideBar.jsp"%>

	<%@include file="../jgh/duoSearch/modal3.jsp"%>

	<%@include file="../jgh/duoSearch/modal2.jsp"%>
	<div class="accordion-box"></div>
	<!-- 본인아이디 -->
	<!-- 	채팅번호,방번호, 현재 테이블에서 누른 방번호 알수있음-->
	<input type="hidden" value="" id="rCnt" />
	<!-- 	//요청자 -->
	<input type="hidden" value="" id="guestId" />
	<!-- 	//글작성자 -->
	<input type="hidden" value="" id="hostId" />
	<!-- js들어갈자리  -->
	<script defer src="js/jgh/jsduo/duoPort.js"></script>
	<script defer src="/js/jgh/jsduo/duoChatting.js"></script>
	<script defer src="/js/jgh/jsduo/duoDeleteSave.js"></script>
	<script defer src="/js/jgh/jsduo/duoModal.js"></script>
	<script defer src="/js/jgh/jsduo/duoShow.js"></script>

	<%@include file="../inc/footer.jsp"%>
</body>
</html>