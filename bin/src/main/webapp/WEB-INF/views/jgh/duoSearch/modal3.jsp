<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>




<div id="container">


	<div id="lorem-ipsum"></div>
</div>
<div id="modal" class="modal-overlay">
	<div class="modal-window">
		<div class="title">
			<h2>${userId}님의듀오찾기</h2>
		</div>
		<div class="close-area">X</div>
		<div class="content">
	
	
	
	
			<label>내포지션</label> <select id=myPosition>
				<option selected disabled hidden value="필수선택">필수선택</option>
				<option value="탑">탑</option>
				<option value="정글">정글</option>
				<option value="미드">미드</option>
				<option value="원딜">원딜</option>
				<option value="서폿">서폿</option>
			</select>
			<hr>
			<label>찾는 포지션</label> <select id=duoPosition>
				<option selected disabled hidden value="필수선택">필수선택</option>
				<option value="탑">탑</option>
				<option value="정글">정글</option>
				<option value="미드">미드</option>
				<option value="원딜">원딜</option>
				<option value="서폿">서폿</option>
			</select>
			<hr>
			<label>티어</label> <select id="tier">
				<option selected disabled hidden selected>필수선택</option>
				<option value="아이언">아이언</option>
				<option value="브론즈">브론즈</option>
				<option value="실버">실버</option>
				<option value="골드">골드</option>
				<option value="플레티넘">플레티넘</option>
				<option value="에메랄드">에메랄드</option>
				<option value="다이야몬드">다이야몬드</option>
			</select>
			<hr>
			<label>종류</label> <select id="gameType">
				<option selected disabled hidden selected>필수선택</option>
				<option value="칼바람나락">칼바람나락</option>
				<option value="솔로랭크">솔로랭크</option>
				<option value="자유랭크">자유랭크</option>
				<option value="일반게임">일반게임</option>
			</select>
			<hr>
			<label>메모</label> <select id="memo">
				<option selected disabled hidden selected>필수선택</option>
				<option value="열심히 해봐요">열심히 해봐요</option>
				<option value="멘탈 좋은사람만~">멘탈 좋은사람만~</option>
				<option value="님만 오면 고">님만 오면 고</option>
				<option value="팀원을 구해요">팀원을 구해요</option>
			</select>
			<hr>
			<div class="in-line">

				<input type="button" id="duoSaveBtn" value="JOIN">
			</div>

		</div>

	</div>


</div>