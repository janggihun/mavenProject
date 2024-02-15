package com.project.projectFinal.kjmcontroller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.service.MailService;

@RestController
public class RestMailController {
	@Autowired
    MailService mailService;
	

   
    @PostMapping("/mail")
    public String MailSend(String mail){

       int number = mailService.sendMail(mail);

       String num = "" + number;

       return num;
    }
}
