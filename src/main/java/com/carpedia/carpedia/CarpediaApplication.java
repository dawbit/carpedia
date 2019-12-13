package com.carpedia.carpedia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableAutoConfiguration
@SpringBootApplication
public class CarpediaApplication{
	public static void main(String[] args) {
		SpringApplication.run(CarpediaApplication.class, args);
	}
}
