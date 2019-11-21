package com.carpedia.carpedia;

import com.carpedia.carpedia.repository.SimplyCarRepository;
import com.carpedia.carpedia.repository.CountryRepository;

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

	public static void main(String[] args) {
		SpringApplication.run(CarpediaApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		// clear all record if existed before do the tutorial with new data
		repository.deleteAll();
		country.deleteAll();
	}

}
