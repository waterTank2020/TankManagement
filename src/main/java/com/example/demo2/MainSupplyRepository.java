package com.example.demo2;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import entity.MainSupply;

public interface MainSupplyRepository extends MongoRepository<MainSupply,String>{
	List<MainSupply> findByUserId(String id);
}
