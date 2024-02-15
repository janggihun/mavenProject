<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<div class="container-fluid">

	<h1>과제 : 본인이 아이디 하나 회원가입시킨 뒤에 그 아이디에서 이름 : aaa로 포인트를 보내보기</h1>
	<br>

	<h2>조건 : 먼저 db에 저장하고 나서 그 뒤에 조건을 적어서 롤백을 해야함.(선 실행, 후 유효성검사)</h2>
	</br>


	<li>예외처리는 본인이 만들어보기 , 장소는 : custonEx 패키지 아래에 만들것</li>
	<li>포인트 보낼 시 본인 돈이 마이너스가 되면 안됨</li>
	<li>친구 이름이 없으면 포인트 차감되면 안됨</li>
	<li>[그 외 경우의 수는 본인이 찾아서 해볼것]</li>
	<li>비동기로 하면 좋지만 못한다면 동기로라도 해볼것</li>
	<li>현재 페이지 말고 모듈화 하여 js는 js하위 폴더에 만들어볼것</li>
	<li>db에서 확인이 아닌 현재 페이지에서 확인 가능하게 만들수 있으면 만들어 볼것</li></br> 
	<li>궁금한게 있으면 물어볼것</li>
	<li>참고 : customEx(패키지) > CustomException</li>
	</br>장기훈 예시 >> </br> 
	현재 aaa의 포인트 : <input type="text" value="" disabled="disabled" id = "aaaPoint" /></br>
	 My 포인트: <input type="text" value="" disabled="disabled" id = "myPoint" /><button id = "plus100">포인트 100 추가</button><p></p><span id = "checkMoney"></span>
	
	</br>  친구Id:<input type="text" placeholder="친구 id를 적어주세요" id = "friendId"/> 송금 포인트 : <input type="text" id = "friendPoint" placeholder="송금포인트(숫자)" style = "width : 150px;" /> <button id = "sendPoint">포인트 보내기</button>
	</br>
	</br>





	<hr>



	김동근 :



	<hr>



	김윤태 :



	<hr>



	김진문 :



	<hr>



	송태민 :



	<hr>



	정혜린 :



	<hr>










</div>








