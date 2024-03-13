
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

	<center>
		<h1>[[총괄 관리자 페이지입니다.]]</h1>
	</center>

	<script defer src="/js/admin/info.js"></script>


	</br>
	<table  style="border:1px solid black;margin-left:auto;margin-right:auto;">
		<thead>
			<tr>
				<td style="text-align: center">- 메뉴</td>
				<td style="text-align: center">- 내용</td>

			</tr>

		</thead>

		<tbody>
			<tr>
				<td style="text-align: center">- 권한주기[총관리자전용]>></td>
				<td><button>
						<a href="/admin/hrd">권한 페이지</a>
					</button></td>
			</tr>
			<tr>
				<td style="text-align:center">- 매니저[고객센터]>></td>
				<td><button>
						<a href="/admin/inq">고객센터 매니저 페이지</a>
					</button></td>
			</tr>
			<tr>
				<td style="text-align:center">- 매니저[결제]>></td>
				<td><button>
						<a href="/admin/pay">결제 매니저 페이지</a>
					</button></td
			</tr>
			<tr>
				<td style="text-align:center">- 매니저[챔피언]>></td>
				<td><button>
						<a href="/jhl/admin">챔피언 매니저페이지</a>
					</button></td>
			</tr>


		</tbody>
	</table>








</body>
</html>