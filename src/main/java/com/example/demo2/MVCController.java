package com.example.demo2;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MVCController {

	@RequestMapping("/")
	public String defaultPage(Model model) {
		return "login";
	}
	@RequestMapping("/login")
	public String login(Model model) {
		return "login";
	}
	
	@RequestMapping("/signUp")
	public String signUp(Model model) {
		return "sign-up";
	}
	
	@RequestMapping("/welcome")
	public String welcome(Model model) {
		return "welcome";
	}
	
	@RequestMapping("/home")
	public String home(Model model) {
		return "home";
	}
}
