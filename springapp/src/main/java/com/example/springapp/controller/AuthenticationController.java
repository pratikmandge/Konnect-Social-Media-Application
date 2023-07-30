package com.example.springapp.controller;

import com.example.springapp.service.AuthenticationService;
import com.example.springapp.controller.AuthenticationRequest;
import com.example.springapp.controller.AuthenticationResponse;
import com.example.springapp.controller.RegisterRequest;

import org.springframework.security.core.userdetails.UserDetails;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class AuthenticationController {

	private final AuthenticationService service;

	@PostMapping("/api/register")
	public ResponseEntity<AuthenticationResponse> registerUser(@RequestBody RegisterRequest request) {
		try {
			AuthenticationResponse response = service.registerUser(request);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new AuthenticationResponse("User registration failed: " + e.getMessage()));
		}
	}

	@PostMapping("/api/register/admin")
	public ResponseEntity<AuthenticationResponse> registerAdmin(@RequestBody RegisterRequest request) {
		try {
			AuthenticationResponse response = service.registerAdmin(request);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new AuthenticationResponse("Admin registration failed: " + e.getMessage()));
		}
	}

	@PostMapping("/api/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
		try {
			AuthenticationResponse response = service.authenticate(request);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new AuthenticationResponse("Authentication failed: " + e.getMessage()));
		}
	}

	@PostMapping("/api/user/details")
    public ResponseEntity<UserDetails> getUserDetailsFromToken(@RequestBody String token) {
        try {
            UserDetails userDetails = service.getUserDetailsFromToken(token);
            return ResponseEntity.ok(userDetails);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
