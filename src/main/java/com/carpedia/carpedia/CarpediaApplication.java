package com.carpedia.carpedia;

import com.carpedia.carpedia.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableAutoConfiguration
@SpringBootApplication
public class CarpediaApplication implements CommandLineRunner {

	@Autowired
	SimplyCarRepository repository;

	@Autowired
	CountryRepository country;

	@Autowired
    SegmentRepository segment;

	@Autowired
	BodyTypeRepository bodytype;

	@Autowired
	EngineRepository engine;

	@Autowired
	CompanyRepository company;

	@Autowired
	UserRepository user;

	@Autowired
	CarRepository car;

	public static void main(String[] args) {
		SpringApplication.run(CarpediaApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		// clear all record if existed
		repository.deleteAll();
		country.deleteAll();
		segment.deleteAll();
		bodytype.deleteAll();
		engine.deleteAll();
		company.deleteAll();
		user.deleteAll();
		car.deleteAll();
	}

}
