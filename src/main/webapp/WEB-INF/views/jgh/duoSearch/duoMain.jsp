<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>

	<div id=duoTable class=searchDuoT>
		<h1 align="center">롤 듀오DUO 구하기</h1>
		<div align="right">
			<button type="button" class="btn btn-success" type="button"
				class="btn btn-primary" data-bs-toggle="modal"
				data-bs-target="#exampleModal">글쓰기</button>
			<p></p>
		</div>
		
		<input type = "hidden"  value ="${dList[0].dcnt}" id = "dcnt"/>
		<table class="table table-dark table-hover">
			<thead>
				<tr >
					<th>연승/연패</th>
					<th>이름</th>
					<th>주포지션</th>
					<th>티어</th>
					<th>게임타입</th>
					<th>찾는포지션</th>
					<th>최근 챔피언</th>
					<th>메모</th>
					<th>등록일시</th>
					<th></th>
				</tr>
					<tr>
					<th colspan = 10 >=========================================================================================================================</th>
					
				</tr>
			</thead>
			<tbody id="preflag">

				<c:forEach var="ditem" items="${dList}">

					<tr >
					
						<td>개발중</td>
						<td>${ditem.userId}</td>
						<td>${ditem.myPosition}</td>
						<td>${ditem.tier}</td>
						<td>${ditem.gameType}</td>
						<td>${ditem.duoPosition}</td>
						<td>개발중</td>
						<td>${ditem.memo}</td>
						<td> ${ditem.date}</td>
						<td>
							<div class="dropdown">
								<button class="btn btn-secondary dropdown-toggle" type="button"
									data-bs-toggle="dropdown" aria-expanded="false">...</button>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">수정</a></li>
									<li><a class="dropdown-item" href="javascript:deleteDuo(${ditem.dcnt})">삭제</a></li>
								</ul>
							</div>
						</td>
						
					</tr>
				 
				</c:forEach>



			</tbody>

		</table>
	</div>


	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">소환사 찾기</h1>
					<p>(마이크 가능여부 추가)</p>
					<button type="button" class="btn-close" data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">


					<div class="mb-3">
						<label class="form-label">${userId}님의 듀오를 찾아드립니다.</label> <input
							type="hidden" id="uesrId" value="${userId}">
					</div>
					<hr>
					<p>본인 포지션</p>

					<select class="form-select form-select-sm"
						aria-label="Small select example" id="position">
						<option selected>포지션</option>
						<option value="top">탑</option>
						<option value="jungle">정글</option>
						<option value="mid">미드</option>
						<option value="bot">원딜</option>
						<option value="support">서폿</option>
					</select>

					<hr>
					<p>찾는 듀오의 라인을 골라주세요</p>

					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio"
							name="inlineRadioOptions" id="inlineRadio1" value="top">
						<label class="form-check-label" for="inlineRadio1">탑</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio"
							name="inlineRadioOptions" id="inlineRadio2" value="jungle">
						<label class="form-check-label" for="inlineRadio2">정글</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio"
							name="inlineRadioOptions" id="inlineRadio3" value="mid">
						<label class="form-check-label" for="inlineRadio3">미드</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio"
							name="inlineRadioOptions" id="inlineRadio4" value="bot">
						<label class="form-check-label" for="inlineRadio4">원딜</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio"
							name="inlineRadioOptions" id="inlineRadio5" value="support">
						<label class="form-check-label" for="inlineRadio5">서폿</label>
					</div>

					<hr>

					<div class="input-group mb-3">
						<label class="input-group-text" for="tier">현재티어</label> <select
							class="form-select" id="tier">
							<option selected>필수선택</option>

							<option value="아이언">아이언</option>
							<option value="브론즈">브론즈</option>
							<option value="실버">실버</option>
							<option value="골드">골드</option>
							<option value="플레티넘">플레티넘</option>
							<option value="에메랄드">에메랄드</option>
							<option value="다이야몬드">다이야몬드</option>
						</select> <label class="input-group-text" for="gameType">원하는 게임종류</label> <select
							class="form-select" id="gameType">
							<option selected>필수선택</option>
							<option value="칼바람나락">칼바람나락</option>
							<option value="솔로랭크">솔로랭크</option>
							<option value="자유랭크">자유랭크</option>
							<option value="아레나">아레나</option>
							<option value="일반게임">일반게임</option>
						</select>

					</div>


					<hr>



					<div class="mb-3">
						<label for="exampleFormControlTextarea1" class="form-label">남길
							메모(맨트가 좋을수록 승률이 올라갑니다.)</label>
						<textarea class="form-control" id="textArea" rows="1"
							placeholder="멘탈 좋으신분 찾습니다."></textarea>
					</div>



				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" id="duoSearchBtn">듀오찾기등록</button>
					<button type="button" class="btn btn-secondary"
						data-bs-dismiss="modal">닫기</button>

				</div>
			</div>
		</div>
	</div>






</body>
</html>