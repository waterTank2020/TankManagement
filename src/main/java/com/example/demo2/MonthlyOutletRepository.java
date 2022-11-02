package com.example.demo2;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


import entity.MonthlyOutlet;

public interface MonthlyOutletRepository extends MongoRepository<MonthlyOutlet,String>{
	List<MonthlyOutlet> findByUserId(String id);
}
