package com.example.demo2;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import entity.Building;
import entity.MainSupply;
import entity.MonthlyFlow;
import entity.MonthlyOutlet;
import entity.QuaterlyService;
import entity.User;
import entity.YearlyService;

@RequestMapping("/app")
@org.springframework.web.bind.annotation.RestController
public class AppController {
		
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MonthlyFlowRepository monthlyFlowRepository;
	@Autowired
	private YearlyServiceRepository yearlyServiceRepository;
	@Autowired
	private MainSupplyRepository mainSupplyRepository;
	@Autowired
	private MonthlyOutletRepository monthlyOutletRepository;
	@Autowired
	private QuaterlyServiceRepository quaterlyServiceRepository;
	@Autowired
	private BuildingRepository buildingRepository;
	
	@RequestMapping(value = "/sign-up", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Object> createUser(@RequestBody User user) {
		HashMap<String, Object> responseJson 			= new HashMap<String, Object>();
		user = userRepository.save(user);
		responseJson.put("user", user);
		return new ResponseEntity<>(responseJson, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/log-in", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Object> checkCredentials(@RequestBody User user) {
		HashMap<String, Object> responseJson 			= new HashMap<String, Object>();
		User loggedInUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword()); 
		if(loggedInUser != null) {
			responseJson.put("response", "success");
			responseJson.put("user", loggedInUser);
		}else {
			responseJson.put("response", "failure");
		}
		return new ResponseEntity<>(responseJson, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create-building", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Object> createBuilding(@RequestBody Building building) {
		HashMap<String, Object> responseJson 			= new HashMap<String, Object>();
		building = buildingRepository.save(building);
		responseJson.put("building", building);
		return new ResponseEntity<>(responseJson, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create-yearly-service", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Object> createYearlyService(@RequestBody YearlyService yearlyService) {
		HashMap<String, Object> responseJson 			= new HashMap<String, Object>();
		yearlyService = yearlyServiceRepository.save(yearlyService);
		responseJson.put("yearlyService", yearlyService);
		return new ResponseEntity<>(responseJson, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create-quaterly-service", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Object> createQuaterlyService(@RequestBody QuaterlyService quaterlyService) {
		HashMap<String, Object> responseJson 			= new HashMap<String, Object>();
		quaterlyService = quaterlyServiceRepository.save(quaterlyService);
		responseJson.put("quaterlyService", quaterlyService);
		return new ResponseEntity<>(responseJson, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create-main-supply", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Object> createMainSupply(@RequestBody MainSupply mainSupply) {
		HashMap<String, Object> responseJson 			= new HashMap<String, Object>();
		mainSupply = mainSupplyRepository.save(mainSupply);
		responseJson.put("mainSupply", mainSupply);
		return new ResponseEntity<>(responseJson, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create-monthly-outlet", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Object> createMonthlyOutlet(@RequestBody MonthlyOutlet monthlyOutlet) {
		HashMap<String, Object> responseJson 			= new HashMap<String, Object>();
		monthlyOutlet = monthlyOutletRepository.save(monthlyOutlet);
		responseJson.put("monthlyOutlet", monthlyOutlet);
		return new ResponseEntity<>(responseJson, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create-monthly-flow", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Object> createMonthlyFlow(@RequestBody MonthlyFlow monthlyFlow) {
		HashMap<String, Object> responseJson 			= new HashMap<String, Object>();
		monthlyFlow = monthlyFlowRepository.save(monthlyFlow);
		responseJson.put("monthlyFlow", monthlyFlow);
		return new ResponseEntity<>(responseJson, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/fetch-data/{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<Object> fetchData(@PathVariable("id") String id) {
		HashMap<String, Object> responseJson 			= new HashMap<String, Object>();
		responseJson.put("buildings", buildingRepository.findByUserId(id));
		responseJson.put("yearlyService", yearlyServiceRepository.findByUserId(id));
		responseJson.put("quaterlyService", quaterlyServiceRepository.findByUserId(id));
		responseJson.put("mainSupply", mainSupplyRepository.findByUserId(id));
		responseJson.put("monthlyOutlet", monthlyOutletRepository.findByUserId(id));
		responseJson.put("monthlyFlow", monthlyFlowRepository.findByUserId(id));
		return new ResponseEntity<>(responseJson, HttpStatus.OK);
	}
}
