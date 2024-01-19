<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<div class="container-fluid">

	<!--     <form class="d-flex"> -->
	<div class="d-flex" style="justify-content: center;">
		<input class="form-control me-2" style="width: 500px;" id="gameName"
			name="gameName" value="bury my비애" type="search" placeholder="Search"
			placeholder="캐릭터명을 입력해주세요" aria-label="Search"> <input
			class="form-control me-2" style="width: 100px;"
			placeholder="태그를 입력해주세요" value="KR1" id="tagLine" name="tagLine"
			type="search" placeholder="Search" aria-label="Search">
		<button class="btn btn-outline-success" type="submit" id="idSearch">Search</button>
		<!--     </form> -->

	</div>

</div>
<div id = "doneflag" align = "center"></div>


<div id='mask'
	style='position: absolute; z-index: 9000; background-color: #000000; display: none; left: 0; top: 0;'></div>


<img scr="/img/loadingimg.gif" style='display: block;'>
</br>










</div>