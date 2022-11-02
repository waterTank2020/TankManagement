package com.example.demo2;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import entity.MonthlyFlow;

public interface MonthlyFlowRepository  extends MongoRepository<MonthlyFlow,String>{
	List<MonthlyFlow> findByUserId(String id);
}
