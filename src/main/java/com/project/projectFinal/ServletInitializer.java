package com.project.projectFinal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer  {

	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ProjectFinalApplication.class);
	}
    public static void main(String[] args) {
        SpringApplication.run(ProjectFinalApplication.class, args);
    }
}
