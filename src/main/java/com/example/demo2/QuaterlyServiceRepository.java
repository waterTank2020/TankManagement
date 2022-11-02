package com.example.demo2;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import entity.QuaterlyService;

public interface QuaterlyServiceRepository extends MongoRepository<QuaterlyService,String> {
	List<QuaterlyService> findByUserId(String id);
}
