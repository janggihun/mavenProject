
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>롤 영혼의 Duo 찾기</title>
<!-- css들어갈자리  -->

</head>
<body>
<%@include file="../inc/header.jsp"%>

<h1>[[총괄 관리자만 들어올수 있습니다.]]</h1>


<a href = "/admin/mng">중관관리자페이지가기</a>

<script defer src="/js/admin/info.js"></script>


- 구현예정 >> 총 관리자 : 아이디 찾아서 클릭후에 아이디에 권한주기 </br>

어떤 행동을 할때 그 행동에 맞는 로그를 찍을수 있게 로그 테이블을 만듬</br>


관리자 나누기 </br>

- 인사담당 >> 유저의 로그인, 삭제 ,탈퇴관리 그 유저가 자주 들어오는 시간대별 그래프
			
 hrmAdmin</br>

- 결제 담당 >> 유저가 결제시 결제한 금액만큼 들어왔는지 확인 가능한 테이블표 필요 그외 볼수 있는 다양한 분석표 넣기 
Payment manager
</br>
- 아이템 페이지 담당 >>
  어떤 아이템을 주로 사용자들은 보는가 ? 클릭시 db에 누적을 만들어서 가능
  몇일에 가장 많이 보는가 ? 
  사용자가 좋아할만한 것부터 먼저 보여준는가?
  
  전체적인 그래프화 및 세부적인 그래프화
  </br>
- 캐릭터 전적 담당 >>

	db에서 가지고온 정보를 토대로 그래프화

</br>
- 메인 css 담당 >> 

</br>






</body>
</html>