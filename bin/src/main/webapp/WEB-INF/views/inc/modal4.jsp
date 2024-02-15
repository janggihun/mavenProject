

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
<div id="paymentModal" class="paymentModal">
	<div class="payment-modal-content">
		<div class="page-header">
			<h1>결제창</h1>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="row">
					<div class="col-sm-12">
						<h2>결제창창 테스트입니다.</h2>

						원하는 금액을 선택해주세요
						<hr>
						<label>결정금액</label> <select id=totalMoney>

							<option value="1100">1,100원</option>
							<option value="2200">2,200원</option>
							<option value="5500">5,500원</option>
							<option value="11000">11,000원</option>
							<option value="55000">55,000원</option>

						</select>

						<button id = "payNow">결제하기</button>



					</div>
				</div>
			</div>
		</div>
		<hr>
		<div
			style="cursor: pointer; background-color: #DDDDDD; text-align: center; padding-bottom: 10px; padding-top: 10px;"
			onClick="closeModal();">
			<span class="pop_bt modalCloseBtn" style="font-size: 13pt;">결제취소
			</span>
		</div>
	</div>
</div>
