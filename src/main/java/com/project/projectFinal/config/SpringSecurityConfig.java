package com.project.projectFinal.config;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import com.project.projectFinal.handler.CustomLoginSuccessHandler;
import com.project.projectFinal.handler.SecurityAccessDeniedHandler;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@EnableWebSecurity
@EnableMethodSecurity
@Configuration
@RequiredArgsConstructor
public class SpringSecurityConfig {

	@Autowired
	MemberService memberService;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		return http

				// 개발용이므로 csrf 옵션끄기.
				.csrf(AbstractHttpConfigurer::disable)

				.cors(corsCustomizer -> corsCustomizer.configurationSource(new CorsConfigurationSource() {
					@Override
					public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
						CorsConfiguration config = new CorsConfiguration();
						config.setAllowedOrigins(Collections.singletonList("http://localhost/jgh"));
						config.setAllowedMethods(Collections.singletonList("*"));
						config.setAllowCredentials(true);
						config.setAllowedHeaders(Collections.singletonList("*"));
						config.setMaxAge(3600L); // 1시간
						return config;
					}
				}))

				.authorizeHttpRequests((authorizeRequests) -> {

					// 로그인 성공시 필터에 저장되어 있는 아이디값을 세션에 아이디값저장, 인증시에만 들어가게 막아둠
					authorizeRequests.requestMatchers("/admin/**").authenticated();
//					authorizeRequests.requestMatchers("/jgh/**").authenticated(); 

					// 아래 내용을 메소드와 클래스에 붙이는걸로 변경
//					authorizeRequests.requestMatchers("/super/**").hasAuthority("SUPERADMIN");
//						// ROLE_은 붙이면 안됨. hasAnyRole()을 사용할 때 자동으로 ROLE_이 붙기 때문이다.
//
//					authorizeRequests.requestMatchers("/admin/**").hasAnyAuthority("ADMIN","SUPERADMIN");

					authorizeRequests.anyRequest().permitAll();

				}).exceptionHandling((authenticationManager) -> { // 예외처리 ex)권한이 없을때들어가면 /new로 이동함
					authenticationManager.accessDeniedHandler(new SecurityAccessDeniedHandler());
				})

				.formLogin((formLogin) -> {
					/* 권한이 필요한 요청은 해당 url로 리다이렉트 */
					formLogin.loginPage("/member/login").defaultSuccessUrl("/")
							.successHandler(new CustomLoginSuccessHandler()) // 성공시 세션에 아이디 저장
							.failureUrl("/member/login");
				}).logout((logOut) -> {

					logOut.logoutRequestMatcher(new AntPathRequestMatcher("/member/logout")).logoutSuccessUrl("/new");
				}).build();

		// 인증 거부 관련 처리

	}

	// 정적 리소스 주소는 시큐리티에서 제외
	@Bean
	public WebSecurityCustomizer webSecurityCustomizer() {
		return (web) -> web.ignoring().requestMatchers("/resorces/**");

	}

	@Bean
	public static BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(memberService).passwordEncoder(bCryptPasswordEncoder());
	}

	@Bean
	public AuthenticationSuccessHandler successHandler() {
		return new CustomLoginSuccessHandler();
	}

}