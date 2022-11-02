package com.example.demo2;

import org.springframework.data.mongodb.repository.MongoRepository;

import entity.User;

public interface UserRepository extends MongoRepository<User,String>{
	
	public User findByEmailAndPassword(String email,String password);

}
