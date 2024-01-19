package com.project.projectFinal.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.PaymentDto;
import com.project.projectFinal.service.MemberService;
import com.siot.IamportRestClient.IamportClient;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.IamportResponse;
import com.siot.IamportRestClient.response.Payment;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;

//카카오페이 테스트결제
@RestController
@Slf4j
public class RestPayController {
	
	@Autowired
	MemberService memberService;
	
	private String code = "imp11857210";
	private String restApiKey = "2041270815208405";
	private String restApiSecret = "JwMJbksB0d2M2DbktCriBmffO2tF3PK2uBdUyYW2BehSJQw9X23E0hJNYQj0XlJOvBTPGHH5997CwRI1";
	private IamportClient iamportClient;

	@PostConstruct
	public void init() {
		this.iamportClient = new IamportClient(restApiKey, restApiSecret);
	}

	@PostMapping("/pay/{imp_uid}")
	public IamportResponse<Payment> paymentByImpUid(@PathVariable("imp_uid") String imp_uid)
			throws IamportResponseException, IOException {
		return iamportClient.paymentByImpUid(imp_uid);
	}

	@PostMapping("/payDbSave")
	public String payDbSave(PaymentDto paymentDto) {
		
		memberService.payDbSave(paymentDto);
		
		return "";
	}

}
