package com.example.springapp.controller;

import java.time.LocalDate;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
	private String username;
	private String password;
	private String email;
	private String bio;
	@Builder.Default
	private LocalDate registrationDate = LocalDate.now();
	private Date dateOfBirth;
	private String profilePhotoPath;
    private String coverPhotoPath;
}
