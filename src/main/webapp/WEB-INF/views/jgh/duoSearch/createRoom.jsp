<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>



<div id=duoTable class=searchDuoT>

	<h1 align="center" style = "color : white;">롤 듀오DUO 구하기</h1>
	<div align="left"></div>
	<div align="right">
		<button id="btn-modal">Duo찾기작성</button>

		<p></p>
	</div>


	<table class="table table-dark table-hover" id="modal_wrap">
		<thead>
			<tr>
				<th>번호</th>
				<th>이름</th>
				<th>나의 포지션</th>
				<th>티어</th>
				<th>게임타입</th>
				<th>찾는포지션</th>
				<th>최근 챔피언</th>
				<th>메모</th>
<!-- 				<th>등록일시</th> -->
			</tr>
			<tr>
				<th colspan=10>===============================================================================================================================</th>
			</tr>
		</thead>
		<tbody id="preflag">
			<!-- 	10개 데이터들어감 -->
		</tbody>
	</table>
</div>
