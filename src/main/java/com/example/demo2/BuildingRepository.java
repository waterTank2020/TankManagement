package com.example.demo2;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import entity.Building;


public interface BuildingRepository extends MongoRepository<Building,String>{
	List<Building> findByUserId(String id);
}
