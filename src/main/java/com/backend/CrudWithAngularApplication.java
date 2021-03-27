package com.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudWithAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudWithAngularApplication.class, args);
		System.out.println("Server Started SuccessFully");
	}

}
