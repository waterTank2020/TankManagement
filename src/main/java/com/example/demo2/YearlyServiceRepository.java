package com.example.demo2;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import entity.YearlyService;


public interface YearlyServiceRepository extends MongoRepository<YearlyService,String> {
	List<YearlyService> findByUserId(String id);
}
